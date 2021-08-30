import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';

function Movie(props: SvgProps) {
  const width = props?.width || 35;
  const color = props?.fill || '#000';
  return (
    <Svg height={width} viewBox="0 0 48 48" width={width} {...props}>
      <G fill={color}>
        <Path d="M36 8l4 8h-6l-4-8h-4l4 8h-6l-4-8h-4l4 8h-6l-4-8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V8h-8z" />
        <Path d="M0 0h48v48H0z" fill="none" />
      </G>
    </Svg>
  );
}

export default Movie;