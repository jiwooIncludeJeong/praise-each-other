import { Button, Text, TopNavigation } from '@components/design-system';
import { Layout } from '@components/design-system';
import { Link } from '@remix-run/react';

export default function Feedback() {
  // const a = useRou

  return (
    <Layout.LayoutBase>
      <TopNavigation.NavBar screenName={'피드백'} />
      <Layout.LayoutBase
        padding={`${TopNavigation.NavBar.NAV_BAR_HEIGHT}px 20px 0 20px`}
        alignItems={'center'}
      >
        <Link to={'/feedback/send'}>
          <Button.Button>
            <Layout.LayoutBase
              padding={'12px 20px'}
              bgColor={'BLACK'}
              borderRadius={'12px'}
            >
              <Text.Typo fontType={'KR/Button/M/Bold'} color={'WHITE'}>
                {'피드백 하러 가기'}
              </Text.Typo>
            </Layout.LayoutBase>
          </Button.Button>
        </Link>
      </Layout.LayoutBase>
    </Layout.LayoutBase>
  );
}
