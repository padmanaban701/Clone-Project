import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

export const LoginPage = () => {
  const { openAuthModal } = useAuth();

  useEffect(() => {
    openAuthModal('login');
  }, [openAuthModal]);

  return null;
};
