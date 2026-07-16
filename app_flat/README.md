# ระบบจัดซื้อและบริหารสินค้าคงคลัง — Web App (เชื่อมต่อ Supabase จริง)

**หมายเหตุ:** ไฟล์ทั้งหมดในโปรเจกต์นี้อยู่ในระดับเดียวกัน (ไม่มีโฟลเดอร์ย่อยเลย) เพื่อให้อัปโหลดขึ้น GitHub ผ่านหน้าเว็บได้ง่าย ไม่มีปัญหาเรื่องโครงสร้างโฟลเดอร์หายระหว่างอัปโหลด

เวอร์ชันนี้เชื่อมต่อกับฐานข้อมูล Supabase จริงแล้ว (ไม่ใช่ demo เก็บข้อมูลในเบราว์เซอร์เหมือนก่อนหน้านี้)

## สถานะปัจจุบัน

โมดูลที่ใช้งานได้จริงแล้ว: **Login, Dashboard, Item Master**
โมดูลอื่น (Purchase Order, Goods Receipt, Stock Out/Return/Adjustment, Stock Balance/Movement, Master Data ส่วน Supplier/Project/Location, Reports, Settings) ยังเป็นหน้า placeholder รอเพิ่มในรอบถัดไป

## ขั้นตอนก่อน deploy

1. รันไฟล์ `supabase_additional_view.sql` เพิ่มใน Supabase SQL Editor (จำเป็นสำหรับกราฟใน Dashboard)
2. ไปที่ Supabase Project Settings > Data API (หรือกดปุ่ม "Connect" ที่หน้าโปรเจกต์) เก็บค่า 2 ตัวไว้:
   - `Project URL`
   - `anon public` key (หรือ `Publishable key` ถ้าเป็นระบบ key ใหม่)

## Deploy ผ่าน Vercel (ไม่ต้องติดตั้งอะไรในเครื่อง)

1. บน GitHub repo ที่มีอยู่แล้ว: **ลบไฟล์เก่าทั้งหมดออกก่อน** แล้วอัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ (ทุกไฟล์อยู่ระดับเดียวกันแล้ว ไม่ต้องกังวลเรื่องโฟลเดอร์ซ้อน)
2. ที่ Vercel Project Settings > General > Build and Deployment Settings ตั้งค่า **Root Directory ให้ว่างเปล่า** (หรือ `./`)
3. ตรวจสอบว่า Environment Variables ยังตั้งไว้ครบ (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)
4. ไปแท็บ Deployments กด **Redeploy**

## ทดสอบในเครื่องตัวเอง (ถ้ามี Node.js ติดตั้งอยู่ — ข้ามขั้นตอนนี้ได้ถ้าจะ deploy ผ่าน Vercel อย่างเดียว)

```bash
npm install
cp .env.example .env.local   # แล้วใส่ค่า URL/key ของจริง
npm run dev
```
