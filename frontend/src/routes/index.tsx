// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from '../features/auth/Login.tsx';
// import Dashboard from '../pages/Dashboard.tsx';
// import Register from '../features/auth/Register.tsx';



// export default function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from '../features/auth/Login.tsx';
import Login from '../features/auth/Login.tsx';
import Dashboard from '../pages/Dashboard.tsx';
import Register from '../features/auth/Register.tsx';
import Navbar from '../components/Navbar.tsx'; 

export default function AppRoutes() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <BrowserRouter>
      <Navbar
        isAuthenticated={!!user}
        userName={user?.name}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
