import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { V3LoginPage } from './pages/V3LoginPage';
import { ClassicLoginPage } from './pages/ClassicLoginPage';
import { RouteSwitcher } from './components/common/RouteSwitcher';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Floating Route Switcher Dock (allows instant switching between V3 and V1) */}
      <RouteSwitcher />

      <Routes>
        {/* Route 1: V3 Orbiter AI Design (Default on / and /v3) */}
        <Route path="/" element={<V3LoginPage />} />
        <Route path="/v3" element={<V3LoginPage />} />
        
        {/* Route 2: Preserved Original Classic Design (/classic or /v1) */}
        <Route path="/classic" element={<ClassicLoginPage />} />
        <Route path="/v1" element={<ClassicLoginPage />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

