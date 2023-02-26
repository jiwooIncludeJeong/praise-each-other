import type * as Icons from '@components/icons';

export type BottomTabRouteType = {
  link: string;
  inactiveIcon: keyof typeof Icons;
  activeIcon: keyof typeof Icons;
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
  {
    link: BottomTabRoute['index'],
    inactiveIcon: 'HomeIcon',
    activeIcon: 'HomeIcon',
  },
  {
    link: BottomTabRoute['praise'],
    inactiveIcon: 'PraiseIcon',
    activeIcon: 'PraiseIcon',
  },
  {
    link: BottomTabRoute['my-page'],
    inactiveIcon: 'MypageIcon',
    activeIcon: 'MypageIcon',
  },
];

export const useBottomTabRoutes: string[] = [
  BottomTabRoute.praise,
  BottomTabRoute['my-page'],
  BottomTabRoute.index,
];

export const shouldRenderBottomSheet = (url: string) =>
  useBottomTabRoutes.includes(url);
