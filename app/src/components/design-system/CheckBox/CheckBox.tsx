import type { FC } from 'react';
import React from 'react';
import { Layout } from '@components/design-system';
import { CheckIcon } from '@components/icons';

const CheckBox: FC<CheckBoxProps> = props => {
  const { size = 32, onClick, active } = props;
  return (
    <Layout.LayoutBase
      width={size}
      height={size}
      borderRadius={`${size / 8}px`}
      outline={'BLACK'}
      justifyContent={'center'}
      alignItems={'center'}
      style={{ borderWidth: 2, cursor: 'pointer' }}
      onClick={onClick}
    >
      <CheckIcon
        width={size - 8}
        height={size - 8}
        style={{ opacity: active ? 1 : 0 }}
      />
    </Layout.LayoutBase>
  );
};

type CheckBoxProps = {
  size?: number;
  active: boolean;
  onClick: () => void;
};

export default CheckBox;
