import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Gamepad(props: any) {
  const width = props?.width || 28;
  const color = props?.fill || '#000';

  return (
    <Svg
      viewBox="0 4 32 32"
      xmlSpace="preserve"
      width={width}
      height={width}
      {...props}>
      <Path
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M23 15c-1.2 0-2.4.4-3.3 1h-7.4c-.9-.6-2.1-1-3.3-1-3.3 0-6 2.7-6 6s2.7 6 6 6c1.2 0 2.4-.4 3.3-1h7.4c.9.6 2.1 1 3.3 1 3.3 0 6-2.7 6-6s-2.7-6-6-6z"
      />
      <Path
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M9 19v4M7 21h4M23 19h0M21 21h0M25 21h0M23 23h0"
      />
    </Svg>
  );
}

export default Gamepad;
