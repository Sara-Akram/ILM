/* ============================================================
   ILM — Page Templates
   Each function returns an HTML string rendered into #page-content
   ============================================================ */

window.ILM_PAGES = {

  /* ── DASHBOARD ── */
  dashboard() {
    return `
      <div class="page-header">
        <div>
          <h1>Good evening, <span>Sara</span></h1>
          <p>Sunday, May 17 · 3 sessions today</p>
        </div>
        <button class="btn btn-primary">+ New Session</button>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-card-label">Sessions this week</div>
          <div class="stat-card-value">12</div>
          <div class="stat-card-sub">↑ 3 from last week</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-label">Active students</div>
          <div class="stat-card-value">8</div>
          <div class="stat-card-sub">↑ 1 new this month</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-label">Avg. session</div>
          <div class="stat-card-value">54<span>m</span></div>
          <div class="stat-card-sub neutral">Steady</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-label">Rating</div>
          <div class="stat-card-value">4.9★</div>
          <div class="stat-card-sub">Based on 41 reviews</div>
        </div>
      </div>

      <div class="two-col">
        <div class="card">
          <div class="card-header">
            <span class="card-title">Today's sessions</span>
            <span class="card-action" onclick="ILM.navigate('sessions')">View full schedule →</span>
          </div>
          ${[
            { av: 'av-green',  init: 'E', name: 'Emma Thompson',   sub: 'Biology · Grade 10',  badge: 'badge-live',     btext: '● Live',    time: '2:00 – 3:00 PM'  },
            { av: 'av-amber',  init: 'L', name: 'Lucas Bennett',  sub: 'Chemistry · Grade 11', badge: 'badge-upcoming', btext: 'Upcoming',  time: '4:00 – 5:00 PM'  },
            { av: 'av-rose',   init: 'S', name: 'Sophie Miller',      sub: 'Math · Grade 8',       badge: 'badge-done',     btext: 'Done',      time: '10:00 – 11:00 AM' },
            { av: 'av-blue',   init: 'J', name: 'Jake Harrison',      sub: 'English · Grade 6',    badge: 'badge-upcoming', btext: 'Upcoming',  time: '6:00 – 7:00 PM'  },
          ].map(s => `
            <div class="session-row">
              <div class="s-avatar ${s.av}">${s.init}</div>
              <div class="s-info">
                <div class="s-name">${s.name}</div>
                <div class="s-sub">${s.sub}</div>
              </div>
              <div class="s-time">
                <span class="badge ${s.badge}">${s.btext}</span><br>
                ${s.time}
              </div>
            </div>`).join('')}
        </div>

        <div class="card">
          <div class="card-header">
            <span class="card-title">Earnings</span>
            <span class="card-action">May 2026</span>
          </div>
          <div class="earn-body">
            <div class="earn-total">$1,240</div>
            <div class="earn-sub">This month · 31 sessions completed</div>
            <div class="earn-row"><span class="earn-row-label">This week</span><span class="earn-row-val">$380</span></div>
            <div class="earn-row"><span class="earn-row-label">Pending payout</span><span class="earn-row-val">$220</span></div>
            <div class="earn-row"><span class="earn-row-label">Platform fee (15%)</span><span class="earn-row-val negative">−$57</span></div>
            <div class="earn-row"><span class="earn-row-label">Next payout</span><span class="earn-row-val positive">May 23</span></div>
            <button class="btn btn-dark" style="width:100%;margin-top:18px;border-radius:10px;justify-content:center;">Request early payout</button>
          </div>
        </div>
      </div>`;
  },

  /* ── SESSIONS ── */
  sessions() {
    const sessions = [
      { av: 'av-green',  init: 'E', name: 'Emma Thompson',   sub: 'Biology · Grade 10',   badge: 'badge-live',     btext: '● Live',    time: 'Today · 2:00 – 3:00 PM',   dur: '60 min' },
      { av: 'av-amber',  init: 'L', name: 'Lucas Bennett',  sub: 'Chemistry · Grade 11',  badge: 'badge-upcoming', btext: 'Upcoming',  time: 'Today · 4:00 – 5:00 PM',   dur: '60 min' },
      { av: 'av-blue',   init: 'J', name: 'Jake Harrison',      sub: 'English · Grade 6',     badge: 'badge-upcoming', btext: 'Upcoming',  time: 'Today · 6:00 – 7:00 PM',   dur: '60 min' },
      { av: 'av-rose',   init: 'S', name: 'Sophie Miller',      sub: 'Math · Grade 8',        badge: 'badge-done',     btext: 'Done',      time: 'Today · 10:00 – 11:00 AM', dur: '55 min' },
      { av: 'av-purple', init: 'O', name: 'Olivia Carter',   sub: 'Physics · Grade 12',    badge: 'badge-done',     btext: 'Done',      time: 'Yesterday · 3:00 PM',       dur: '65 min' },
      { av: 'av-green',  init: 'E', name: 'Emma Thompson',   sub: 'Biology · Grade 10',    badge: 'badge-done',     btext: 'Done',      time: 'Yesterday · 2:00 PM',       dur: '60 min' },
    ];
    return `
      <div class="page-header">
        <div>
          <h1>Sessions</h1>
          <p>Manage your schedule and upcoming classes</p>
        </div>
        <button class="btn btn-primary">+ Book Session</button>
      </div>

      <div class="card">
        <div class="card-header">
          <span class="card-title">All sessions</span>
          <div style="display:flex;gap:8px;">
            <button class="btn btn-outline btn-sm">Today</button>
            <button class="btn btn-outline btn-sm">This week</button>
            <button class="btn btn-outline btn-sm">All time</button>
          </div>
        </div>
        ${sessions.map(s => `
          <div class="session-row">
            <div class="s-avatar ${s.av}">${s.init}</div>
            <div class="s-info">
              <div class="s-name">${s.name}</div>
              <div class="s-sub">${s.sub}</div>
            </div>
            <div class="s-time" style="margin-right:16px;">${s.dur}</div>
            <div class="s-time">
              <span class="badge ${s.badge}">${s.btext}</span><br>
              ${s.time}
            </div>
          </div>`).join('')}
      </div>`;
  },

  /* ── STUDENTS ── */
  students() {
    const students = [
      { av: 'av-green',  init: 'E', name: 'Emma Thompson',  grade: 'Grade 10', subject: 'Biology',   sessions: 12, progress: 82, status: 'Active'   },
      { av: 'av-amber',  init: 'L', name: 'Lucas Bennett', grade: 'Grade 11', subject: 'Chemistry', sessions: 8,  progress: 67, status: 'Active'   },
      { av: 'av-rose',   init: 'S', name: 'Sophie Miller',     grade: 'Grade 8',  subject: 'Math',      sessions: 15, progress: 91, status: 'Active'   },
      { av: 'av-blue',   init: 'J', name: 'Jake Harrison',     grade: 'Grade 6',  subject: 'English',   sessions: 6,  progress: 55, status: 'Active'   },
      { av: 'av-purple', init: 'O', name: 'Olivia Carter',  grade: 'Grade 12', subject: 'Physics',   sessions: 20, progress: 95, status: 'Active'   },
      { av: 'av-amber',  init: 'N', name: 'Noah Williams',   grade: 'Grade 9',  subject: 'Math',      sessions: 3,  progress: 40, status: 'New'      },
      { av: 'av-rose',   init: 'C', name: 'Chloe Davis',  grade: 'Grade 7',  subject: 'English',   sessions: 9,  progress: 73, status: 'On leave' },
    ];
    return `
      <div class="page-header">
        <div>
          <h1>Students</h1>
          <p>${students.length} students in your roster</p>
        </div>
        <button class="btn btn-primary">+ Add Student</button>
      </div>

      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Subject</th>
              <th>Sessions</th>
              <th>Progress</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${students.map(s => `
              <tr>
                <td>
                  <div style="display:flex;align-items:center;gap:10px;">
                    <div class="s-avatar ${s.av}" style="width:32px;height:32px;font-size:12px;">${s.init}</div>
                    <div>
                      <div class="td-name">${s.name}</div>
                      <div class="td-muted" style="font-size:11px;">${s.grade}</div>
                    </div>
                  </div>
                </td>
                <td class="td-muted">${s.subject}</td>
                <td>${s.sessions}</td>
                <td>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <div class="progress-bar"><div class="progress-fill" style="width:${s.progress}%"></div></div>
                    <span style="font-size:11px;color:var(--muted);">${s.progress}%</span>
                  </div>
                </td>
                <td>
                  <span class="badge ${s.status === 'Active' ? 'badge-live' : s.status === 'New' ? 'badge-new' : 'badge-upcoming'}">${s.status}</span>
                </td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  },

  /* ── EARNINGS ── */
  earnings() {
    return `
      <div class="page-header">
        <div>
          <h1>Earnings</h1>
          <p>Track your income and payouts</p>
        </div>
        <button class="btn btn-outline">Download report</button>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-card-label">This month</div>
          <div class="stat-card-value">$1,240</div>
          <div class="stat-card-sub">↑ $180 from April</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-label">This week</div>
          <div class="stat-card-value">$380</div>
          <div class="stat-card-sub neutral">12 sessions</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-label">Pending</div>
          <div class="stat-card-value">$220</div>
          <div class="stat-card-sub neutral">Pays out May 23</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-label">All time</div>
          <div class="stat-card-value">$8.4k</div>
          <div class="stat-card-sub">Since Jan 2026</div>
        </div>
      </div>

      <div class="two-col">
        <div class="card">
          <div class="card-header">
            <span class="card-title">Recent payouts</span>
          </div>
          ${[
            { date: 'May 16, 2026', amount: '$320', sessions: 10, status: 'Paid' },
            { date: 'May 9, 2026',  amount: '$290', sessions: 9,  status: 'Paid' },
            { date: 'May 2, 2026',  amount: '$350', sessions: 11, status: 'Paid' },
            { date: 'Apr 25, 2026', amount: '$280', sessions: 9,  status: 'Paid' },
          ].map(p => `
            <div class="session-row">
              <div style="flex:1;">
                <div class="s-name">${p.date}</div>
                <div class="s-sub">${p.sessions} sessions</div>
              </div>
              <div style="text-align:right;">
                <div style="font-weight:500;font-size:15px;">${p.amount}</div>
                <span class="badge badge-live">${p.status}</span>
              </div>
            </div>`).join('')}
        </div>

        <div class="card">
          <div class="card-header"><span class="card-title">Payout settings</span></div>
          <div class="earn-body">
            <div class="earn-row"><span class="earn-row-label">Rate per session</span><span class="earn-row-val">$40 / hr</span></div>
            <div class="earn-row"><span class="earn-row-label">Platform fee</span><span class="earn-row-val negative">15%</span></div>
            <div class="earn-row"><span class="earn-row-label">Payout schedule</span><span class="earn-row-val">Weekly (Fri)</span></div>
            <div class="earn-row"><span class="earn-row-label">Method</span><span class="earn-row-val">Direct deposit</span></div>
            <button class="btn btn-outline" style="width:100%;margin-top:18px;border-radius:10px;justify-content:center;">Edit payout method</button>
          </div>
        </div>
      </div>`;
  },

  /* ── WHITEBOARD ── */
  whiteboard() {
    return `
      <div class="page-header">
        <div>
          <h1>Whiteboard</h1>
          <p>Collaborative drawing and annotation</p>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="btn btn-outline">Share link</button>
          <button class="btn btn-primary">Start session</button>
        </div>
      </div>

      <div class="whiteboard-wrap">
        <div class="whiteboard-toolbar">
          <button class="wb-tool active" title="Pen">
            <svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>
          <button class="wb-tool" title="Highlighter">
            <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </button>
          <button class="wb-tool" title="Shapes">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
          </button>
          <button class="wb-tool" title="Text">
            <svg viewBox="0 0 24 24"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
          </button>
          <div class="wb-sep"></div>
          <button class="wb-tool" title="Eraser">
            <svg viewBox="0 0 24 24"><path d="M20 20H7L3 16l13-13 6 6-2 2"/></svg>
          </button>
          <button class="wb-tool" title="Undo">
            <svg viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.64"/></svg>
          </button>
          <div class="wb-sep"></div>
          <div style="display:flex;gap:6px;align-items:center;">
            ${['#1a1410','#3d6b52','#c9973a','#5a2d2d','#2d3a5a'].map((c,i) => `
              <div style="width:20px;height:20px;border-radius:50%;background:${c};cursor:pointer;${i===0?'border:2px solid var(--ink);box-shadow:0 0 0 2px var(--cream);':''}" title="Color ${i+1}"></div>
            `).join('')}
          </div>
          <div class="wb-sep"></div>
          <label style="font-size:12px;color:var(--muted);display:flex;align-items:center;gap:6px;">
            Size <input type="range" min="1" max="20" value="4" style="width:80px;">
          </label>
        </div>
        <canvas id="wb-canvas" class="whiteboard-canvas" style="cursor:crosshair;display:block;">
        </canvas>
      </div>

      <script>
        (function() {
          const canvas = document.getElementById('wb-canvas');
          if (!canvas) return;
          const ctx = canvas.getContext('2d');
          let drawing = false, color = '#1a1410', size = 4;

          function resize() {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width  = rect.width;
            canvas.height = 500;
          }
          resize();
          window.addEventListener('resize', resize);

          function pos(e) {
            const r = canvas.getBoundingClientRect();
            const src = e.touches ? e.touches[0] : e;
            return { x: src.clientX - r.left, y: src.clientY - r.top };
          }

          canvas.addEventListener('mousedown',  e => { drawing = true; ctx.beginPath(); const p = pos(e); ctx.moveTo(p.x, p.y); });
          canvas.addEventListener('mousemove',  e => { if (!drawing) return; const p = pos(e); ctx.lineTo(p.x, p.y); ctx.strokeStyle = color; ctx.lineWidth = size; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke(); });
          canvas.addEventListener('mouseup',    () => drawing = false);
          canvas.addEventListener('mouseleave', () => drawing = false);
          canvas.addEventListener('touchstart', e => { e.preventDefault(); drawing = true; ctx.beginPath(); const p = pos(e); ctx.moveTo(p.x, p.y); });
          canvas.addEventListener('touchmove',  e => { e.preventDefault(); if (!drawing) return; const p = pos(e); ctx.lineTo(p.x, p.y); ctx.strokeStyle = color; ctx.lineWidth = size; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke(); });
          canvas.addEventListener('touchend',   () => drawing = false);

          // Color swatches
          document.querySelectorAll('.whiteboard-wrap [style*="border-radius:50%"]').forEach(dot => {
            dot.addEventListener('click', () => {
              color = dot.style.background;
              document.querySelectorAll('.whiteboard-wrap [style*="border-radius:50%"]').forEach(d => {
                d.style.border = ''; d.style.boxShadow = '';
              });
              dot.style.border = '2px solid var(--ink)';
              dot.style.boxShadow = '0 0 0 2px var(--cream)';
            });
          });

          // Size slider
          const slider = document.querySelector('.whiteboard-toolbar input[type=range]');
          if (slider) slider.addEventListener('input', e => size = +e.target.value);

          // Tool buttons
          document.querySelectorAll('.wb-tool').forEach(btn => {
            btn.addEventListener('click', () => {
              document.querySelectorAll('.wb-tool').forEach(b => b.classList.remove('active'));
              btn.classList.add('active');
            });
          });
        })();
      <\/script>`;
  },

  /* ── MESSAGES ── */
  messages() {
    return `
      <div class="page-header">
        <div><h1>Messages</h1><p>Chat with students and parents</p></div>
      </div>
      <div class="two-col" style="align-items:start;">
        <div class="card">
          ${[
            { av: 'av-green',  init: 'E', name: 'Emma Thompson',  preview: 'Can we review chapter 4 today?', time: '2:14 PM', unread: true  },
            { av: 'av-amber',  init: 'L', name: 'Lucas Bennett', preview: 'Thanks for the notes!',          time: '1:05 PM', unread: false },
            { av: 'av-blue',   init: 'J', name: 'Jake Harrison',     preview: "I'll be 5 minutes late",        time: '12:50 PM',unread: false },
            { av: 'av-rose',   init: 'S', name: 'Sophie Miller',     preview: 'Great session today 😊',        time: 'Yesterday',unread: false },
          ].map(m => `
            <div class="session-row" style="cursor:pointer;">
              <div class="s-avatar ${m.av}">${m.init}</div>
              <div class="s-info">
                <div class="s-name" style="${m.unread?'font-weight:600;':''}">${m.name}</div>
                <div class="s-sub">${m.preview}</div>
              </div>
              <div style="text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
                <span style="font-size:11px;color:var(--muted);">${m.time}</span>
                ${m.unread ? '<span style="width:8px;height:8px;border-radius:50%;background:var(--sage);display:block;"></span>' : ''}
              </div>
            </div>`).join('')}
        </div>
        <div class="card">
          <div class="card-header"><span class="card-title">Emma Thompson</span><span class="badge badge-live">● Live session</span></div>
          <div style="padding:20px;min-height:300px;display:flex;flex-direction:column;gap:12px;">
            <div style="background:var(--bg-main);border-radius:12px 12px 12px 4px;padding:10px 14px;font-size:13px;max-width:80%;">Can we review chapter 4 today?</div>
            <div style="background:var(--sage);color:#fff;border-radius:12px 12px 4px 12px;padding:10px 14px;font-size:13px;max-width:80%;align-self:flex-end;">Of course! Let's start with DNA replication.</div>
          </div>
          <div style="padding:12px 16px;border-top:1px solid var(--border);display:flex;gap:8px;">
            <input type="text" placeholder="Type a message…" style="flex:1;font-family:'DM Sans',sans-serif;font-size:13px;border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px 14px;outline:none;background:#fff;">
            <button class="btn btn-primary btn-sm">Send</button>
          </div>
        </div>
      </div>`;
  },

  /* ── SETTINGS ── */
  settings() {
    return `
      <div class="page-header">
        <div><h1>Settings</h1><p>Manage your profile and preferences</p></div>
        <button class="btn btn-primary">Save changes</button>
      </div>

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
        <div class="form-group" style="margin-bottom:14px;">
          <label>Bio</label>
          <textarea rows="3" style="resize:vertical;">Biochemistry graduate passionate about making science accessible to all students.</textarea>
        </div>
      </div>

      <div class="settings-section">
        <h2>Teaching</h2>
        <div class="form-row">
          <div class="form-group"><label>Subjects</label><input type="text" value="Biology, Chemistry, Math"></div>
          <div class="form-group"><label>Grade levels</label><input type="text" value="Grades 6–12"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Hourly rate ($)</label><input type="number" value="40"></div>
          <div class="form-group"><label>Session length (default)</label>
            <select><option>60 minutes</option><option>45 minutes</option><option>90 minutes</option></select>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <h2>Notifications</h2>
        <div class="form-row">
          <div class="form-group"><label>Email reminders</label><select><option>30 min before</option><option>1 hour before</option><option>Off</option></select></div>
          <div class="form-group"><label>SMS reminders</label><select><option>Off</option><option>30 min before</option></select></div>
        </div>
      </div>`;
  },
};
