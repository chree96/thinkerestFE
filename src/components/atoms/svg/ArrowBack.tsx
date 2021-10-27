import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowBack(props: any) {
  const width = props?.width || 18;
  const color = props?.fill || '#FFF';

  return (
    <Svg width={width} height={width} viewBox="0 0 32 32" {...props}>
      <Path
        clipRule="evenodd"
        d="M31.106 15H3.278l8.325-8.293a.999.999 0 10-1.414-1.414l-9.9 9.899a1.01 1.01 0 000 1.414l9.9 9.9a.999.999 0 101.414-1.414L3.278 17h27.828a1 1 0 000-2z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default ArrowBack;
