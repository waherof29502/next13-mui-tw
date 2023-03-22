'use client';
import { FC, useState } from 'react';
import { Button } from '@/ui/Button';
import { signOut } from 'next-auth/react';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={signOutWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignOutButton;
