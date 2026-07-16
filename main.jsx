import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';
import Login from './pages/Login.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ItemMaster from './pages/ItemMaster.jsx';
import Placeholder from './pages/Placeholder.jsx';

export default function App() {
  const { session, loadingSession, loadingRole, role } = useAuth();

  if (loadingSession) {
    return <div className="login-wrap"><div style={{ color: '#94A3B8' }}>กำลังโหลด...</div></div>;
  }
  if (!session) {
    return <Login />;
  }
  if (loadingRole) {
    return <div className="login-wrap"><div style={{ color: '#94A3B8' }}>กำลังตรวจสอบสิทธิ์ผู้ใช้...</div></div>;
  }
  if (!role) {
    return (
      <div className="login-wrap">
        <div className="login-card">
          <div className="tag">Access</div>
          <h1>บัญชีนี้ยังไม่ได้กำหนดสิทธิ์การใช้งาน</h1>
          <p style={{ fontSize: 13, color: 'var(--ink-soft)' }}>ติดต่อผู้ดูแลระบบให้เพิ่มบัญชีนี้ในตาราง user_roles</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="items" element={<ItemMaster />} />
        <Route path="purchase-orders" element={<Placeholder eyebrow="Purchasing" title="Purchase Order" />} />
        <Route path="goods-receipt" element={<Placeholder eyebrow="Purchasing" title="Goods Receipt" />} />
        <Route path="stock-out" element={<Placeholder eyebrow="Stock" title="Stock Out" />} />
        <Route path="stock-return" element={<Placeholder eyebrow="Stock" title="Stock Return" />} />
        <Route path="stock-adjustment" element={<Placeholder eyebrow="Stock" title="Stock Adjustment" />} />
        <Route path="stock-balance" element={<Placeholder eyebrow="Stock" title="Stock Balance" />} />
        <Route path="stock-movement" element={<Placeholder eyebrow="Stock" title="Stock Movement" />} />
        <Route path="master" element={<Placeholder eyebrow="Master Data" title="Supplier / Project / Location" />} />
        <Route path="price-history" element={<Placeholder eyebrow="Report" title="Price History" />} />
        <Route path="supplier-report" element={<Placeholder eyebrow="Report" title="Supplier Report" />} />
        <Route path="project-report" element={<Placeholder eyebrow="Report" title="Project Report" />} />
        <Route path="settings" element={<Placeholder eyebrow="Setting" title="User & Role" />} />
      </Route>
    </Routes>
  );
}
