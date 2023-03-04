import type { LinksFunction, MetaFunction, LoaderArgs } from '@remix-run/node';
import { json, Response } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRevalidator,
} from '@remix-run/react';
import { RecoilRoot } from 'recoil';
import ThemeLayout from '@components/common/ThemeLayout/ThemeLayout';
import { GlobalStyles } from '@styles/global-styles';
import { Normalize } from 'styled-normalize';
import { useEffect, useState } from 'react';
import { createSupabaseClient } from 'src/libs';
import { createBrowserClient } from '@supabase/auth-helpers-remix';

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from 'src/types/db_types';
import { MobileLayout } from '@components/common';
import GlobalComponents from '@libs/GlobalComponent/GlobalComponents';

type TypedSupabaseClinet = SupabaseClient<Database>;

export type SupabaseOutletContext = {
  supabase: TypedSupabaseClinet;
};

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

export const loader = async ({ request }: LoaderArgs) => {
  // Server Side의 값을 받아오기 위해
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL || '',
    SUPABASE_KEY: process.env.SUPABASE_KEY || '',
  };

  const response = new Response();
  // @ts-ignore
  const supabase = createSupabaseClient({ request, response });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return json({ env, session }, { headers: response.headers });
};

export default function App() {
  const { env, session } = useLoaderData<typeof loader>();

  const revalidator = useRevalidator();

  const [supabase] = useState(() =>
    createBrowserClient<Database>(env.SUPABASE_URL, env.SUPABASE_KEY),
  );

  const serverAccessToken = session?.access_token;

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        // call loaders again
        revalidator.revalidate();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <html lang="kr">
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>

      <body>
        <RecoilRoot>
          <ThemeLayout>
            <GlobalComponents>
              <MobileLayout>
                <Normalize />
                <GlobalStyles />
                <Outlet context={{ supabase }} />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
              </MobileLayout>
            </GlobalComponents>
          </ThemeLayout>
        </RecoilRoot>
      </body>
    </html>
  );
}
