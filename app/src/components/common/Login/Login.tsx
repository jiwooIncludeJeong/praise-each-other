import type { FC } from 'react';
import React from 'react';
import { useOutletContext } from '@remix-run/react';
import type { SupabaseOutletContext } from '~/root';

//TODO: 로그인 UI로
const Login: FC<LoginProps> = props => {
  const {} = props;
  const { supabase } = useOutletContext<SupabaseOutletContext>();

  const handleClickLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    if (error) {
      console.log(error);
    }
  };

  const handleClickLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleClickLogout}>로그아웃</button>
      <button onClick={handleClickLogin}>로그인</button>
    </>
  );
};

type LoginProps = {};

export default Login;
