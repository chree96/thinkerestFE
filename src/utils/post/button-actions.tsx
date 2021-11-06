import React from 'react';
import ButtonWithIcon from '../../components/atoms/button-with-icon';
import {colors} from '../../style';

const getButtonActions = (isContentDetail?: boolean) => {
  const btnActions = [
    {icon: 'share', action: 'log1'},
    {icon: 'cloud', action: 'log2'},
  ];
  let buttons: any[] = [];
  let width;
  let iconSize;
  let style;

  if (isContentDetail) {
    width = 26;
    iconSize = 18;
    style = {
      alignSelf: 'flex-end',
      backgroundColor: colors.mineShaft,
    };
  }

  btnActions.map((item, key) => {
    let iconColor =
      item.icon === 'share' ? colors.lightGreen : colors.glassBlue;

    buttons.push(
      <ButtonWithIcon
        iconColor={iconColor}
        iconName={item.icon}
        width={width}
        iconSize={iconSize}
        style={style}
        onPress={() => console.log(item.action)}
        key={key}
      />,
    );
  });
  return buttons;
};

export default getButtonActions;
