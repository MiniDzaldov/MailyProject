import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated: boolean;
  userName?: string;
  onLogout: () => void;
}

export default function Navbar({ isAuthenticated, userName, onLogout }: NavbarProps) {
  const navigate = useNavigate();

  const items = isAuthenticated
    ? [
        {
          label: 'Dashboard',
          icon: 'pi pi-home',
          command: () => navigate('/dashboard'),
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          command: onLogout,
        },
      ]
    : [];

  const end = isAuthenticated ? (
    <div className="flex items-center gap-2 pr-4">
      <Avatar label={userName?.charAt(0).toUpperCase()} size="large" shape="circle" />
      <span className="text-white font-semibold">{userName}</span>
    </div>
  ) : (
    <div className="flex gap-12 pr-10">
      <Button
        label="Login"
        icon="pi pi-sign-in"
        severity="success"
        onClick={() => navigate('/login')}
        className="text-lg font-semibold"

      />
      <Button
        label="Register"
        icon="pi pi-user-plus"
        severity="info"
        onClick={() => navigate('/register')}
        className="text-lg font-semibold"
        />
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
    <Menubar
      model={items}
      end={end}
      className="border-none shadow-none bg-transparent text-white"
    />
  </div>
  
  );
}
