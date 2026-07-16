-- รันเพิ่มอันนี้ใน SQL Editor ก่อนใช้งานหน้า Dashboard ของเว็บแอปจริง
-- (ใช้สำหรับกราฟ "ยอดซื้อแยกตามประเภทสินค้า")
create view public.purchase_by_category_view as
select
  coalesce(ic.name, 'ไม่ระบุ') as category,
  sum(pd.qty * pd.unit_price) as amount
from public.purchase_detail pd
join public.purchase_header ph on ph.id = pd.po_id and ph.status <> 'cancel'
left join public.item_master im on im.id = pd.item_id
left join public.item_categories ic on ic.id = im.category_id
group by coalesce(ic.name, 'ไม่ระบุ');
