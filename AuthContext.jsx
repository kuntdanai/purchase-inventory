import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(undefined); // undefined = ยังไม่รู้, null = ไม่ได้ login
  const [role, setRole] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [loadingRole, setLoadingRole] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session?.user) {
      setRole(null);
      setFullName(null);
      return;
    }
    setLoadingRole(true);
    supabase
      .from('user_roles')
      .select('role, full_name')
      .eq('user_id', session.user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) console.error('โหลด role ไม่สำเร็จ:', error.message);
        setRole(data?.role || null);
        setFullName(data?.full_name || null);
        setLoadingRole(false);
      });
  }, [session]);

  const signOut = () => supabase.auth.signOut();

  const value = {
    session,
    user: session?.user || null,
    role, // 'admin' | 'viewer' | null
    isAdmin: role === 'admin',
    fullName,
    loadingSession: session === undefined,
    loadingRole,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth ต้องถูกเรียกภายใน <AuthProvider>');
  return ctx;
}
