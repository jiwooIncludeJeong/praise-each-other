import type * as Icons from '@components/icons';

export type BottomTabRouteType = {
  link: string;
  icon: keyof typeof Icons;
};

export const BOTTOM_TAB_NAME = {
  index: 'index',
  'my-page': 'my-page',
  praise: 'praise',
};
export const BottomTabRoute: Record<keyof typeof BOTTOM_TAB_NAME, string> = {
  index: '/',
  'my-page': '/my-page',
  praise: '/praise',
};

export const BottomTab: BottomTabRouteType[] = [
  { link: BottomTabRoute['index'], icon: 'HomeIcon' },
  { link: BottomTabRoute['praise'], icon: 'PraiseIcon' },
  { link: BottomTabRoute['my-page'], icon: 'MypageIcon' },
];
