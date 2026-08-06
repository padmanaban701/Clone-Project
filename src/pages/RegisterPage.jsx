import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

export const RegisterPage = () => {
  const { openAuthModal } = useAuth();

  useEffect(() => {
    openAuthModal('register');
  }, [openAuthModal]);

  return null;
};
