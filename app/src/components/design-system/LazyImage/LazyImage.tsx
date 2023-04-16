import type { FC } from 'react';
import React from 'react';
import useImageLazyLoading from '@components/design-system/LazyImage/hooks/useImageLazyLoading';
import type { Property } from 'csstype';

export const LazyImage: FC<LazyImageProps> = props => {
  const {
    alt,
    imageUrl,
    objectFit,
    width,
    size,
    height,
    padding,
    margin,
    borderRadius,
  } = props;

  const [setHTMLImageElement] = useImageLazyLoading();

  return (
    <img
      alt={alt}
      srcSet={imageUrl}
      ref={setHTMLImageElement}
      style={{
        objectFit,
        width: size ?? width,
        height: size ?? height,
        padding,
        margin,
        borderRadius,
      }}
    ></img>
  );
};

type LazyImageProps = {
  imageUrl: string;
  alt?: string;
  objectFit?: Property.ObjectFit;
  padding?: string;
  margin?: string;
  borderRadius?: string;
} & (
  | {
      width: number;
      height: number;
      size?: number;
    }
  | {
      width?: number;
      height?: number;
      size: number;
    }
);
