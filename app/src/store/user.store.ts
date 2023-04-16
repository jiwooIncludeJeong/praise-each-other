import { atom } from 'recoil';

export const isLogInAtom = atom<boolean>({
  key: 'isLogInAtom',
  default: false,
});
