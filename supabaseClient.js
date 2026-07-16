import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  IconDashboard, IconFile, IconInbox, IconTruck, IconRotateCcw, IconSliders,
  IconLayers, IconActivity, IconBox, IconUsers, IconTag, IconBar, IconFolder, IconSettings,
} from './Icons.jsx';

const NAV = [
  { group: 'ภาพรวม', items: [
    { to: '/', label: 'Dashboard', icon: IconDashboard, viewer: true, end: true },
  ]},
  { group: 'Purchase', items: [
    { to: '/purchase-orders', label: 'Purchase Order', icon: IconFile, viewer: false },
    { to: '/goods-receipt', label: 'Goods Receipt', icon: IconInbox, viewer: false },
  ]},
  { group: 'Stock', items: [
    { to: '/stock-out', label: 'Stock Out', icon: IconTruck, viewer: false },
    { to: '/stock-return', label: 'Stock Return', icon: IconRotateCcw, viewer: false },
    { to: '/stock-adjustment', label: 'Stock Adjustment', icon: IconSliders, viewer: false },
    { to: '/stock-balance', label: 'Stock Balance', icon: IconLayers, viewer: false },
    { to: '/stock-movement', label: 'Stock Movement', icon: IconActivity, viewer: false },
  ]},
  { group: 'Master Data', items: [
    { to: '/items', label: 'Item Master', icon: IconBox, viewer: false },
    { to: '/master', label: 'Supplier / Project / Location', icon: IconUsers, viewer: false },
  ]},
  { group: 'Report', items: [
    { to: '/price-history', label: 'Price History', icon: IconTag, viewer: true },
    { to: '/supplier-report', label: 'Supplier Report', icon: IconBar, viewer: true },
    { to: '/project-report', label: 'Project Report', icon: IconFolder, viewer: true },
  ]},
  { group: 'Setting', items: [
    { to: '/settings', label: 'User & Role', icon: IconSettings, viewer: false },
  ]},
];

export default function Sidebar({ isAdmin }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="tag">Internal</div>
        <h1>ระบบจัดซื้อ &amp;<br />บริหารสินค้าคงคลัง</h1>
      </div>
      <nav className="navlist">
        {NAV.map((g) => {
          const visible = g.items.filter((i) => isAdmin || i.viewer);
          if (visible.length === 0) return null;
          return (
            <div className="navgroup" key={g.group}>
              <div className="navgroup-label">{g.group}</div>
              {visible.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </nav>
      <div className="foot">เชื่อมต่อกับฐานข้อมูลจริงผ่าน Supabase</div>
    </aside>
  );
}
