import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './MainHeaderTop.styles';
import ButtonWithIcon from '../../atoms/button-with-icon';
import {colors} from '../../../style';

interface MainHeaderTopProps {
  color: string;
}

const MainHeaderTop = memo<MainHeaderTopProps>(({color}) => {
  return (
    <View style={styles.topHeader}>
      <Text
        style={[
          styles.textLogo,
          {
            color: colors.whiteSmoke,
          },
        ]}>
        thinkerest
      </Text>
      <View style={styles.topButtonsContainer}>
        <ButtonWithIcon
          iconName={'airplane'}
          iconColor={colors.whiteSmoke}
          onPress={() => console.log('go to message')}
          noBackgroundColor
        />
        <ButtonWithIcon
          iconName={'hamburger'}
          iconColor={colors.whiteSmoke}
          onPress={() => console.log('open menu')}
          noBackgroundColor
        />
      </View>
    </View>
  );
});
export default MainHeaderTop;
