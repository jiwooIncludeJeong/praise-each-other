import type { FC } from 'react';
import React from 'react';
import type { Database } from 'src/types';
import { Button, Layout, Text } from '@components/design-system';

const CategoryButton: FC<CategoryButtonProps> = props => {
  const { name, onClick } = props;
  return (
    <Button.Button disabled={!onClick} onClick={onClick}>
      <Layout.LayoutBase
        padding={'6px 12px'}
        borderRadius={'12px'}
        bgColor={'BLACK'}
      >
        <Text.Typo fontType={'KR/Button/S/Medium'} color={'WHITE'}>
          {name}
        </Text.Typo>
      </Layout.LayoutBase>
    </Button.Button>
  );
};

type CategoryButtonProps = Database['public']['Tables']['category']['Row'] & {
  onClick?: () => void;
};

export default CategoryButton;
