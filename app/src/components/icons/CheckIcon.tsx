import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20.285 2 9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z" />
  </svg>
);
export default SvgCheckIcon;
