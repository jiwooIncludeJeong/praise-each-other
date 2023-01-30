import type { LoaderArgs } from '@remix-run/node';
import { supabase } from 'src/libs';
import { useLoaderData } from '@remix-run/react';
import { Login } from '@components/common';

export const loader = async ({}: LoaderArgs) => {
  const { data } = await supabase.from('users').select();
  return {
    users: data ?? [],
  };
}; 

export default function Index() {
  const { users } = useLoaderData<typeof loader>();

  console.log(users);

  const onClickToAdd = async () => {
    //FIXME: from is not a function error -> SSR , process is not defined -> CSR
    // const res = await supabase.from('User').select();
    // console.log(res);
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>PEO</h1>
      <Login />
      <div onClick={onClickToAdd} style={{ cursor: 'pointer' }}>
        user 생성
      </div>
    </div>
  );
}
