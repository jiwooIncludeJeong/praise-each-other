import type { LoaderArgs } from '@remix-run/node';
import { createSupabaseClient } from 'src/libs';
import { useLoaderData } from '@remix-run/react';
import { Login } from '@components/common';
import { json, Response } from '@remix-run/node';

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  // @ts-ignore
  const supabase = createSupabaseClient({ request, response });
  const { data } = await supabase.from('messages').select();
  return json(
    {
      messages: data ?? [],
    },
    { headers: response.headers },
  );
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();

  const onClickToAdd = async () => {
    //FIXME: from is not a function error -> SSR , process is not defined -> CSR
    // const res = await supabase.from('User').select();
    // console.log(res);
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>PEO</h1>
      <Login />
      {/*<div onClick={onClickToAdd} style={{ cursor: 'pointer' }}>*/}
      {/*  user 생성*/}
      {/*</div>*/}
      {!!messages?.length &&
        messages.map(v => (
          <div key={v.id} style={{ cursor: 'pointer' }}>
            {v.title} : {v.body}
          </div>
        ))}
    </div>
  );
}
