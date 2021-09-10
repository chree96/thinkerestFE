import React from 'react';
import ButtonWithIcon from '../../components/atoms/button-with-icon';
import {colors} from '../../style';

const getButtonActions = () => {
  const btnActions = [
    {icon: 'share', action: 'log1'},
    {icon: 'cloud', action: 'log2'},
  ];
  let buttons: any[] = [];
  btnActions.map((item, key) => {
    let iconColor =
      item.icon === 'share' ? colors.lightGreen : colors.glassBlue;
    buttons.push(
      <ButtonWithIcon
        iconColor={iconColor}
        iconName={item.icon}
        onPress={() => console.log(item.action)}
        key={key}
      />,
    );
  });
  return buttons;
};

export default getButtonActions;
