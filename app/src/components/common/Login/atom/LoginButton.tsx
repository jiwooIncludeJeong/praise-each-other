import type { FC } from 'react';
import React from 'react';
import { Button, Layout, Text } from '@components/design-system';

const LoginButton: FC<LoginButtonProps> = props => {
  const { text, onClick } = props;
  return (
    <Button.Button onClick={onClick}>
      <Layout.LayoutBase
        width={'100%'}
        padding={'12px'}
        borderRadius={'12px'}
        outline={'BLACK'}
        bgColor={'WHITE'}
        alignItems={'center'}
      >
        <Text.Typo fontType={'KR/Button/S/Medium'}>{text}</Text.Typo>
      </Layout.LayoutBase>
    </Button.Button>
  );
};

type LoginButtonProps = {
  text: string;
  onClick: () => void;
};

export default LoginButton;
