import React from 'react';
import {Text, View} from 'react-native';
import ButtonWithIcon from '../../components/atoms/button-with-icon';
import {colors} from '../../style';

const getButtonActions = (isContentDetail?: boolean) => {
  const btnActions = [
    {icon: 'plus', action: 'log3'},
    {icon: 'cloud', action: 'log2'},
    {icon: 'share', action: 'log1'},
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
  } else {
    width = 26;
    iconSize = 24;
  }

  btnActions.map((item, key) => {
    let iconColor =
      item.icon === 'share' ? colors.lightGreen : colors.glassBlue;

    buttons.push(
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 4,
        }}>
        <ButtonWithIcon
          noBackgroundColor
          iconColor={colors.doveGrey}
          iconName={item.icon}
          width={width}
          iconSize={iconSize}
          style={style}
          onPress={() => console.log(item.action)}
          key={key}
        />
        {item.icon === 'cloud' ? (
          <Text style={{color: colors.doveGrey}}>4</Text>
        ) : null}
      </View>,
    );
  });
  return buttons;
};

export default getButtonActions;
