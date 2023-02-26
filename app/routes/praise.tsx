import { TopNavigation } from '@components/design-system';
import { Layout } from '@components/design-system';

export default function Praise() {
  return (
    <Layout.LayoutBase bgColor={'BLACK'}>
      <TopNavigation.NavBar screenName={'칭찬하기'} />
      <Layout.LayoutBase
        padding={`${TopNavigation.NavBar.NAV_BAR_HEIGHT}px 20px 0 20px`}
      />
    </Layout.LayoutBase>
  );
}
