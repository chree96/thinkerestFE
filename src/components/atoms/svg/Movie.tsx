import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Movie(props: any) {
  const width = props?.width || 28;
  const color = props?.fill || '#000';

  return (
    <Svg
      id="prefix__Icons"
      width={width}
      height={width}
      x={0}
      y={0}
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}>
      <Path
        d="M27 31H5c-1.1 0-2-.9-2-2V16h26v13c0 1.1-.9 2-2 2zM23.5 1.1L2.8 8.7c-1 .4-1.6 1.5-1.2 2.6L3 15l24.4-8.9L26 2.3c-.3-1-1.5-1.5-2.5-1.2zM3 21h26"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default Movie;
