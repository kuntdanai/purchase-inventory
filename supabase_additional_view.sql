import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
  }

  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="tag">Internal · Prototype</div>
        <h1>ระบบจัดซื้อและบริหารสินค้าคงคลัง</h1>
        {error && <div className="login-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label className="field">
            <span className="lbl">อีเมล</span>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
          </label>
          <label className="field">
            <span className="lbl">รหัสผ่าน</span>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button className="btn" type="submit" disabled={loading} style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
            {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </button>
        </form>
      </div>
    </div>
  );
}
