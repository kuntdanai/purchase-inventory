:root{
  --bg:#F1F5F9; --surface:#FFFFFF; --surface-2:#F8FAFC;
  --ink:#1E293B; --ink-soft:#64748B; --ink-faint:#94A3B8;
  --line:#E2E8F0; --line-strong:#CBD5E1;
  --accent:#2563EB; --accent-soft:#DBEAFE; --accent-deep:#1D4ED8;
  --danger:#DC2626; --danger-soft:#FEE2E2;
  --success:#16A34A; --success-soft:#DCFCE7;
  --warn:#D97706; --warn-soft:#FEF3C7;
  --sidebar-bg:#0F172A; --sidebar-text:#94A3B8; --sidebar-label:#64748B;
  --radius:6px; --sidebar-w:236px;
}
*{box-sizing:border-box;}
body{margin:0;background:var(--bg);color:var(--ink);font-family:'IBM Plex Sans Thai','IBM Plex Sans',sans-serif;font-size:14px;line-height:1.5;}
.mono{font-family:'IBM Plex Mono',monospace;}
#root{display:flex;min-height:100vh;}

/* ---------- Layout ---------- */
.app-shell{display:flex;min-height:100vh;width:100%;}
.sidebar{width:var(--sidebar-w);flex-shrink:0;background:var(--sidebar-bg);color:#E2E8F0;display:flex;flex-direction:column;position:sticky;top:0;height:100vh;overflow-y:auto;}
.sidebar .brand{padding:20px 20px 14px;border-bottom:1px solid rgba(255,255,255,0.08);}
.sidebar .brand .tag{font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:.14em;color:#60A5FA;text-transform:uppercase;opacity:.9;}
.sidebar .brand h1{font-size:15.5px;margin:6px 0 0;font-weight:600;line-height:1.35;color:#fff;}
.navlist{flex:1;padding:10px 10px;}
.navgroup{margin-bottom:6px;}
.navgroup-label{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--sidebar-label);padding:12px 12px 4px;}
.navlist a{
  width:100%;text-align:left;background:none;border:none;color:var(--sidebar-text);text-decoration:none;
  padding:9px 12px;border-radius:var(--radius);font-size:13.3px;font-family:inherit;
  cursor:pointer;display:flex;align-items:center;gap:9px;margin-bottom:2px;
  transition:background .12s ease,color .12s ease;
}
.navlist a svg{flex-shrink:0;opacity:.8;}
.navlist a:hover{background:rgba(255,255,255,0.08);color:#fff;}
.navlist a.active{background:var(--accent);color:#fff;font-weight:600;}
.navlist a.active svg{opacity:1;}
.sidebar .foot{padding:12px 20px 18px;border-top:1px solid rgba(255,255,255,0.08);font-size:11px;color:var(--sidebar-label);}

.main{flex:1;min-width:0;padding:22px 34px 60px;}
.topbar{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px;}
.user-badge{font-size:12.5px;color:var(--ink-soft);display:flex;align-items:center;gap:8px;}
.role-pill{font-family:'IBM Plex Mono',monospace;font-size:10.5px;font-weight:600;text-transform:uppercase;padding:3px 9px;border-radius:20px;background:var(--accent-soft);color:var(--accent-deep);}
.btn-link{background:none;border:none;color:var(--ink-soft);font-family:inherit;font-size:12.5px;cursor:pointer;text-decoration:underline;}

/* ---------- Page head ---------- */
.pagehead{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:22px;flex-wrap:wrap;gap:12px;}
.pagehead .eyebrow{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent-deep);margin:0 0 4px;}
.pagehead h2{margin:0;font-size:22px;font-weight:600;}
.pagehead p.sub{margin:4px 0 0;color:var(--ink-soft);font-size:13px;}

/* ---------- Buttons ---------- */
.btn{border:1px solid var(--accent);background:var(--accent);color:#fff;padding:9px 16px;border-radius:var(--radius);font-family:inherit;font-size:13px;font-weight:500;cursor:pointer;display:inline-flex;align-items:center;gap:7px;transition:opacity .12s ease;}
.btn:hover{opacity:.85;}
.btn.secondary{background:transparent;color:var(--ink);border:1px solid var(--line-strong);}
.btn.secondary:hover{background:var(--surface-2);opacity:1;}
.btn.danger{background:var(--danger);border-color:var(--danger);}
.btn.small{padding:6px 11px;font-size:12px;}
.btn:disabled{opacity:.4;cursor:not-allowed;}

/* ---------- Stat cards ---------- */
.stat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin-bottom:22px;}
.stat-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:15px 17px;position:relative;overflow:hidden;}
.stat-card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--accent);}
.stat-card.alert::before{background:var(--danger);}
.stat-card .label{font-size:11px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.04em;}
.stat-card .value{font-family:'IBM Plex Mono',monospace;font-size:22px;font-weight:600;margin-top:6px;}
.stat-card .value.small{font-size:16px;}
.stat-card .value.alert{color:var(--danger);}

