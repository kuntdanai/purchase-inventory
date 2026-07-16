import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import CategoryDonut from './CategoryDonut.jsx';

const STATUS_LABEL = { draft: 'ฉบับร่าง', issued: 'ออกแล้ว', partial: 'รับบางส่วน', full: 'รับครบ', closed: 'ปิดงาน', cancel: 'ยกเลิก' };
const SO_STATUS_LABEL = { draft: 'ฉบับร่าง', preparing: 'จัดเตรียม', loaded: 'ขึ้นรถแล้ว', confirmed: 'ยืนยันแล้ว', cancel: 'ยกเลิก' };

function fmtMoney(n) { return (Number(n) || 0).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function fmtNum(n) { return (Number(n) || 0).toLocaleString('th-TH', { maximumFractionDigits: 2 }); }
function fmtDate(d) { if (!d) return '-'; return new Date(d).toLocaleDateString('th-TH', { day: '2-digit', month: 'short', year: 'numeric' }); }

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [pos, setPos] = useState([]);
  const [balances, setBalances] = useState([]);
  const [categoryRows, setCategoryRows] = useState([]);
  const [pendingSO, setPendingSO] = useState([]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError('');
      const [poRes, balRes, catRes, soRes] = await Promise.all([
        supabase.from('purchase_header').select('id, po_number, po_date, status, total, supplier_master(name)').order('po_date', { ascending: false }),
        supabase.from('stock_balance_view').select('*'),
        supabase.from('purchase_by_category_view').select('*'),
        supabase.from('stock_out').select('id, so_number, status, project_master(name)').not('status', 'in', '(confirmed,cancel)').limit(5),
      ]);
      if (cancelled) return;
      const firstError = poRes.error || balRes.error || catRes.error || soRes.error;
      if (firstError) {
        setError(firstError.message);
      } else {
        setPos(poRes.data || []);
        setBalances(balRes.data || []);
        setCategoryRows((catRes.data || []).map((r) => ({ category: r.category, amount: Number(r.amount) || 0 })).sort((a, b) => b.amount - a.amount));
        setPendingSO(soRes.data || []);
      }
      setLoading(false);
    }
    load();
    return () => { cancelled = true; };
  }, []);

  if (loading) return <div className="note-empty">กำลังโหลดข้อมูล...</div>;
  if (error) return <div className="login-error">โหลดข้อมูลไม่สำเร็จ: {error}</div>;

  const activePOs = pos.filter((p) => p.status !== 'cancel');
  const totalValue = activePOs.reduce((s, p) => s + (Number(p.total) || 0), 0);
  const pendingReceive = pos.filter((p) => p.status === 'issued' || p.status === 'partial').length;
  const incompleteReceive = pos.filter((p) => p.status === 'partial').length;
  const lowStockItems = balances.filter((b) => b.min_stock != null && Number(b.balance) < Number(b.min_stock));
  const totalStockQty = balances.reduce((s, b) => s + Math.max(Number(b.balance) || 0, 0), 0);
  const recentPOs = pos.slice(0, 5);
  const pendingReceiptPOs = pos.filter((p) => p.status === 'issued' || p.status === 'partial').slice(0, 5);

  return (
    <div>
      <div className="pagehead">
        <div><p className="eyebrow">Overview</p><h2>Dashboard</h2><p className="sub">สรุปภาพรวมการจัดซื้อและสต๊อกสินค้า (ข้อมูลจริงจาก Supabase)</p></div>
      </div>

      <div className="stat-grid">
        <div className="stat-card"><div className="label">ยอดสั่งซื้อรวม (บาท)</div><div className="value small mono">{fmtMoney(totalValue)}</div></div>
        <div className="stat-card"><div className="label">จำนวน PO ทั้งหมด</div><div className="value">{pos.length}</div></div>
        <div className="stat-card"><div className="label">รอรับสินค้า</div><div className="value">{pendingReceive}</div></div>
        <div className={`stat-card ${incompleteReceive > 0 ? 'alert' : ''}`}><div className="label">รับสินค้าไม่ครบ</div><div className={`value ${incompleteReceive > 0 ? 'alert' : ''}`}>{incompleteReceive}</div></div>
        <div className={`stat-card ${lowStockItems.length > 0 ? 'alert' : ''}`}><div className="label">สินค้าต่ำกว่า Min Stock</div><div className={`value ${lowStockItems.length > 0 ? 'alert' : ''}`}>{lowStockItems.length}</div></div>
        <div className="stat-card"><div className="label">ยอดคงเหลือรวม (รายการ)</div><div className="value small mono">{fmtNum(totalStockQty)}</div></div>
      </div>

      <div className="panel">
        <h3>ยอดซื้อแยกตามประเภทสินค้า</h3>
        <CategoryDonut rows={categoryRows} />
      </div>

      <div className="grid-2">
        <div className="panel">
          <h3>PO ที่รอรับสินค้า</h3>
          {pendingReceiptPOs.length === 0 ? <div className="note-empty">ไม่มี PO ที่รอรับสินค้า</div> : (
            <table><tbody>
              {pendingReceiptPOs.map((p) => (
                <tr key={p.id}>
                  <td className="mono">{p.po_number}</td>
                  <td>{p.supplier_master?.name || '-'}</td>
                  <td className="mono" style={{ textAlign: 'right' }}>{fmtMoney(p.total)}</td>
                  <td><span className={`stamp ${p.status}`}>{STATUS_LABEL[p.status]}</span></td>
                </tr>
              ))}
            </tbody></table>
          )}
        </div>
        <div className="panel">
          <h3>Stock Out ที่รอยืนยัน</h3>
          {pendingSO.length === 0 ? <div className="note-empty">ไม่มีรายการเบิกที่รอยืนยัน</div> : (
            <table><tbody>
              {pendingSO.map((s) => (
                <tr key={s.id}>
                  <td className="mono">{s.so_number}</td>
                  <td>{s.project_master?.name || '-'}</td>
                  <td><span className={`stamp ${s.status}`}>{SO_STATUS_LABEL[s.status]}</span></td>
                </tr>
              ))}
            </tbody></table>
          )}
        </div>
      </div>

      <div className="panel">
        <h3>ใบสั่งซื้อล่าสุด</h3>
        {recentPOs.length === 0 ? <div className="note-empty">ยังไม่มีใบสั่งซื้อ</div> : (
          <table>
            <thead><tr><th>เลขที่ PO</th><th>วันที่</th><th>Supplier</th><th>สถานะ</th><th style={{ textAlign: 'right' }}>ยอดรวม</th></tr></thead>
            <tbody>
              {recentPOs.map((p) => (
                <tr key={p.id}>
                  <td className="mono">{p.po_number}</td>
                  <td>{fmtDate(p.po_date)}</td>
                  <td>{p.supplier_master?.name || '-'}</td>
                  <td><span className={`stamp ${p.status}`}>{STATUS_LABEL[p.status]}</span></td>
                  <td className="mono" style={{ textAlign: 'right' }}>{fmtMoney(p.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
