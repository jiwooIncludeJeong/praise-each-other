import type { FC } from 'react';
import React, { useCallback, useEffect } from 'react';
import { useOutletContext } from '@remix-run/react';
import type { SupabaseOutletContext } from '~/root';
import LoginButton from '@components/common/Login/atom/LoginButton';
import { useRecoilState } from 'recoil';
import { UserStore } from 'src/store';

//TODO: 로그인 UI로
const Login: FC<LoginProps> = props => {
  const {} = props;

  const [isLogIn, setIsLogIn] = useRecoilState(UserStore.isLogInAtom);

  const { supabase } = useOutletContext<SupabaseOutletContext>();

  const handleGithubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    if (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    setIsLogIn(false);
  };

  useEffect(() => {
    const getSession = async () => {
      const res = await supabase.auth.getSession();
      setIsLogIn(!!res.data);
    };
    getSession();
  }, []);

  return isLogIn ? (
    <LoginButton text={'로그아웃'} onClick={handleLogout}></LoginButton>
  ) : (
    <>
      <LoginButton text={'깃헙 로그인'} onClick={handleGithubLogin} />
      <LoginButton text={'구글  로그인'} onClick={handleGoogleLogin} />
    </>
  );
};

type LoginProps = {};

export default Login;
