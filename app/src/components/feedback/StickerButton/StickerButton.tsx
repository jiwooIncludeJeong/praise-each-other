import type { FC } from 'react';
import React from 'react';
import type { Database } from 'src/types';
import { Button, Image } from '@components/design-system';

const StickerButton: FC<StickerButtonProps> = props => {
  const { imageUrl, onClick, isSelected } = props;
  return (
    <Button.Button
      disabled={!onClick}
      onClick={onClick}
      style={{
        borderWidth: 2,
        borderColor: isSelected ? 'green' : 'transparent',
        borderStyle: 'solid',
        borderRadius: 12,
      }}
    >
      <Image.LazyImage
        imageUrl={imageUrl ?? ''}
        size={70}
        objectFit={'cover'}
      ></Image.LazyImage>
    </Button.Button>
  );
};

type StickerButtonProps = Database['public']['Tables']['sticker']['Row'] & {
  onClick?: () => void;
  isSelected?: boolean;
};

export default StickerButton;
