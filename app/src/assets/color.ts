export const COLOR = {
  BLACK: '#1A141F',
  WHITE: '#FFFFFF',
  RED: '#ff0000',
} as const;

export type ColorKeys = keyof typeof COLOR;
