import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Airplane(props: any) {
  const width = props?.width || 35;
  const color = props?.fill || '#000';

  return (
    <Svg width={width} height={width} viewBox="0 0 64 64" {...props}>
      <Path
        fill={color}
        d="M58.179 10.205L5.127 30.816l15.484 8.89.458 11.686c.033.85.826 1.466 1.658 1.287l14.911-3.198 7.576 4.348 13.636-43a.51.51 0 00-.671-.624zM46.813 23.194L23.394 49.183l-.297-9.638 23.435-16.549c.225-.163.412.052.281.198z"
      />
    </Svg>
  );
}

export default Airplane;
