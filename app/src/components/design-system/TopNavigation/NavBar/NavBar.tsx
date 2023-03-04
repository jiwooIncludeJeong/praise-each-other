import type { FC } from 'react';
import React from 'react';
import { Layout } from '@components/design-system';
import { PADDING } from '@components/design-system/TopNavigation/NavBar/NavBar.constants';
import * as Icons from '@components/icons';
import * as S from './NavBar.styles';
import { Button } from '@components/design-system';
import { withConstants } from 'src/utils';
import { COMMON } from '@constants/index';

const NavBar: FC<NavBarProps> = props => {
  const { screenName, close, closeButton } = props;

  const CloseButton = closeButton ? Icons[closeButton] : undefined;

  return (
    <Layout.Row
      padding={`${PADDING}px`}
      absolute={true}
      bgColor={'WHITE'}
      style={{ height: NAV_BAR_HEIGHT, zIndex: COMMON.LAYOUT_Z.NAV_BAR }}
    >
      {CloseButton && (
        <Button.Button onClick={close}>
          <CloseButton width={24} height={24} />
        </Button.Button>
      )}
      <S.CenterContainer>
        <h1>{screenName}</h1>
      </S.CenterContainer>
    </Layout.Row>
  );
};

type NavBarProps = {
  screenName: string;
} & (
  | {
      closeButton: keyof typeof Icons;
      close: () => void;
    }
  | {
      closeButton?: undefined;
      close?: undefined;
    }
);

const NAV_BAR_HEIGHT = 56;
export default withConstants(NavBar, { NAV_BAR_HEIGHT });
