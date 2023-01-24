import { supabase } from 'src/libs';
import { useLoaderData } from '@remix-run/react';
import type { SupabaseClient } from '@supabase/supabase-js';

export async function loader() {
  // const { data } = await supabase.from('User').select();

  return {
    data: {},
  };
}

export default function Index() {
  const { data } = useLoaderData();

  const onClickToAdd = async () => {
    //FIXME: from is not a function error -> SSR , process is not defined -> CSR
    const res = await supabase.from('User').select();
    console.log(res);
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>PEO</h1>
      <div onClick={onClickToAdd} style={{ cursor: 'pointer' }}>
        user 생성
      </div>
    </div>
  );
}
