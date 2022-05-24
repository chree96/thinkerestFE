import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Movie(props: any) {
  const width = props?.width || 28;
  const color = props?.fill || '#000';

  return (
    <Svg
      width={width}
      height={width}
      fill={color}
      viewBox="0 0 512 512"
      {...props}>
      <Path d="M326.1 160 453.5 32.6c-1.8-.21-3.6-.6-5.5-.6h-86.06l-128 128h92.16zm-160 0 128-128h-92.2l-128 128h92.2zM497.7 56.19 393.9 160H512V96c0-15.13-5.5-28.85-14.3-39.81zM134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0v224z" />
    </Svg>
  );
}

export default Movie;
