import React from 'react';

export default function Placeholder({ title, eyebrow }) {
  return (
    <div>
      <div className="pagehead">
        <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
      </div>
      <div className="note-empty">
        โมดูลนี้ยังไม่ได้เชื่อมต่อกับ Supabase ในเวอร์ชันนี้ — จะทยอยเพิ่มให้ในรอบถัดไป
      </div>
    </div>
  );
}
