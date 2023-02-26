import { TopNavigation } from '@components/design-system';
import { Layout } from '@components/design-system';

export default function MyPage() {
  return (
    <Layout.LayoutBase bgColor={'BLACK'}>
      <TopNavigation.NavBar screenName={'마이페이지'} />
      <Layout.LayoutBase
        padding={`${TopNavigation.NavBar.NAV_BAR_HEIGHT}px 20px 0 20px`}
      />
    </Layout.LayoutBase>
  );
}
