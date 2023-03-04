import type { AsyncAbleVoidFn } from 'src/types';

export type PopUpParams = {
  type: 'POP_UP';
  title?: string;
  body: string;
  yesText?: string;
  noText?: string;
  onPressYes?: AsyncAbleVoidFn;
  onPressNo?: AsyncAbleVoidFn;
  disableBackPress?: boolean;
  closeOnOutsidePress?: boolean;
};
