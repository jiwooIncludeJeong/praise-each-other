import type { FC } from 'react';
import React, { useRef } from 'react';
import { Layout } from '@components/design-system';
import { withConstants } from 'src/utils';

/**
 * mobile => onTouchMove
 * web => onDrag
 * @param props
 * @constructor
 */
const Header: FC<HeaderProps> = props => {
  const { setDraggingY, setDragging, closeY } = props;

  const y = useRef<number>(0);

  const onDragStart: React.DragEventHandler<HTMLDivElement> = e => {
    setDragging(true);
    y.current = e.screenY;
  };

  const onDrag: React.DragEventHandler<HTMLDivElement> = e => {
    const moveY = -(y.current - e.screenY);
    setDraggingY(Math.max(moveY, 0));
    setDragging(closeY > moveY);
  };

  const onDragEnd: React.DragEventHandler<HTMLDivElement> = e => {
    setDragging(false);
    y.current = 0;
    setDraggingY(0);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setDragging(true);
    y.current = e.touches[0]?.pageY || 0;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const moveY = -(y.current - e.touches[0]?.pageY || 0);
    setDraggingY(Math.max(moveY, 0));
    setDragging(closeY > moveY);
  };

  const onTouchEnd = () => {
    setDragging(false);
    y.current = 0;
    setDraggingY(0);
  };

  return (
    <Layout.Absolute
      width={'100%'}
      height={HEIGHT}
      borderRadius={'24px 24px 0 0'}
      bgColor={'WHITE'}
      top={-HEIGHT}
      alignItems={'center'}
      padding={'12px 0 0 0'}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrag={onDrag}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Layout.LayoutBase
        width={48}
        height={4}
        borderRadius={'8px'}
        bgColor={'BLACK'}
      ></Layout.LayoutBase>
    </Layout.Absolute>
  );
};

type HeaderProps = {
  setDraggingY: (y: number) => void;
  setDragging: (dragging: boolean) => void;
  closeY: number;
};

const HEIGHT = 48;

export default withConstants(Header, { HEIGHT });
