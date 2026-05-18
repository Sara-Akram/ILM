window.ILM_PAGES = {

  dashboard() {
    return `
      <div class="page-header">
        <div><h1>Good morning, <span style="color:var(--accent)">Sara</span></h1><p>Monday, May 18 · 3 sessions today</p></div>
        <button class="btn btn-primary" onclick="ILM.navigate('classroom')">+ Start Session</button>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-card-label">Sessions this week</div><div class="stat-card-value">12</div><div class="stat-card-sub">↑ 3 from last week</div></div>
        <div class="stat-card"><div class="stat-card-label">Active students</div><div class="stat-card-value">8</div><div class="stat-card-sub">↑ 1 new this month</div></div>
        <div class="stat-card"><div class="stat-card-label">Avg. session</div><div class="stat-card-value">54<span>m</span></div><div class="stat-card-sub neutral">Steady</div></div>
        <div class="stat-card"><div class="stat-card-label">Rating</div><div class="stat-card-value">4.9★</div><div class="stat-card-sub">41 reviews</div></div>
      </div>
      <div class="two-col">
        <div class="card">
          <div class="card-header"><span class="card-title">Today's sessions</span><span class="card-action" onclick="ILM.navigate('sessions')">View all →</span></div>
          ${[
            {av:'av-amber',i:'E',name:'Emma Thompson', sub:'Biology · Grade 10',  badge:'badge-live',     bt:'● Live',   t:'2:00 – 3:00 PM'},
            {av:'av-warm', i:'L',name:'Lucas Bennett', sub:'Chemistry · Grade 11',badge:'badge-upcoming', bt:'Upcoming', t:'4:00 – 5:00 PM'},
            {av:'av-rose', i:'S',name:'Sophie Miller', sub:'Math · Grade 8',      badge:'badge-done',     bt:'Done',     t:'10:00 – 11:00 AM'},
            {av:'av-blue', i:'J',name:'Jake Harrison', sub:'English · Grade 6',   badge:'badge-upcoming', bt:'Upcoming', t:'6:00 – 7:00 PM'},
          ].map(s=>`
            <div class="session-row">
              <div class="s-avatar ${s.av}">${s.i}</div>
              <div class="s-info"><div class="s-name">${s.name}</div><div class="s-sub">${s.sub}</div></div>
              <div class="s-time"><span class="badge ${s.badge}">${s.bt}</span><br>${s.t}</div>
            </div>`).join('')}
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">Earnings</span><span style="font-size:11px;color:var(--muted)">May 2026</span></div>
          <div class="earn-body">
            <div class="earn-total">$1,240</div>
            <div class="earn-sub">31 sessions completed</div>
            <div class="earn-row"><span class="earn-row-label">This week</span><span class="earn-row-val">$380</span></div>
            <div class="earn-row"><span class="earn-row-label">Pending</span><span class="earn-row-val">$220</span></div>
            <div class="earn-row"><span class="earn-row-label">Platform fee (15%)</span><span class="earn-row-val negative">−$57</span></div>
            <div class="earn-row"><span class="earn-row-label">Next payout</span><span class="earn-row-val positive">May 23</span></div>
          </div>
        </div>
      </div>`;
  },

  student() {
    return `
      <div class="page-header">
        <div><h1>Hello, <span style="color:var(--accent)">Emma</span></h1><p>Monday, May 18 · 1 session today</p></div>
        <button class="btn btn-primary" onclick="ILM.navigate('classroom')">Join Session</button>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-card-label">Sessions completed</div><div class="stat-card-value">24</div><div class="stat-card-sub">This month</div></div>
        <div class="stat-card"><div class="stat-card-label">Subjects</div><div class="stat-card-value">3</div><div class="stat-card-sub neutral">Biology, Math, English</div></div>
        <div class="stat-card"><div class="stat-card-label">Progress</div><div class="stat-card-value">82<span>%</span></div><div class="stat-card-sub">↑ 6% this week</div></div>
        <div class="stat-card"><div class="stat-card-label">Streak</div><div class="stat-card-value">7<span>d</span></div><div class="stat-card-sub">Keep it up!</div></div>
      </div>
      <div class="two-col">
        <div class="card">
          <div class="card-header"><span class="card-title">Upcoming sessions</span></div>
          ${[
            {av:'av-warm',i:'S',name:'Sara A.',     sub:'Biology · Today 2:00 PM',  badge:'badge-live',     bt:'● Live now'},
            {av:'av-warm',i:'S',name:'Sara A.',     sub:'Math · Tomorrow 3:00 PM',  badge:'badge-upcoming', bt:'Tomorrow'},
            {av:'av-blue',i:'M',name:'Mr. Collins', sub:'English · Thu 4:00 PM',    badge:'badge-upcoming', bt:'Thursday'},
          ].map(s=>`
            <div class="session-row">
              <div class="s-avatar ${s.av}">${s.i}</div>
              <div class="s-info"><div class="s-name">${s.name}</div><div class="s-sub">${s.sub}</div></div>
              <div class="s-time"><span class="badge ${s.badge}">${s.bt}</span></div>
            </div>`).join('')}
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">My progress</span></div>
          <div style="padding:18px 20px;display:flex;flex-direction:column;gap:14px;">
            ${[{sub:'Biology',pct:82},{sub:'Mathematics',pct:67},{sub:'English',pct:91}].map(p=>`
              <div>
                <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:6px;">
                  <span style="font-weight:500">${p.sub}</span><span style="color:var(--muted)">${p.pct}%</span>
                </div>
                <div style="height:6px;background:var(--border-mid);border-radius:99px;overflow:hidden;">
                  <div style="height:100%;width:${p.pct}%;background:var(--ink);border-radius:99px;"></div>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>`;
  },

  admin() {
    return `
      <div class="page-header">
        <div><h1>Admin Overview</h1><p>Monday, May 18 · Platform summary</p></div>
        <button class="btn btn-primary">+ Add User</button>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-card-label">Total teachers</div><div class="stat-card-value">48</div><div class="stat-card-sub">↑ 4 this month</div></div>
        <div class="stat-card"><div class="stat-card-label">Total students</div><div class="stat-card-value">312</div><div class="stat-card-sub">↑ 28 this month</div></div>
        <div class="stat-card"><div class="stat-card-label">Sessions today</div><div class="stat-card-value">87</div><div class="stat-card-sub neutral">Live now: 23</div></div>
        <div class="stat-card"><div class="stat-card-label">Revenue (May)</div><div class="stat-card-value">$18k</div><div class="stat-card-sub">↑ 12% from Apr</div></div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Recent signups</span><span class="card-action">View all →</span></div>
        <table class="data-table">
          <thead><tr><th>Name</th><th>Role</th><th>Joined</th><th>Status</th></tr></thead>
          <tbody>
            ${[
              {n:'Emma Thompson', r:'Student',d:'May 17',s:'Active'},
              {n:'Mr. James Cole',r:'Teacher', d:'May 16',s:'Pending'},
              {n:'Sophie Miller', r:'Student', d:'May 15',s:'Active'},
              {n:'Lucas Bennett', r:'Student', d:'May 14',s:'Active'},
              {n:'Dr. Anne Walsh',r:'Teacher', d:'May 13',s:'Active'},
            ].map(u=>`
              <tr>
                <td class="td-name">${u.n}</td><td class="td-muted">${u.r}</td><td class="td-muted">${u.d}</td>
                <td><span class="badge ${u.s==='Active'?'badge-live':'badge-upcoming'}">${u.s}</span></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  },

  sessions() {
    return `
      <div class="page-header">
        <div><h1>Sessions</h1><p>Manage your schedule</p></div>
        <button class="btn btn-primary">+ Book Session</button>
      </div>

      <div class="schedule-tabs" id="schedule-tabs">
        <div class="schedule-tab active" onclick="switchSchedule('daily',this)">Daily</div>
        <div class="schedule-tab" onclick="switchSchedule('weekly',this)">Weekly</div>
        <div class="schedule-tab" onclick="switchSchedule('monthly',this)">Monthly</div>
      </div>

      <div id="schedule-content">
        ${renderSchedule('daily')}
      </div>

      <script>
        window.switchSchedule = function(view, el) {
          document.querySelectorAll('.schedule-tab').forEach(t => t.classList.remove('active'));
          el.classList.add('active');
          document.getElementById('schedule-content').innerHTML = renderSchedule(view);
        };

        window.renderSchedule = function(view) {
          const all = [
            {av:'av-amber',i:'E',name:'Emma Thompson', sub:'Biology · Grade 10',   badge:'badge-live',     bt:'● Live',   t:'Today · 2:00 – 3:00 PM',      day:'Mon'},
            {av:'av-warm', i:'L',name:'Lucas Bennett', sub:'Chemistry · Grade 11', badge:'badge-upcoming', bt:'Upcoming', t:'Today · 4:00 – 5:00 PM',      day:'Mon'},
            {av:'av-blue', i:'J',name:'Jake Harrison', sub:'English · Grade 6',    badge:'badge-upcoming', bt:'Upcoming', t:'Today · 6:00 – 7:00 PM',      day:'Mon'},
            {av:'av-rose', i:'S',name:'Sophie Miller', sub:'Math · Grade 8',       badge:'badge-done',     bt:'Done',     t:'Today · 10:00 – 11:00 AM',    day:'Mon'},
            {av:'av-purple',i:'O',name:'Olivia Carter',sub:'Physics · Grade 12',   badge:'badge-done',     bt:'Done',     t:'Yesterday · 3:00 PM',          day:'Sun'},
            {av:'av-amber',i:'E',name:'Emma Thompson', sub:'Biology · Grade 10',   badge:'badge-upcoming', bt:'Upcoming', t:'Wednesday · 2:00 PM',          day:'Wed'},
            {av:'av-warm', i:'L',name:'Lucas Bennett', sub:'Chemistry · Grade 11', badge:'badge-upcoming', bt:'Upcoming', t:'Thursday · 4:00 PM',           day:'Thu'},
            {av:'av-blue', i:'J',name:'Jake Harrison', sub:'English · Grade 6',    badge:'badge-upcoming', bt:'Upcoming', t:'Friday · 6:00 PM',             day:'Fri'},
          ];
          const show = view === 'daily' ? all.filter(s=>s.day==='Mon') : all;
          const rows = show.map(s=>\`
            <div class="session-row">
              <div class="s-avatar \${s.av}">\${s.i}</div>
              <div class="s-info"><div class="s-name">\${s.name}</div><div class="s-sub">\${s.sub}</div></div>
              <div class="s-time"><span class="badge \${s.badge}">\${s.bt}</span><br>\${s.t}</div>
              <button class="btn btn-outline btn-sm" style="margin-left:12px;" onclick="ILM.navigate('classroom')">Join</button>
            </div>\`).join('');
          return \`<div class="card">\${rows}</div>\`;
        };
      <\/script>`;
  },

  students() {
    const list = [
      {av:'av-amber',i:'E',name:'Emma Thompson', grade:'Grade 10',sub:'Biology',   n:12,p:82,s:'Active'},
      {av:'av-warm', i:'L',name:'Lucas Bennett', grade:'Grade 11',sub:'Chemistry', n:8, p:67,s:'Active'},
      {av:'av-rose', i:'S',name:'Sophie Miller', grade:'Grade 8', sub:'Math',      n:15,p:91,s:'Active'},
      {av:'av-blue', i:'J',name:'Jake Harrison', grade:'Grade 6', sub:'English',   n:6, p:55,s:'Active'},
      {av:'av-purple',i:'O',name:'Olivia Carter',grade:'Grade 12',sub:'Physics',   n:20,p:95,s:'Active'},
      {av:'av-warm', i:'N',name:'Noah Williams', grade:'Grade 9', sub:'Math',      n:3, p:40,s:'New'},
      {av:'av-rose', i:'C',name:'Chloe Davis',   grade:'Grade 7', sub:'English',   n:9, p:73,s:'Active'},
    ];
    return `
      <div class="page-header">
        <div><h1>Students</h1><p>${list.length} students in your roster</p></div>
        <button class="btn btn-primary">+ Add Student</button>
      </div>
      <div class="card">
        <table class="data-table">
          <thead><tr><th>Student</th><th>Subject</th><th>Sessions</th><th>Progress</th><th>Status</th></tr></thead>
          <tbody>
            ${list.map(s=>`
              <tr>
                <td><div style="display:flex;align-items:center;gap:10px;">
                  <div class="s-avatar ${s.av}" style="width:30px;height:30px;font-size:11px;">${s.i}</div>
                  <div><div class="td-name">${s.name}</div><div class="td-muted" style="font-size:11px;">${s.grade}</div></div>
                </div></td>
                <td class="td-muted">${s.sub}</td><td>${s.n}</td>
                <td><div style="display:flex;align-items:center;gap:8px;">
                  <div class="progress-bar"><div class="progress-fill" style="width:${s.p}%"></div></div>
                  <span style="font-size:11px;color:var(--muted)">${s.p}%</span>
                </div></td>
                <td><span class="badge ${s.s==='Active'?'badge-live':'badge-new'}">${s.s}</span></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  },

  earnings() {
    return `
      <div class="page-header">
        <div><h1>Earnings</h1><p>Track income and payouts</p></div>
        <button class="btn btn-outline">Download report</button>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-card-label">This month</div><div class="stat-card-value">$1,240</div><div class="stat-card-sub">↑ $180 from April</div></div>
        <div class="stat-card"><div class="stat-card-label">This week</div><div class="stat-card-value">$380</div><div class="stat-card-sub neutral">12 sessions</div></div>
        <div class="stat-card"><div class="stat-card-label">Pending</div><div class="stat-card-value">$220</div><div class="stat-card-sub neutral">Pays May 23</div></div>
        <div class="stat-card"><div class="stat-card-label">All time</div><div class="stat-card-value">$8.4k</div><div class="stat-card-sub">Since Jan 2026</div></div>
      </div>
      <div class="two-col">
        <div class="card">
          <div class="card-header"><span class="card-title">Recent payouts</span></div>
          ${[
            {d:'May 16',amt:'$320',n:10},{d:'May 9',amt:'$290',n:9},{d:'May 2',amt:'$350',n:11},{d:'Apr 25',amt:'$280',n:9}
          ].map(p=>`
            <div class="session-row">
              <div style="flex:1"><div class="s-name">${p.d}, 2026</div><div class="s-sub">${p.n} sessions</div></div>
              <div style="text-align:right"><div style="font-weight:500;font-size:15px">${p.amt}</div><span class="badge badge-live">Paid</span></div>
            </div>`).join('')}
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">Payout settings</span></div>
          <div class="earn-body">
            <div class="earn-row"><span class="earn-row-label">Rate per hour</span><span class="earn-row-val">$40</span></div>
            <div class="earn-row"><span class="earn-row-label">Platform fee</span><span class="earn-row-val negative">15%</span></div>
            <div class="earn-row"><span class="earn-row-label">Schedule</span><span class="earn-row-val">Weekly (Fri)</span></div>
            <div class="earn-row"><span class="earn-row-label">Method</span><span class="earn-row-val">Direct deposit</span></div>
          </div>
        </div>
      </div>`;
  },

  classroom() {
    return `
      <div class="classroom-wrap" id="classroom-wrap">

        <div class="classroom-header">
          <div>
            <div class="classroom-title">Biology · Grade 10 — Emma Thompson</div>
            <div class="classroom-time" id="session-timer">00:00</div>
          </div>
          <div style="display:flex;gap:8px;align-items:center;">
            <button class="wb-btn" id="btn-video" onclick="toggleVideoCall()" title="Video Call" style="width:auto;padding:0 12px;gap:6px;color:#e8e0d0;border-color:rgba(255,255,255,0.2);">
              <svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:#e8e0d0"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
              <span style="font-size:12px;">Video</span>
            </button>
            <button class="wb-btn" id="btn-pdf" onclick="togglePdfOverlay()" title="Upload PDF" style="width:auto;padding:0 12px;gap:6px;color:#e8e0d0;border-color:rgba(255,255,255,0.2);">
              <svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:#e8e0d0"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span style="font-size:12px;">PDF</span>
            </button>
            <button class="wb-btn" onclick="toggleFullscreen()" title="Fullscreen" style="width:auto;padding:0 12px;gap:6px;color:#e8e0d0;border-color:rgba(255,255,255,0.2);">
              <svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:#e8e0d0"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
              <span style="font-size:12px;">Fullscreen</span>
            </button>
            <button style="background:#8b2a2a;color:#fff;border:none;padding:8px 14px;border-radius:6px;font-size:12px;font-family:Helvetica,sans-serif;cursor:pointer;" onclick="ILM.navigate('sessions')">End Session</button>
          </div>
        </div>

        <!-- Whiteboard + video -->
        <div class="classroom-main">

          <!-- PDF layer -->
          <div id="pdf-overlay" style="position:absolute;inset:44px 0 0 0;pointer-events:none;display:none;z-index:2;align-items:center;justify-content:center;">
            <img id="pdf-img" src="" style="max-height:100%;max-width:100%;object-fit:contain;opacity:0.38;display:block;margin:auto;">
          </div>

          <!-- Video grid overlay -->
          <div id="video-grid" style="position:absolute;inset:44px 0 0 0;display:none;grid-template-columns:1fr 1fr;gap:3px;padding:3px;background:#0f0c09;z-index:20;">
            <div id="local-stream" style="border-radius:8px;background:#1a1410;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;min-height:120px;">
              <div id="local-avatar" style="display:flex;flex-direction:column;align-items:center;gap:6px;">
                <div style="width:48px;height:48px;border-radius:50%;background:#3a3028;display:flex;align-items:center;justify-content:center;font-size:16px;color:#e8e0d0;font-family:Helvetica;">SA</div>
                <span style="font-size:11px;color:rgba(232,224,208,0.6);font-family:Helvetica;">You</span>
              </div>
              <video id="my-video" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:none;" autoplay muted playsinline></video>
              <div style="position:absolute;bottom:6px;left:8px;font-size:10px;color:#fff;background:rgba(0,0,0,0.5);padding:2px 7px;border-radius:4px;font-family:Helvetica;">You</div>
            </div>
            <div style="border-radius:8px;background:#1a1410;display:flex;align-items:center;justify-content:center;position:relative;min-height:120px;">
              <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
                <div style="width:48px;height:48px;border-radius:50%;background:#3a3028;display:flex;align-items:center;justify-content:center;font-size:16px;color:#e8e0d0;font-family:Helvetica;">ET</div>
                <span style="font-size:11px;color:rgba(232,224,208,0.6);font-family:Helvetica;">Emma</span>
              </div>
              <div style="position:absolute;bottom:6px;left:8px;font-size:10px;color:#fff;background:rgba(0,0,0,0.5);padding:2px 7px;border-radius:4px;font-family:Helvetica;">Emma Thompson</div>
            </div>
            <div style="border-radius:8px;background:#1a1410;display:flex;align-items:center;justify-content:center;position:relative;min-height:120px;">
              <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
                <div style="width:48px;height:48px;border-radius:50%;background:#3a3028;display:flex;align-items:center;justify-content:center;font-size:16px;color:#e8e0d0;font-family:Helvetica;">LB</div>
                <span style="font-size:11px;color:rgba(232,224,208,0.6);font-family:Helvetica;">Lucas</span>
              </div>
              <div style="position:absolute;bottom:6px;left:8px;font-size:10px;color:#fff;background:rgba(0,0,0,0.5);padding:2px 7px;border-radius:4px;font-family:Helvetica;">Lucas Bennett</div>
            </div>
            <div style="border-radius:8px;background:#1a1410;display:flex;align-items:center;justify-content:center;position:relative;min-height:120px;">
              <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
                <div style="width:48px;height:48px;border-radius:50%;background:#3a3028;display:flex;align-items:center;justify-content:center;font-size:16px;color:#e8e0d0;font-family:Helvetica;">SM</div>
                <span style="font-size:11px;color:rgba(232,224,208,0.6);font-family:Helvetica;">Sophie</span>
              </div>
              <div style="position:absolute;bottom:6px;left:8px;font-size:10px;color:#fff;background:rgba(0,0,0,0.5);padding:2px 7px;border-radius:4px;font-family:Helvetica;">Sophie Miller</div>
            </div>
          </div>

          <!-- Toolbar -->
          <div class="wb-toolbar">
            <button class="wb-btn active" id="tool-pen" onclick="setTool('pen')" title="Pen">
              <svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </button>
            <button class="wb-btn" id="tool-highlight" onclick="setTool('highlight')" title="Highlighter">
              <svg viewBox="0 0 24 24"><rect x="3" y="13" width="18" height="6" rx="2"/><path d="M9 13V7l3-3 3 3v6"/></svg>
            </button>
            <button class="wb-btn" id="tool-arrow" onclick="setTool('arrow')" title="Arrow">
              <svg viewBox="0 0 24 24"><line x1="5" y1="19" x2="19" y2="5"/><polyline points="12 5 19 5 19 12"/></svg>
            </button>
            <button class="wb-btn" id="tool-rect" onclick="setTool('rect')" title="Rectangle">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            </button>
            <button class="wb-btn" id="tool-eraser" onclick="setTool('eraser')" title="Eraser">
              <svg viewBox="0 0 24 24"><path d="M20 20H7L3 16l13-13 6 6-2 2"/></svg>
            </button>
            <div class="wb-sep"></div>
            <button class="wb-btn" onclick="undoCanvas()" title="Undo" style="font-size:11px;color:rgba(232,224,208,0.7);">↩</button>
            <button class="wb-btn" onclick="clearCanvas()" title="Clear all" style="font-size:11px;color:rgba(232,224,208,0.7);">✕</button>
            <div class="wb-sep"></div>
            <span class="wb-label">Color</span>
            ${['#1a1410','#8b2a2a','#2a4a8b','#2a6b3a','#f5c518','#ffffff'].map((c,i)=>`
              <div class="color-dot ${i===0?'selected':''}" style="background:${c};${c==='#ffffff'?'border:1px solid rgba(255,255,255,0.4);':''}" data-color="${c}" onclick="setColor('${c}',this)"></div>`).join('')}
            <div class="wb-sep"></div>
            <span class="wb-label">Size</span>
            <input type="range" min="1" max="28" value="3" id="brush-size" style="width:70px;accent-color:#e8e0d0;" oninput="setBrushSize(this.value)">
            <span id="brush-display" style="font-size:11px;color:rgba(232,224,208,0.6);min-width:16px;">3</span>
          </div>

          <canvas id="wb-canvas"></canvas>
        </div>

        <!-- Sidebar -->
        <div class="classroom-sidebar">
          <div class="cs-tabs">
            <div class="cs-tab active" onclick="switchCsTab('participants',this)">People (4)</div>
            <div class="cs-tab" onclick="switchCsTab('chat',this)">Chat</div>
          </div>
          <div class="cs-panel active" id="panel-participants">
            ${[
              {i:'SA',name:'Sara A.',role:'Teacher · You',mic:true,cam:true},
              {i:'ET',name:'Emma Thompson',role:'Student',mic:true,cam:false},
              {i:'LB',name:'Lucas Bennett',role:'Student',mic:false,cam:false},
              {i:'SM',name:'Sophie Miller',role:'Student',mic:true,cam:true},
            ].map(p=>`
              <div class="participant-row">
                <div class="p-avatar">${p.i}</div>
                <div style="flex:1"><div class="p-name">${p.name}</div><div class="p-role">${p.role}</div></div>
                <div class="p-icons">
                  <div class="p-icon ${p.mic?'on':''}" title="${p.mic?'Mic on':'Mic off'}">
                    <svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                  </div>
                  <div class="p-icon ${p.cam?'on':''}" title="${p.cam?'Camera on':'Camera off'}">
                    <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
                  </div>
                </div>
              </div>`).join('')}
          </div>
          <div class="cs-panel" id="panel-chat" style="flex-direction:column;gap:0;padding:0;">
            <div class="chat-messages" id="chat-messages" style="padding:12px;flex:1;">
              <div class="chat-msg"><div class="chat-sender">Emma Thompson</div><div class="chat-text">Can we review the diagram on slide 3?</div></div>
              <div class="chat-msg"><div class="chat-sender">Sara A.</div><div class="chat-text">Sure, pulling it up now.</div></div>
              <div class="chat-msg"><div class="chat-sender">Sophie Miller</div><div class="chat-text">I have a question about DNA replication</div></div>
            </div>
            <div class="chat-input-row">
              <input class="chat-input" id="chat-input" type="text" placeholder="Message…">
              <button class="chat-send" onclick="sendChat()">Send</button>
            </div>
          </div>
        </div>

        <!-- Video strip -->
        <div class="classroom-footer">
          ${[{i:'SA',name:'You',self:true},{i:'ET',name:'Emma'},{i:'LB',name:'Lucas'},{i:'SM',name:'Sophie'}].map(v=>`
            <div class="video-tile ${v.self?'self':''}">
              <div class="vt-avatar">${v.i}</div>
              <div class="vt-name">${v.name}</div>
            </div>`).join('')}
          <div style="flex:1;"></div>
        </div>

        <!-- Controls -->
        <div class="classroom-controls">
          <div class="ctrl-btn active" id="ctrl-mic" onclick="toggleMic(this)" title="Toggle mic">
            <svg viewBox="0 0 24 24" id="mic-icon"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
            <span class="ctrl-label" id="mic-label">Mic On</span>
          </div>
          <div class="ctrl-btn active" id="ctrl-cam" onclick="toggleCam(this)" title="Toggle camera">
            <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
            <span class="ctrl-label" id="cam-label">Cam On</span>
          </div>
          <div class="ctrl-btn" id="ctrl-screen" onclick="startScreenShare(this)" title="Share screen">
            <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <span class="ctrl-label">Share</span>
          </div>
          <div class="ctrl-btn" id="ctrl-hand" onclick="raiseHand(this)" title="Raise hand">
            <svg viewBox="0 0 24 24"><path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8l-1-1a2 2 0 0 0-3 3l4 4a6 6 0 0 0 12 0v-2a2 2 0 0 0-4 0"/></svg>
            <span class="ctrl-label" id="hand-label">Raise Hand</span>
          </div>
          <div class="ctrl-btn" onclick="toggleFullscreen()" title="Fullscreen">
            <svg viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
            <span class="ctrl-label">Fullscreen</span>
          </div>
          <div class="ctrl-btn danger" onclick="ILM.navigate('sessions')">
            <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            <span class="ctrl-label">Leave</span>
          </div>
        </div>

      </div>

      <script>
      (function() {
        // ── Canvas ──
        const canvas = document.getElementById('wb-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let tool='pen', color='#1a1410', size=3, drawing=false, history=[], startX=0, startY=0;
        let micOn=true, camOn=true, handRaised=false;
        let mediaStream=null, screenStream=null;

        function resize() {
          const saved = ctx.getImageData(0,0,canvas.width,canvas.height);
          const toolbar = document.querySelector('.wb-toolbar');
          canvas.width  = canvas.parentElement.clientWidth;
          canvas.height = canvas.parentElement.clientHeight - (toolbar ? toolbar.offsetHeight : 44);
          ctx.putImageData(saved,0,0);
        }
        resize();
        window.addEventListener('resize', resize);

        function getPos(e) {
          const r = canvas.getBoundingClientRect();
          const src = e.touches ? e.touches[0] : e;
          return { x: src.clientX - r.left, y: src.clientY - r.top };
        }
        function saveHistory() {
          history.push(ctx.getImageData(0,0,canvas.width,canvas.height));
          if (history.length > 50) history.shift();
        }

        canvas.addEventListener('mousedown', e => {
          drawing = true; saveHistory();
          const p = getPos(e); startX = p.x; startY = p.y;
          if (['pen','eraser','highlight'].includes(tool)) { ctx.beginPath(); ctx.moveTo(p.x, p.y); }
        });

        canvas.addEventListener('mousemove', e => {
          if (!drawing) return;
          const p = getPos(e);
          ctx.globalCompositeOperation = tool === 'eraser' ? 'destination-out' : 'source-over';
          if (tool === 'pen') {
            ctx.globalAlpha = 1; ctx.strokeStyle = color; ctx.lineWidth = size; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
            ctx.lineTo(p.x, p.y); ctx.stroke();
          } else if (tool === 'eraser') {
            ctx.lineWidth = size * 5; ctx.lineCap = 'round';
            ctx.lineTo(p.x, p.y); ctx.stroke();
          } else if (tool === 'highlight') {
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 0.28; ctx.strokeStyle = '#f5c518'; ctx.lineWidth = size * 6; ctx.lineCap = 'square';
            ctx.lineTo(p.x, p.y); ctx.stroke(); ctx.globalAlpha = 1;
          }
          ctx.globalCompositeOperation = 'source-over';
        });

        canvas.addEventListener('mouseup', e => {
          if (!drawing) return; drawing = false;
          const p = getPos(e);
          ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
          ctx.strokeStyle = color; ctx.lineWidth = size;
          if (tool === 'rect') {
            ctx.strokeRect(startX, startY, p.x - startX, p.y - startY);
          } else if (tool === 'arrow') {
            ctx.beginPath(); ctx.moveTo(startX, startY); ctx.lineTo(p.x, p.y); ctx.stroke();
            const ang = Math.atan2(p.y - startY, p.x - startX);
            const hs = Math.max(size * 4, 12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - hs * Math.cos(ang - 0.4), p.y - hs * Math.sin(ang - 0.4));
            ctx.lineTo(p.x - hs * Math.cos(ang + 0.4), p.y - hs * Math.sin(ang + 0.4));
            ctx.closePath(); ctx.fillStyle = color; ctx.fill();
          }
        });

        canvas.addEventListener('mouseleave', () => { drawing = false; ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1; });

        // Touch
        ['touchstart','touchmove','touchend'].forEach(ev => {
          canvas.addEventListener(ev, e => {
            e.preventDefault();
            const t = e.touches[0] || e.changedTouches[0];
            canvas.dispatchEvent(new MouseEvent(ev==='touchstart'?'mousedown':ev==='touchmove'?'mousemove':'mouseup', {clientX:t.clientX,clientY:t.clientY}));
          }, {passive:false});
        });

        // Tool functions
        window.setTool = t => {
          tool = t;
          document.querySelectorAll('.wb-btn[id^=tool]').forEach(b => b.classList.remove('active'));
          const btn = document.getElementById('tool-' + t);
          if (btn) btn.classList.add('active');
          canvas.style.cursor = t === 'eraser' ? 'cell' : 'crosshair';
        };
        window.setColor = (c, el) => {
          color = c;
          document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
          el.classList.add('selected');
        };
        window.setBrushSize = v => {
          size = +v;
          const d = document.getElementById('brush-display');
          if (d) d.textContent = v;
        };
        window.clearCanvas = () => { saveHistory(); ctx.clearRect(0,0,canvas.width,canvas.height); };
        window.undoCanvas  = () => { if (history.length) ctx.putImageData(history.pop(),0,0); };

        // PDF overlay
        window.togglePdfOverlay = () => {
          const o = document.getElementById('pdf-overlay');
          if (!o) return;
          const showing = o.style.display === 'flex' || o.style.display === 'block';
          if (showing) { o.style.display = 'none'; return; }
          o.style.display = 'flex';
          const img = document.getElementById('pdf-img');
          if (img.src) return;
          const tmp = document.createElement('canvas'); tmp.width=600; tmp.height=800;
          const tc = tmp.getContext('2d');
          tc.fillStyle='#fff'; tc.fillRect(0,0,600,800);
          tc.strokeStyle='#ddd'; tc.lineWidth=1;
          for(let y=55;y<800;y+=36){tc.beginPath();tc.moveTo(35,y);tc.lineTo(565,y);tc.stroke();}
          tc.fillStyle='#222'; tc.font='bold 18px Helvetica'; tc.fillText('Biology — Ch.4: DNA Replication',35,35);
          tc.font='14px Helvetica'; tc.fillStyle='#444';
          ['1. The double helix unwinds at the replication fork.',
           '2. Helicase breaks hydrogen bonds between base pairs.',
           '3. Primase lays down short RNA primers.',
           '4. DNA polymerase III extends each strand 5'→3'.',
           '5. Ligase joins Okazaki fragments on lagging strand.'].forEach((l,i)=>tc.fillText(l,35,75+i*38));
          img.src = tmp.toDataURL();
        };

        // Video call
        window.toggleVideoCall = () => {
          const grid = document.getElementById('video-grid');
          if (!grid) return;
          if (grid.style.display === 'grid') {
            grid.style.display = 'none';
            if (mediaStream) { mediaStream.getTracks().forEach(t=>t.stop()); mediaStream=null; }
            const v = document.getElementById('my-video');
            if (v) { v.style.display='none'; v.srcObject=null; }
            const a = document.getElementById('local-avatar');
            if (a) a.style.display='flex';
            return;
          }
          grid.style.display = 'grid';
          navigator.mediaDevices.getUserMedia({video:true, audio:false})
            .then(stream => {
              mediaStream = stream;
              const v = document.getElementById('my-video');
              const a = document.getElementById('local-avatar');
              if (v) { v.srcObject = stream; v.style.display = 'block'; }
              if (a) a.style.display = 'none';
            })
            .catch(() => { /* camera denied — avatars show instead */ });
        };

        // Mic toggle
        window.toggleMic = el => {
          micOn = !micOn;
          el.classList.toggle('active', micOn);
          const lbl = document.getElementById('mic-label');
          if (lbl) lbl.textContent = micOn ? 'Mic On' : 'Mic Off';
          if (mediaStream) {
            mediaStream.getAudioTracks().forEach(t => t.enabled = micOn);
          }
        };

        // Camera toggle
        window.toggleCam = el => {
          camOn = !camOn;
          el.classList.toggle('active', camOn);
          const lbl = document.getElementById('cam-label');
          if (lbl) lbl.textContent = camOn ? 'Cam On' : 'Cam Off';
          if (mediaStream) {
            mediaStream.getVideoTracks().forEach(t => t.enabled = camOn);
          }
          const v = document.getElementById('my-video');
          const a = document.getElementById('local-avatar');
          if (v) v.style.display = camOn && v.srcObject ? 'block' : 'none';
          if (a) a.style.display = camOn && v && v.srcObject ? 'none' : 'flex';
        };

        // Screen share
        window.startScreenShare = async el => {
          if (screenStream) {
            screenStream.getTracks().forEach(t=>t.stop());
            screenStream = null;
            el.classList.remove('active');
            el.querySelector('.ctrl-label').textContent = 'Share';
            return;
          }
          try {
            screenStream = await navigator.mediaDevices.getDisplayMedia({video:true});
            el.classList.add('active');
            el.querySelector('.ctrl-label').textContent = 'Stop Share';
            screenStream.getVideoTracks()[0].addEventListener('ended', () => {
              screenStream = null;
              el.classList.remove('active');
              el.querySelector('.ctrl-label').textContent = 'Share';
            });
          } catch(e) { /* cancelled */ }
        };

        // Raise hand
        window.raiseHand = el => {
          handRaised = !handRaised;
          el.classList.toggle('active', handRaised);
          const lbl = document.getElementById('hand-label');
          if (lbl) lbl.textContent = handRaised ? 'Hand Raised ✋' : 'Raise Hand';
        };

        // Fullscreen
        window.toggleFullscreen = () => {
          const wrap = document.getElementById('classroom-wrap');
          if (!wrap) return;
          if (!document.fullscreenElement) {
            (wrap.requestFullscreen || wrap.webkitRequestFullscreen).call(wrap);
          } else {
            (document.exitFullscreen || document.webkitExitFullscreen).call(document);
          }
        };

        // Sidebar tabs
        window.switchCsTab = (tab, el) => {
          document.querySelectorAll('.cs-tab').forEach(t=>t.classList.remove('active'));
          document.querySelectorAll('.cs-panel').forEach(p=>p.classList.remove('active'));
          el.classList.add('active');
          const panel = document.getElementById('panel-'+tab);
          if (panel) panel.classList.add('active');
        };

        // Chat
        window.sendChat = () => {
          const input = document.getElementById('chat-input');
          if (!input || !input.value.trim()) return;
          const msgs = document.getElementById('chat-messages');
          const d = document.createElement('div'); d.className='chat-msg';
          d.innerHTML = '<div class="chat-sender">Sara A.</div><div class="chat-text">'+input.value+'</div>';
          msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight; input.value='';
        };
        document.getElementById('chat-input')?.addEventListener('keydown', e=>{if(e.key==='Enter')sendChat();});

        // Timer
        let sec=0;
        const timerEl = document.getElementById('session-timer');
        const iv = setInterval(()=>{
          if (!document.getElementById('session-timer')) { clearInterval(iv); return; }
          sec++;
          timerEl.textContent = String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0');
        }, 1000);

      })();
      <\/script>`;
  },


  messages() {
    return `
      <div class="page-header"><div><h1>Messages</h1><p>Chat with students and parents</p></div></div>
      <div class="two-col" style="align-items:start;">
        <div class="card">
          ${[
            {av:'av-amber',i:'E',name:'Emma Thompson', preview:'Can we review chapter 4?',  time:'2:14 PM', unread:true},
            {av:'av-warm', i:'L',name:'Lucas Bennett', preview:'Thanks for the notes!',     time:'1:05 PM', unread:false},
            {av:'av-blue', i:'J',name:'Jake Harrison', preview:"I'll be 5 minutes late",    time:'12:50 PM',unread:false},
            {av:'av-rose', i:'S',name:'Sophie Miller', preview:'Great session today',       time:'Yesterday',unread:false},
          ].map(m=>`
            <div class="session-row" style="cursor:pointer">
              <div class="s-avatar ${m.av}">${m.i}</div>
              <div class="s-info"><div class="s-name" style="${m.unread?'font-weight:600':''}">${m.name}</div><div class="s-sub">${m.preview}</div></div>
              <div style="text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
                <span style="font-size:11px;color:var(--muted)">${m.time}</span>
                ${m.unread?'<span style="width:7px;height:7px;border-radius:50%;background:var(--ink);display:block;"></span>':''}
              </div>
            </div>`).join('')}
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">Emma Thompson</span><span class="badge badge-live">● Live</span></div>
          <div style="padding:16px;min-height:280px;display:flex;flex-direction:column;gap:10px;">
            <div style="background:var(--glass-dark);border-radius:10px 10px 10px 3px;padding:9px 13px;font-size:13px;max-width:80%;border:1px solid var(--border)">Can we review chapter 4?</div>
            <div style="background:var(--ink);color:var(--paper);border-radius:10px 10px 3px 10px;padding:9px 13px;font-size:13px;max-width:80%;align-self:flex-end">Of course! Let's start with DNA replication.</div>
          </div>
          <div style="padding:10px 14px;border-top:1px solid var(--border);display:flex;gap:8px;">
            <input type="text" placeholder="Type a message…" style="flex:1;font-family:var(--font);font-size:13px;border:1px solid var(--border-mid);border-radius:6px;padding:9px 13px;outline:none;background:var(--glass);color:var(--ink)">
            <button class="btn btn-primary btn-sm">Send</button>
          </div>
        </div>
      </div>`;
  },

  settings() {
    return `
      <div class="page-header"><div><h1>Settings</h1><p>Manage your profile and preferences</p></div><button class="btn btn-primary">Save changes</button></div>
      <div class="settings-section">
        <h2>Profile</h2>
        <div class="form-row">
          <div class="form-group"><label>First name</label><input type="text" value="Sara"></div>
          <div class="form-group"><label>Last name</label><input type="text" value="Akram"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Email</label><input type="email" value="sara@example.com"></div>
          <div class="form-group"><label>Phone</label><input type="tel" value="+1 (204) 555-0123"></div>
        </div>
        <div class="form-group" style="margin-bottom:14px"><label>Bio</label><textarea rows="3">Biochemistry graduate passionate about making science accessible.</textarea></div>
      </div>
      <div class="settings-section">
        <h2>Teaching</h2>
        <div class="form-row">
          <div class="form-group"><label>Subjects</label><input type="text" value="Biology, Chemistry, Math"></div>
          <div class="form-group"><label>Grade levels</label><input type="text" value="Grades 6–12"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Hourly rate ($)</label><input type="number" value="40"></div>
          <div class="form-group"><label>Session length</label><select><option>60 minutes</option><option>45 minutes</option><option>90 minutes</option></select></div>
        </div>
      </div>`;
  },
};
