/**
 * LOCAL DEVELOPMENT PROXY
 * This file is only used for local development in AI Studio.
 * During sync, it is OVERWRITTEN by either AppPublic.tsx (for Dex) or AppAdmin.tsx (for Masterworld).
 * DO NOT add routes here. Add them to AppPublic.tsx or AppAdmin.tsx directly.
 */
import React, { Suspense } from 'react';
import AppPublic from './AppPublic';
import { getAdminPath } from './lib/utils';
import { lazyWithRetry } from './lib/lazyWithRetry';

const AppAdmin = lazyWithRetry(() => import('./AppAdmin'));

export default function App() {
  const adminPath = getAdminPath();
  const currentPath = window.location.pathname.toLowerCase();
  const isAdminPath = currentPath.startsWith(`/${adminPath.toLowerCase()}`) || 
                      currentPath.startsWith('/admin') || 
                      currentPath.startsWith('/masterworld');
  
  if (isAdminPath) {
    return (
      <Suspense fallback={
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#090d16', color: '#fff' }}>
          Loading Admin Panel...
        </div>
      }>
        <AppAdmin />
      </Suspense>
    );
  }
  return <AppPublic />;
}
