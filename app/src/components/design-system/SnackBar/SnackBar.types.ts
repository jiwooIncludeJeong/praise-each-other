import type * as Icons from '@components/icons';

export type SnackBarParams = {
  type: 'SNACK_BAR';
  title?: string;
  duration?: number;
  position?: 'top';
  iconName?: keyof typeof Icons;
  onPress?: () => void;
};

export type SNACK_BAR_STATUS =
  // 스낵바 노출을 하지 않은 상태
  | 'NOT_VISIBLE'
  // 스낵바 show 호출 직후, opacity 0 => 1 이 되고 있는 중이거나, translateY 애니메이션이 진행되는 상태
  | 'APPEARING'
  // 스낵바가 완전히 노출되고, duration 만큼 기다리고 있는 상태
  | 'VISIBLE'
  // duration이 지나고 다시 비노출로 돌아가고 있는 상태
  | 'DISAPPEARING';
