import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { RecoilRoot } from 'recoil';
import ThemeLayout from '@components/common/ThemeLayout/ThemeLayout';
import { GlobalStyles } from '@styles/global-styles';
import { Normalize } from 'styled-normalize';

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

export default function App() {
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
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </ThemeLayout>
        </RecoilRoot>
      </body>
    </html>
  );
}
