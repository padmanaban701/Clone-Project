/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';
import { getItem, setItem, removeItem } from '../utils/storage';
import { toast } from 'sonner';

export const AuthContext = createContext();

const AUTH_USER_KEY = 'ecom_user_session';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getItem(AUTH_USER_KEY, null));
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login'); // 'login' | 'register'

  useEffect(() => {
    if (user) {
      setItem(AUTH_USER_KEY, user);
    } else {
      removeItem(AUTH_USER_KEY);
    }
  }, [user]);

  const openAuthModal = (mode = 'login') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const login = async (email, password) => {
    if (!email || !password) {
      toast.error('Please fill in all credentials');
      return false;
    }

    const mockUser = {
      id: 'usr-101',
      name: email.split('@')[0].toUpperCase(),
      email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      joinedAt: new Date().toLocaleDateString()
    };

    setUser(mockUser);
    setIsAuthModalOpen(false);
    toast.success(`Welcome back, ${mockUser.name}!`);
    return true;
  };

  const register = async (name, email, password) => {
    if (!name || !email || !password) {
      toast.error('Please fill in all details');
      return false;
    }

    const newUser = {
      id: 'usr-' + Math.floor(100 + Math.random() * 900),
      name,
      email,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      joinedAt: new Date().toLocaleDateString()
    };

    setUser(newUser);
    setIsAuthModalOpen(false);
    toast.success('Account created successfully!');
    return true;
  };

  const logout = () => {
    setUser(null);
    toast.info('Logged out of account');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAuthModalOpen,
        authModalMode,
        setAuthModalMode,
        openAuthModal,
        closeAuthModal,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
