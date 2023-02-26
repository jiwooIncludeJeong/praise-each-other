import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { createSupabaseClient } from 'src/libs';
import { Form, useLoaderData } from '@remix-run/react';
import { Login } from '@components/common';
import { json, Response } from '@remix-run/node';
import { Layout, TopNavigation } from '@components/design-system';
import { LayoutBase } from '@components/design-system/Layout';
import { useInsets } from '@hooks/common';

export const action = async ({ request }: ActionArgs) => {
  const response = new Response();
  // @ts-ignore
  const supabase = createSupabaseClient({ request, response });

  const { message } = Object.fromEntries(await request.formData());
  const { error } = await supabase
    .from('messages')
    .insert({ body: String(message) });

  if (error) {
    console.log(error);
  }
  return json(null, { headers: response.headers });
};
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

  const { top } = useInsets();
  const onClickToAdd = async () => {
    //FIXME: from is not a function error -> SSR , process is not defined -> CSR
    // const res = await supabase.from('User').select();
    // console.log(res);
  };

  return (
    <Layout.LayoutBase bgColor={'BLACK'}>
      <TopNavigation.NavBar screenName={'PEO'} />
      <Layout.LayoutBase padding={`${top}px 20px 0 20px`}>
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
        <Form method={'post'}>
          <input type={'text'} name={'message'} />
          <button type={'submit'}>보내기</button>
        </Form>
      </Layout.LayoutBase>
    </Layout.LayoutBase>
  );
}
