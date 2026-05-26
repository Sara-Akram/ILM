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
    <style>
      .cr-wrap {
        display: grid;
        grid-template-columns: 1fr 260px;
        grid-template-rows: 48px 1fr 56px 52px;
        height: calc(100vh - 58px);
        margin: -32px -38px;
        background: #111;
        overflow: hidden;
      }
      .cr-wrap.fs { position:fixed;inset:0;height:100vh;margin:0;z-index:9999; }
      .cr-header { grid-column:1/-1; display:flex; align-items:center; justify-content:space-between; padding:0 16px; background:#0a0a0a; border-bottom:1px solid rgba(255,255,255,0.08); }
      .cr-title { font-size:13px; font-weight:500; color:#e8e0d0; font-family:Helvetica,sans-serif; }
      .cr-timer { font-size:11px; color:rgba(232,224,208,0.45); font-family:Helvetica,sans-serif; margin-left:12px; }
      .cr-hbtns { display:flex; gap:6px; }
      .cr-hbtn { font-family:Helvetica,sans-serif; font-size:12px; color:rgba(232,224,208,0.7); background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:5px 12px; cursor:pointer; display:flex;align-items:center;gap:5px; }
      .cr-hbtn:hover { background:rgba(255,255,255,0.12); color:#e8e0d0; }
      .cr-hbtn.danger { background:rgba(139,42,42,0.8); color:#fff; border-color:transparent; }

      .cr-board { position:relative; background:#f0ebe0; overflow:hidden; display:flex; flex-direction:column; }
      .cr-toolbar { display:flex; align-items:center; gap:4px; padding:6px 10px; background:#0a0a0a; border-bottom:1px solid rgba(255,255,255,0.08); flex-shrink:0; flex-wrap:wrap; }
      .cr-canvas { flex:1; display:block; cursor:crosshair; width:100%; }

      .cr-tool { width:30px;height:30px; display:flex;align-items:center;justify-content:center; border-radius:6px; color:rgba(232,224,208,0.55); cursor:pointer; border:1px solid transparent; transition:all 0.12s; background:none; }
      .cr-tool:hover { background:rgba(255,255,255,0.08); color:#e8e0d0; }
      .cr-tool.on { background:#e8e0d0; color:#111; }
      .cr-tool svg { width:14px;height:14px; stroke:currentColor; fill:none; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
      .cr-sep { width:1px; height:20px; background:rgba(255,255,255,0.1); margin:0 2px; flex-shrink:0; }
      .cr-clr { width:16px;height:16px; border-radius:50%; cursor:pointer; border:2px solid transparent; flex-shrink:0; }
      .cr-clr.on { border-color:#fff; }
      .cr-lbl { font-size:10px; color:rgba(232,224,208,0.45); font-family:Helvetica,sans-serif; }

      /* video overlay */
      .cr-vidgrid { position:absolute; inset:0; display:none; grid-template-columns:1fr 1fr; gap:3px; padding:3px; background:#0a0a0a; z-index:20; }
      .cr-vidgrid.on { display:grid; }
      .cr-vtile { border-radius:8px; background:#1a1410; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; min-height:80px; }
      .cr-vtile video { position:absolute;inset:0;width:100%;height:100%;object-fit:cover; }
      .cr-vtile-lbl { position:absolute;bottom:6px;left:8px; font-size:10px; color:#fff; background:rgba(0,0,0,0.5); padding:2px 7px; border-radius:4px; font-family:Helvetica,sans-serif; }
      .cr-vtile-av { width:44px;height:44px; border-radius:50%; background:#3a3028; display:flex;align-items:center;justify-content:center; font-size:15px; color:#e8e0d0; font-family:Helvetica,sans-serif; }

      /* PDF overlay */
      .cr-pdf { position:absolute; inset:34px 0 0 0; pointer-events:none; display:none; align-items:center; justify-content:center; z-index:10; }
      .cr-pdf.on { display:flex; }
      .cr-pdf img { max-height:100%; max-width:100%; object-fit:contain; opacity:0.35; }

      /* Sidebar */
      .cr-side { background:#0a0a0a; border-left:1px solid rgba(255,255,255,0.08); display:flex; flex-direction:column; grid-row:2/4; overflow:hidden; }
      .cr-tabs { display:flex; border-bottom:1px solid rgba(255,255,255,0.08); flex-shrink:0; }
      .cr-tab { flex:1; padding:10px 6px; font-size:12px; font-weight:500; color:rgba(232,224,208,0.4); border-bottom:2px solid transparent; cursor:pointer; text-align:center; font-family:Helvetica,sans-serif; transition:color 0.15s; }
      .cr-tab.on { color:#e8e0d0; border-bottom-color:#e8e0d0; }
      .cr-panel { flex:1; overflow-y:auto; display:none; flex-direction:column; }
      .cr-panel.on { display:flex; }

      .cr-person { display:flex; align-items:center; gap:10px; padding:10px 12px; border-bottom:1px solid rgba(255,255,255,0.05); }
      .cr-pav { width:32px;height:32px; border-radius:50%; background:#3a3028; display:flex;align-items:center;justify-content:center; font-size:12px; color:#e8e0d0; font-family:Helvetica,sans-serif; flex-shrink:0; }
      .cr-pname { font-size:13px; color:#e8e0d0; font-family:Helvetica,sans-serif; }
      .cr-prole { font-size:10px; color:rgba(232,224,208,0.4); font-family:Helvetica,sans-serif; }
      .cr-picons { display:flex; gap:4px; margin-left:auto; }
      .cr-picon { width:22px;height:22px; display:flex;align-items:center;justify-content:center; }
      .cr-picon svg { width:13px;height:13px; stroke:rgba(232,224,208,0.3); fill:none; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
      .cr-picon.on svg { stroke:#e8e0d0; }

      .cr-msgs { flex:1; overflow-y:auto; padding:10px 12px; display:flex; flex-direction:column; gap:8px; }
      .cr-msg-sender { font-size:10px; color:rgba(232,224,208,0.4); font-family:Helvetica,sans-serif; margin-bottom:2px; }
      .cr-msg-text { font-size:12.5px; color:#e8e0d0; background:rgba(255,255,255,0.06); border-radius:6px; padding:6px 10px; font-family:Helvetica,sans-serif; line-height:1.5; }
      .cr-chat-row { display:flex; gap:6px; padding:8px 10px; border-top:1px solid rgba(255,255,255,0.08); flex-shrink:0; }
      .cr-chat-in { flex:1; font-family:Helvetica,sans-serif; font-size:12.5px; color:#e8e0d0; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.1); border-radius:6px; padding:7px 10px; outline:none; }
      .cr-chat-in::placeholder { color:rgba(232,224,208,0.3); }
      .cr-send { padding:7px 12px; background:#e8e0d0; color:#111; border-radius:6px; font-size:12px; font-weight:500; cursor:pointer; font-family:Helvetica,sans-serif; border:none; }

      /* Video strip */
      .cr-strip { grid-column:1/2; display:flex; align-items:center; gap:8px; padding:6px 12px; background:#0a0a0a; border-top:1px solid rgba(255,255,255,0.08); overflow-x:auto; }
      .cr-stile { width:88px;height:56px; border-radius:7px; background:#1e1a14; border:1px solid rgba(255,255,255,0.08); display:flex;flex-direction:column;align-items:center;justify-content:center; gap:3px; flex-shrink:0; }
      .cr-stile.me { border-color:rgba(232,224,208,0.3); }
      .cr-stile-av { width:24px;height:24px; border-radius:50%; background:#3a3028; display:flex;align-items:center;justify-content:center; font-size:9px; color:#e8e0d0; font-family:Helvetica,sans-serif; }
      .cr-stile-nm { font-size:8.5px; color:rgba(232,224,208,0.5); font-family:Helvetica,sans-serif; }

      /* Controls */
      .cr-ctrl { grid-column:1/2; display:flex; align-items:center; justify-content:center; gap:6px; padding:8px 16px; background:#0a0a0a; border-top:1px solid rgba(255,255,255,0.06); }
      .cr-cbtn { display:flex;flex-direction:column;align-items:center;gap:3px; padding:7px 14px; border-radius:8px; color:rgba(232,224,208,0.55); cursor:pointer; transition:all 0.12s; border:1px solid transparent; font-family:Helvetica,sans-serif; background:none; }
      .cr-cbtn:hover { background:rgba(255,255,255,0.06); color:#e8e0d0; }
      .cr-cbtn.on { background:rgba(255,255,255,0.12); color:#e8e0d0; border-color:rgba(255,255,255,0.15); }
      .cr-cbtn.off { background:rgba(139,42,42,0.3); color:#e87070; }
      .cr-cbtn.leave { color:#e87070; }
      .cr-cbtn.leave:hover { background:rgba(139,42,42,0.2); }
      .cr-cbtn svg { width:18px;height:18px; stroke:currentColor; fill:none; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
      .cr-cbtn-lbl { font-size:9px; font-weight:500; letter-spacing:0.3px; }
    </style>

    <div class="cr-wrap" id="crWrap">

      <div class="cr-header">
        <div style="display:flex;align-items:center;">
          <span class="cr-title">Biology · Grade 10 — Emma Thompson</span>
          <span class="cr-timer" id="crTimer">00:00</span>
        </div>
        <div class="cr-hbtns">
          <button class="cr-hbtn" onclick="crToggleVideo()">
            <svg viewBox="0 0 24 24" style="width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
            Video
          </button>
          <button class="cr-hbtn" onclick="crTogglePdf()">
            <svg viewBox="0 0 24 24" style="width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            PDF
          </button>
          <button class="cr-hbtn" onclick="crFullscreen()">
            <svg viewBox="0 0 24 24" style="width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
            Fullscreen
          </button>
          <button class="cr-hbtn danger" onclick="ILM.navigate('sessions')">End Session</button>
        </div>
      </div>

      <div class="cr-board">
        <!-- Video grid -->
        <div class="cr-vidgrid" id="crVidGrid">
          <div class="cr-vtile" id="crLocalTile">
            <div class="cr-vtile-av" id="crLocalAv">SA</div>
            <video id="crLocalVid" autoplay muted playsinline style="display:none;"></video>
            <div class="cr-vtile-lbl">You</div>
          </div>
          <div class="cr-vtile"><div class="cr-vtile-av">ET</div><div class="cr-vtile-lbl">Emma Thompson</div></div>
          <div class="cr-vtile"><div class="cr-vtile-av">LB</div><div class="cr-vtile-lbl">Lucas Bennett</div></div>
          <div class="cr-vtile"><div class="cr-vtile-av">SM</div><div class="cr-vtile-lbl">Sophie Miller</div></div>
        </div>

        <!-- PDF layer -->
        <div class="cr-pdf" id="crPdf">
          <img id="crPdfImg" src="" alt="PDF">
        </div>

        <!-- Toolbar -->
        <div class="cr-toolbar">
          <button class="cr-tool on" id="crt-pen"   onclick="crSetTool('pen',this)"   title="Pen"><svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></button>
          <button class="cr-tool"    id="crt-hl"    onclick="crSetTool('hl',this)"    title="Highlight"><svg viewBox="0 0 24 24"><rect x="3" y="13" width="18" height="6" rx="2"/><path d="M9 13V7l3-3 3 3v6"/></svg></button>
          <button class="cr-tool"    id="crt-arrow" onclick="crSetTool('arrow',this)" title="Arrow"><svg viewBox="0 0 24 24"><line x1="5" y1="19" x2="19" y2="5"/><polyline points="12 5 19 5 19 12"/></svg></button>
          <button class="cr-tool"    id="crt-rect"  onclick="crSetTool('rect',this)"  title="Rectangle"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg></button>
          <button class="cr-tool"    id="crt-eraser"onclick="crSetTool('eraser',this)"title="Eraser"><svg viewBox="0 0 24 24"><path d="M20 20H7L3 16l13-13 6 6-2 2"/></svg></button>
          <div class="cr-sep"></div>
          <button class="cr-tool" onclick="crUndo()" title="Undo" style="font-size:14px;">↩</button>
          <button class="cr-tool" onclick="crClear()" title="Clear" style="font-size:14px;">✕</button>
          <div class="cr-sep"></div>
          <span class="cr-lbl">Color</span>
          ${['#1a1410','#c0392b','#2980b9','#27ae60','#f1c40f','#ffffff'].map((c,i)=>`<div class="cr-clr ${i===0?'on':''}" style="background:${c};${c==='#ffffff'?'box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3);':''}" onclick="crSetColor('${c}',this)"></div>`).join('')}
          <div class="cr-sep"></div>
          <span class="cr-lbl">Size</span>
          <input type="range" min="1" max="28" value="3" style="width:65px;accent-color:#e8e0d0;" oninput="crSetSize(+this.value)">
          <span id="crSizeLbl" style="font-size:10px;color:rgba(232,224,208,0.5);font-family:Helvetica,sans-serif;min-width:14px;">3</span>
        </div>

        <canvas class="cr-canvas" id="crCanvas"></canvas>
      </div>

      <div class="cr-side">
        <div class="cr-tabs">
          <div class="cr-tab on" onclick="crTab('people',this)">People (4)</div>
          <div class="cr-tab"   onclick="crTab('chat',this)">Chat</div>
        </div>
        <div class="cr-panel on" id="crPeople">
          ${[
            {i:'SA',n:'Sara A.',r:'Teacher · You',mic:true,cam:true},
            {i:'ET',n:'Emma Thompson',r:'Student',mic:true,cam:false},
            {i:'LB',n:'Lucas Bennett',r:'Student',mic:false,cam:false},
            {i:'SM',n:'Sophie Miller',r:'Student',mic:true,cam:true},
          ].map(p=>`
            <div class="cr-person">
              <div class="cr-pav">${p.i}</div>
              <div><div class="cr-pname">${p.n}</div><div class="cr-prole">${p.r}</div></div>
              <div class="cr-picons">
                <div class="cr-picon ${p.mic?'on':''}"><svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg></div>
                <div class="cr-picon ${p.cam?'on':''}"><svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div>
              </div>
            </div>`).join('')}
        </div>
        <div class="cr-panel" id="crChat" style="overflow:hidden;">
          <div class="cr-msgs" id="crMsgs">
            <div><div class="cr-msg-sender">Emma Thompson</div><div class="cr-msg-text">Can we review slide 3?</div></div>
            <div><div class="cr-msg-sender">Sara A.</div><div class="cr-msg-text">Of course, pulling it up now.</div></div>
            <div><div class="cr-msg-sender">Sophie Miller</div><div class="cr-msg-text">Question about DNA replication!</div></div>
          </div>
          <div class="cr-chat-row">
            <input class="cr-chat-in" id="crChatIn" placeholder="Message…">
            <button class="cr-send" onclick="crSend()">Send</button>
          </div>
        </div>
      </div>

      <div class="cr-strip">
        ${[{i:'SA',n:'You',me:true},{i:'ET',n:'Emma'},{i:'LB',n:'Lucas'},{i:'SM',n:'Sophie'}].map(v=>`
          <div class="cr-stile ${v.me?'me':''}">
            <div class="cr-stile-av">${v.i}</div>
            <div class="cr-stile-nm">${v.n}</div>
          </div>`).join('')}
      </div>

      <div class="cr-ctrl">
        <button class="cr-cbtn on" id="crBtnMic" onclick="crToggleMic()">
          <svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
          <span class="cr-cbtn-lbl" id="crMicLbl">Mic</span>
        </button>
        <button class="cr-cbtn on" id="crBtnCam" onclick="crToggleCam()">
          <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
          <span class="cr-cbtn-lbl" id="crCamLbl">Camera</span>
        </button>
        <button class="cr-cbtn" id="crBtnShare" onclick="crShareScreen()">
          <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          <span class="cr-cbtn-lbl">Share</span>
        </button>
        <button class="cr-cbtn" id="crBtnHand" onclick="crRaiseHand()">
          <svg viewBox="0 0 24 24"><path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8l-1-1a2 2 0 0 0-3 3l4 4a6 6 0 0 0 12 0v-2a2 2 0 0 0-4 0"/></svg>
          <span class="cr-cbtn-lbl" id="crHandLbl">Hand</span>
        </button>
        <button class="cr-cbtn leave" onclick="ILM.navigate('sessions')">
          <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          <span class="cr-cbtn-lbl">Leave</span>
        </button>
      </div>

    </div>

    <script>
    (function(){
      // ── Canvas setup ──
      const canvas = document.getElementById('crCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let tool='pen', color='#1a1410', size=3;
      let drawing=false, hist=[], sx=0, sy=0;
      let micOn=true, camOn=true, handUp=false;
      let camStream=null, screenStream=null;

      function resize(){
        const saved = ctx.getImageData(0,0,canvas.width,canvas.height);
        const tb = document.querySelector('.cr-toolbar');
        canvas.width  = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight - (tb ? tb.offsetHeight : 36);
        ctx.putImageData(saved,0,0);
      }
      resize();
      window.addEventListener('resize', resize);

      function pt(e){
        const r=canvas.getBoundingClientRect();
        const s=e.touches?e.touches[0]:e;
        return {x:s.clientX-r.left, y:s.clientY-r.top};
      }
      function snap(){ hist.push(ctx.getImageData(0,0,canvas.width,canvas.height)); if(hist.length>40)hist.shift(); }

      canvas.addEventListener('mousedown', e=>{
        drawing=true; snap();
        const p=pt(e); sx=p.x; sy=p.y;
        if(['pen','eraser','hl'].includes(tool)){ctx.beginPath();ctx.moveTo(p.x,p.y);}
      });
      canvas.addEventListener('mousemove', e=>{
        if(!drawing)return;
        const p=pt(e);
        ctx.globalCompositeOperation=tool==='eraser'?'destination-out':'source-over';
        if(tool==='pen'){
          ctx.globalAlpha=1; ctx.strokeStyle=color; ctx.lineWidth=size; ctx.lineCap='round'; ctx.lineJoin='round';
          ctx.lineTo(p.x,p.y); ctx.stroke();
        } else if(tool==='eraser'){
          ctx.lineWidth=size*5; ctx.lineCap='round'; ctx.lineTo(p.x,p.y); ctx.stroke();
        } else if(tool==='hl'){
          ctx.globalCompositeOperation='source-over';
          ctx.globalAlpha=0.3; ctx.strokeStyle='#f1c40f'; ctx.lineWidth=size*6; ctx.lineCap='square';
          ctx.lineTo(p.x,p.y); ctx.stroke();
        }
        ctx.globalCompositeOperation='source-over'; ctx.globalAlpha=1;
      });
      canvas.addEventListener('mouseup', e=>{
        if(!drawing)return; drawing=false;
        const p=pt(e);
        ctx.globalCompositeOperation='source-over'; ctx.globalAlpha=1;
        ctx.strokeStyle=color; ctx.lineWidth=size;
        if(tool==='rect'){
          ctx.strokeRect(sx,sy,p.x-sx,p.y-sy);
        } else if(tool==='arrow'){
          ctx.beginPath(); ctx.moveTo(sx,sy); ctx.lineTo(p.x,p.y); ctx.stroke();
          const a=Math.atan2(p.y-sy,p.x-sx), hs=Math.max(size*3,10);
          ctx.beginPath();
          ctx.moveTo(p.x,p.y);
          ctx.lineTo(p.x-hs*Math.cos(a-0.4),p.y-hs*Math.sin(a-0.4));
          ctx.lineTo(p.x-hs*Math.cos(a+0.4),p.y-hs*Math.sin(a+0.4));
          ctx.closePath(); ctx.fillStyle=color; ctx.fill();
        }
      });
      canvas.addEventListener('mouseleave',()=>{drawing=false;ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;});

      ['touchstart','touchmove','touchend'].forEach(ev=>{
        canvas.addEventListener(ev,e=>{
          e.preventDefault();
          const t=e.touches[0]||e.changedTouches[0];
          canvas.dispatchEvent(new MouseEvent(ev==='touchstart'?'mousedown':ev==='touchmove'?'mousemove':'mouseup',{clientX:t.clientX,clientY:t.clientY}));
        },{passive:false});
      });

      window.crSetTool=(t,el)=>{
        tool=t;
        document.querySelectorAll('.cr-tool[id^=crt]').forEach(b=>b.classList.remove('on'));
        el.classList.add('on');
        canvas.style.cursor=t==='eraser'?'cell':'crosshair';
      };
      window.crSetColor=(c,el)=>{
        color=c;
        document.querySelectorAll('.cr-clr').forEach(d=>d.classList.remove('on'));
        el.classList.add('on');
      };
      window.crSetSize=v=>{
        size=v;
        const l=document.getElementById('crSizeLbl');
        if(l) l.textContent=v;
      };
      window.crUndo=()=>{ if(hist.length) ctx.putImageData(hist.pop(),0,0); };
      window.crClear=()=>{ snap(); ctx.clearRect(0,0,canvas.width,canvas.height); };

      // PDF
      window.crTogglePdf=()=>{
        const el=document.getElementById('crPdf');
        if(!el) return;
        el.classList.toggle('on');
        if(!el.classList.contains('on')) return;
        const img=document.getElementById('crPdfImg');
        if(img.src) return;
        const tmp=document.createElement('canvas'); tmp.width=600; tmp.height=800;
        const tc=tmp.getContext('2d');
        tc.fillStyle='#fff'; tc.fillRect(0,0,600,800);
        tc.strokeStyle='#ddd'; tc.lineWidth=1;
        for(let y=52;y<800;y+=36){tc.beginPath();tc.moveTo(30,y);tc.lineTo(570,y);tc.stroke();}
        tc.fillStyle='#1a1a1a'; tc.font='bold 17px Helvetica'; tc.fillText('Biology — Chapter 4: DNA Replication',30,35);
        tc.font='13.5px Helvetica'; tc.fillStyle='#333';
        ['1. Double helix unwinds at the replication fork.',
         '2. Helicase breaks hydrogen bonds between base pairs.',
         '3. Primase lays RNA primers for polymerase.',
         '4. DNA Polymerase III extends strand 5'→3'.',
         '5. Ligase joins Okazaki fragments.'].forEach((l,i)=>tc.fillText(l,30,72+i*36));
        img.src=tmp.toDataURL();
      };

      // Video call
      window.crToggleVideo=()=>{
        const g=document.getElementById('crVidGrid');
        if(!g) return;
        if(g.classList.contains('on')){
          g.classList.remove('on');
          if(camStream){camStream.getTracks().forEach(t=>t.stop());camStream=null;}
          const v=document.getElementById('crLocalVid');
          const a=document.getElementById('crLocalAv');
          if(v){v.srcObject=null;v.style.display='none';}
          if(a) a.style.display='flex';
          return;
        }
        g.classList.add('on');
        navigator.mediaDevices.getUserMedia({video:true,audio:false})
          .then(s=>{
            camStream=s;
            const v=document.getElementById('crLocalVid');
            const a=document.getElementById('crLocalAv');
            if(v){v.srcObject=s;v.style.display='block';}
            if(a) a.style.display='none';
          }).catch(()=>{});
      };

      // Mic
      window.crToggleMic=()=>{
        micOn=!micOn;
        const btn=document.getElementById('crBtnMic');
        const lbl=document.getElementById('crMicLbl');
        btn.classList.toggle('on',micOn);
        btn.classList.toggle('off',!micOn);
        if(lbl) lbl.textContent=micOn?'Mic':'Muted';
        if(camStream) camStream.getAudioTracks().forEach(t=>t.enabled=micOn);
      };

      // Camera
      window.crToggleCam=()=>{
        camOn=!camOn;
        const btn=document.getElementById('crBtnCam');
        const lbl=document.getElementById('crCamLbl');
        btn.classList.toggle('on',camOn);
        btn.classList.toggle('off',!camOn);
        if(lbl) lbl.textContent=camOn?'Camera':'Cam Off';
        if(camStream) camStream.getVideoTracks().forEach(t=>t.enabled=camOn);
        const v=document.getElementById('crLocalVid');
        const a=document.getElementById('crLocalAv');
        if(v) v.style.display=camOn&&v.srcObject?'block':'none';
        if(a) a.style.display=camOn&&v&&v.srcObject?'none':'flex';
      };

      // Screen share
      window.crShareScreen=async()=>{
        const btn=document.getElementById('crBtnShare');
        if(screenStream){
          screenStream.getTracks().forEach(t=>t.stop());
          screenStream=null;
          btn.classList.remove('on');
          btn.querySelector('.cr-cbtn-lbl').textContent='Share';
          return;
        }
        try{
          screenStream=await navigator.mediaDevices.getDisplayMedia({video:true});
          btn.classList.add('on');
          btn.querySelector('.cr-cbtn-lbl').textContent='Stop';
          screenStream.getVideoTracks()[0].addEventListener('ended',()=>{
            screenStream=null;
            btn.classList.remove('on');
            btn.querySelector('.cr-cbtn-lbl').textContent='Share';
          });
        }catch(e){}
      };

      // Raise hand
      window.crRaiseHand=()=>{
        handUp=!handUp;
        const btn=document.getElementById('crBtnHand');
        const lbl=document.getElementById('crHandLbl');
        btn.classList.toggle('on',handUp);
        if(lbl) lbl.textContent=handUp?'Hand ✋':'Hand';
      };

      // Fullscreen
      window.crFullscreen=()=>{
        const w=document.getElementById('crWrap');
        if(!w) return;
        if(!document.fullscreenElement){
          (w.requestFullscreen||w.webkitRequestFullscreen).call(w);
        } else {
          (document.exitFullscreen||document.webkitExitFullscreen).call(document);
        }
      };

      // Tabs
      window.crTab=(tab,el)=>{
        document.querySelectorAll('.cr-tab').forEach(t=>t.classList.remove('on'));
        document.querySelectorAll('.cr-panel').forEach(p=>p.classList.remove('on'));
        el.classList.add('on');
        const p=document.getElementById(tab==='people'?'crPeople':'crChat');
        if(p) p.classList.add('on');
      };

      // Chat
      window.crSend=()=>{
        const inp=document.getElementById('crChatIn');
        if(!inp||!inp.value.trim()) return;
        const msgs=document.getElementById('crMsgs');
        const d=document.createElement('div');
        d.innerHTML='<div class="cr-msg-sender">Sara A.</div><div class="cr-msg-text">'+inp.value+'</div>';
        msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight; inp.value='';
      };
      document.getElementById('crChatIn')?.addEventListener('keydown',e=>{if(e.key==='Enter')crSend();});

      // Timer
      let sec=0;
      const tv=document.getElementById('crTimer');
      const iv=setInterval(()=>{
        if(!document.getElementById('crTimer')){clearInterval(iv);return;}
        sec++; tv.textContent=String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0');
      },1000);

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