/* ---------- Panels / grid ---------- */
.panel{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:20px;margin-bottom:20px;}
.panel h3{margin:0 0 14px;font-size:14.5px;font-weight:600;display:flex;align-items:center;justify-content:space-between;gap:8px;}
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
@media(max-width:1000px){.grid-2{grid-template-columns:1fr;}}

/* ---------- Tables ---------- */
table{width:100%;border-collapse:collapse;}
thead th{text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:var(--ink-soft);border-bottom:1px solid var(--line-strong);padding:8px 10px;font-weight:600;white-space:nowrap;}
tbody td{padding:10px 10px;border-bottom:1px solid var(--line);font-size:13.5px;vertical-align:middle;}
tbody tr:hover{background:var(--surface-2);}
tbody tr:last-child td{border-bottom:none;}
.empty-row td{text-align:center;color:var(--ink-faint);padding:26px 10px;}

/* ---------- Status pills ---------- */
.stamp{display:inline-block;font-family:inherit;font-size:11.5px;font-weight:600;padding:4px 11px;border-radius:20px;}
.stamp.draft{color:var(--ink-soft);background:var(--surface-2);}
.stamp.issued{color:var(--accent-deep);background:var(--accent-soft);}
.stamp.partial{color:var(--warn);background:var(--warn-soft);}
.stamp.full,.stamp.confirmed{color:var(--success);background:var(--success-soft);}
.stamp.closed{color:var(--ink-soft);background:var(--line);}
.stamp.cancel{color:var(--danger);background:var(--danger-soft);text-decoration:line-through;}
.lowstock{color:var(--danger);font-weight:600;}

/* ---------- Forms ---------- */
label.field{display:block;margin-bottom:12px;}
label.field span.lbl{display:block;font-size:12px;color:var(--ink-soft);margin-bottom:5px;font-weight:500;}
input,select,textarea{width:100%;padding:8px 10px;border:1px solid var(--line-strong);border-radius:var(--radius);font-family:inherit;font-size:13.5px;background:#fff;color:var(--ink);}
input:focus,select:focus,textarea:focus{outline:2px solid var(--accent);outline-offset:1px;border-color:var(--accent);}
input:disabled,select:disabled{background:var(--surface-2);color:var(--ink-soft);}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.field-row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;}
@media(max-width:600px){.field-row,.field-row3{grid-template-columns:1fr;}}
.searchbar{display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;align-items:center;}
.searchbar input,.searchbar select{width:auto;min-width:150px;flex:1;max-width:240px;}

/* ---------- Modal ---------- */
.overlay{position:fixed;inset:0;background:rgba(15,23,42,0.45);z-index:50;}
.modal{position:fixed;top:0;right:0;height:100vh;width:min(94vw, clamp(600px, 50vw, 1100px));background:var(--surface);box-shadow:-8px 0 28px rgba(0,0,0,0.18);z-index:51;display:flex;flex-direction:column;}
.modal-head{padding:20px 24px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;}
.modal-head h3{margin:0;font-size:16px;font-weight:600;}
.modal-body{padding:22px 24px;overflow-y:auto;flex:1;}
.modal-foot{padding:16px 24px;border-top:1px solid var(--line);display:flex;justify-content:flex-end;gap:10px;}
.iconbtn{background:none;border:none;cursor:pointer;color:var(--ink-soft);padding:4px;display:flex;}
.iconbtn:hover{color:var(--ink);}
.iconbtn:disabled{opacity:.3;cursor:not-allowed;}

.note-empty{background:var(--surface-2);border:1px dashed var(--line-strong);border-radius:var(--radius);padding:18px;color:var(--ink-soft);font-size:13px;text-align:center;}

/* ---------- Login page ---------- */
.login-wrap{min-height:100vh;width:100%;display:flex;align-items:center;justify-content:center;background:var(--sidebar-bg);}
.login-card{background:var(--surface);border-radius:10px;padding:36px 34px;width:100%;max-width:380px;box-shadow:0 20px 60px rgba(0,0,0,0.35);}
.login-card .tag{font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:.14em;color:var(--accent);text-transform:uppercase;}
.login-card h1{font-size:19px;margin:6px 0 22px;font-weight:600;}
.login-error{background:var(--danger-soft);color:var(--danger);border-radius:var(--radius);padding:10px 12px;font-size:12.5px;margin-bottom:14px;}

@media(max-width:820px){
  .app-shell{flex-direction:column;}
  .sidebar{width:100%;height:auto;position:relative;flex-direction:row;overflow-x:auto;}
  .sidebar .brand{border-bottom:none;padding:14px 16px;}
  .navlist{display:flex;padding:8px 10px;}
  .navlist a{width:auto;white-space:nowrap;}
  .sidebar .foot{display:none;}
  .main{padding:20px 16px 50px;}
}
