import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'ไม่พบ VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY — ตรวจสอบไฟล์ .env.local หรือ Environment Variables บน Vercel'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
