import React, {ReactChild, ReactFragment, ReactPortal} from 'react';
import {View} from 'react-native';
import {
  Book,
  Cloud,
  Gamepad,
  Generic,
  Movie,
  People,
  Share,
  Television,
  World,
} from '../svg';
import styles from './IconsSvg.style';

export interface IconsSvgProps {
  iconName?: string | null;
  SvgElement?: (props: any) => any | ReactChild | ReactFragment | ReactPortal;
  style?: any;
  color?: string | symbol;
  width?: number;
}

const IconSvg = ({
  iconName,
  SvgElement,
  style,
  color,
  width,
  ...props
}: IconsSvgProps) => {
  const renderImage = () => {
    if (SvgElement) {
      return (
        <View style={styles.svgIcon}>
          <SvgElement
            style={[styles.svgStyle, style]}
            color={color}
            width="100%"
            height="100%"
            {...props}
          />
        </View>
      );
    } else {
      if (iconName) {
        const iconList = {
          //ADD ALL SVG HERE WITH CUSTOM KEY TO CALL
          share: (
            <Share width={width || 35} height={width || 35} fill={color} />
          ),
          cloud: (
            <Cloud width={width || 35} height={width || 35} fill={color} />
          ),
          world: (
            <World width={width || 35} height={width || 35} fill={color} />
          ),
          people: (
            <People width={width || 35} height={width || 35} fill={color} />
          ),
          movies: <Movie fill={color} />,
          books: <Book fill={color} />,
          tvSeries: <Television fill={color} />,
          games: <Gamepad fill={color} />,
          general: <Generic fill={color} />,
        };
        //@ts-ignore
        const Icon = iconList[iconName] as React.ReactNode;

        return (
          <View style={[style, styles.svgStyle]} {...props}>
            {Icon}
          </View>
        );
      }
    }
  };
  return <View>{renderImage()}</View>;
};

export default IconSvg;
