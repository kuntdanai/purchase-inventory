import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import { useAuth } from './AuthContext.jsx';

export default function Layout() {
  const { isAdmin, role, fullName, user, signOut } = useAuth();

  return (
    <div className="app-shell">
      <Sidebar isAdmin={isAdmin} />
      <main className="main">
        <div className="topbar">
          <div />
          <div className="user-badge">
            <span>{fullName || user?.email}</span>
            <span className={`role-pill`}>{role === 'admin' ? 'Admin' : 'Viewer'}</span>
            <button className="btn-link" onClick={signOut}>ออกจากระบบ</button>
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
