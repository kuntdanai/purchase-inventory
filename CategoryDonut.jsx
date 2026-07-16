import React from 'react';

const COLORS = ['#2563EB', '#16A34A', '#D97706', '#DC2626', '#7C3AED', '#0D9488', '#64748B'];

function fmtMoney(n) {
  return (Number(n) || 0).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function CategoryDonut({ rows }) {
  const total = rows.reduce((s, r) => s + r.amount, 0);
  if (total <= 0) return <div className="note-empty">ยังไม่มีข้อมูลการสั่งซื้อ</div>;

  const r = 60, cx = 80, cy = 80, circumference = 2 * Math.PI * r;
  let offset = 0;
  const arcs = rows.map((row, idx) => {
    const dash = (row.amount / total) * circumference;
    const el = (
      <circle
        key={row.category}
        cx={cx} cy={cy} r={r} fill="none"
        stroke={COLORS[idx % COLORS.length]} strokeWidth={28}
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeDashoffset={-offset}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
    );
    offset += dash;
    return el;
  });

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <svg width="160" height="160" viewBox="0 0 160 160" style={{ flexShrink: 0 }}>
        {arcs}
        <text x="80" y="76" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="11" fill="var(--ink-soft)">รวม (บาท)</text>
        <text x="80" y="94" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="13" fontWeight="700" fill="var(--ink)">{fmtMoney(total)}</text>
      </svg>
      <div style={{ flex: 1, minWidth: 220 }}>
        {rows.map((row, idx) => {
          const pct = ((row.amount / total) * 100).toFixed(1);
          return (
            <div key={row.category} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 12.5 }}>
              <span style={{ width: 11, height: 11, borderRadius: 3, background: COLORS[idx % COLORS.length], flexShrink: 0 }} />
              <span style={{ flex: 1, color: 'var(--ink-soft)' }}>{row.category}</span>
              <span className="mono" style={{ minWidth: 90, textAlign: 'right' }}>{fmtMoney(row.amount)}</span>
              <span className="mono" style={{ width: 44, textAlign: 'right', color: 'var(--ink-soft)' }}>{pct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
