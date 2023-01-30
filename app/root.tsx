import type { LinksFunction, MetaFunction, LoaderArgs } from '@remix-run/node';
import {json} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useLoaderData
} from '@remix-run/react';
import { RecoilRoot } from 'recoil';
import ThemeLayout from '@components/common/ThemeLayout/ThemeLayout';
import { GlobalStyles } from '@styles/global-styles';
import { Normalize } from 'styled-normalize';
import {useState} from 'react'
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type {Database} from 'src/types/db_types';

type TypedSupabaseClinet = SupabaseClient<Database>

export type SupabaseOutletContext = {
  supabase: TypedSupabaseClinet
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css',
      as: 'style',
    },
    {
      rel: 'preload',
      href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css',
      as: 'style',
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'PEO',
  description: 'Praise Each Other',
  viewport:
    'user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, height=device-height, viewport-fit=cover',
  'apple-mobile-web-app-capable': 'yes',
  'apple-mobile-web-app-status-bar-style': 'default',
});

export const loader = async ({}:LoaderArgs) => {
  // Server Side의 값을 받아오기 위해
  const env = {
    SUPABASE_URL:process.env.SUPABASE_URL||'',
    SUPABASE_KEY:process.env.SUPABASE_KEY||''
  }

  return json({env})
}

export default function App() {
  const { env } = useLoaderData<typeof loader>();
  console.log(env)

  const [supabase] = useState(()=>createClient<Database>(env.SUPABASE_URL, env.SUPABASE_KEY))

  return (
    <html lang="kr">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <RecoilRoot>
          <ThemeLayout>
            <Normalize />
            <GlobalStyles />
            <Outlet context={{supabase}}/>
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </ThemeLayout>
        </RecoilRoot>
      </body>
    </html>
  );
}
