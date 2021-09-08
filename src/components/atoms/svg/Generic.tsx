import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Generic(props: any) {
  const width = props?.width || 22;
  const color = props?.fill || '#FFF';
  return (
    <Svg width={width} height={width} viewBox="0 0 20 20" {...props}>
      <Path
        d="M18 7V4.621a.5.5 0 00-.854-.353L11.414 10l5.732 5.732a.5.5 0 00.854-.353V13a1 1 0 012 0v5a2 2 0 01-2 2h-5a1 1 0 010-2h2.379a.5.5 0 00.353-.854L10 11.414l-5.732 5.732a.5.5 0 00.353.854H7a1 1 0 010 2H2a2 2 0 01-2-2v-5a1 1 0 012 0v2.379a.5.5 0 00.854.353L8.586 10 2.854 4.268A.5.5 0 002 4.621V7a1 1 0 01-2 0V2a2 2 0 012-2h5a1 1 0 010 2H4.621a.5.5 0 00-.353.854L10 8.586l5.732-5.732A.5.5 0 0015.379 2H13a1 1 0 010-2h5a2 2 0 012 2v5a1 1 0 01-2 0"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default Generic;