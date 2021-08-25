// import React from 'react';
// import Svg, {Circle, G, Path} from 'react-native-svg';
// import {Cloud, Share} from '../svg';

// // Each nameValuePair can be:
// // * Name: <Svg />; or
// // * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

// // function prova() {
// export default {
//   SortArrows: (
//     <G>
//       <Path d="M0 45h90L45 0 0 45z" />
//       <Path d="M0 55h90l-45 45L0 55z" />
//     </G>
//   ),
//   Tick: {
//     svg: (
//       <Path d="M38.729 75.688a4.48 4.48 0 0 1-3.21-1.356L16.558 55.004c-1.774-1.807-1.774-4.736-.001-6.543a4.48 4.48 0 0 1 6.42 0l15.753 16.056 37.749-38.474a4.478 4.478 0 0 1 6.419 0c1.773 1.806 1.773 4.736 0 6.543L41.939 74.332a4.48 4.48 0 0 1-3.21 1.356z" />
//     ),
//     viewBox: '0 0 50 50',
//   },
//   testIcon: {
//     svg: (
//       <Svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round">
//         <G>
//           <Circle cx={12} cy={12} r={10} />
//           <Path d="M12 6v6l4 2" />
//         </G>
//       </Svg>
//     ),
//   },
//   share: {
//     svg: <Share />,
//     // svg: <Share color={'#000'} />,
//   },
//   cloud: {
//     svg: <Cloud color={'#000'} />,
//   },
// };

// import React, {ReactChild, ReactFragment, ReactPortal, ReactNode} from 'react';
// import {Text, TextProps, TextStyle, StyleProp, View} from 'react-native';
// import {Share} from '../svg';
// import styles from './IconsCollection.style';

// export interface IconsCollectionProps {
//   iconName?: string | null;
//   svgName?: ReactNode | ReactChild | ReactFragment | ReactPortal | null;
//   SvgElement?: (props: any) => any | ReactChild | ReactFragment | ReactPortal;
//   style?: any;
//   color?: string | symbol;
//   width?: number;
//   opacity?: number;
// }

// const IconsCollection = ({
//   iconName,
//   svgName,
//   SvgElement,
//   style,
//   color,
//   width,
//   opacity = 1,
//   ...props
// }: IconsCollectionProps) => {
//   const renderImage = () => {
//     if (SvgElement) {
//       return (
//         <View style={styles.svgIcon}>
//           <SvgElement
//             style={[styles.svgStyle, style]}
//             color={color}
//             width="100%"
//             height="100%"
//             {...props}
//           />
//         </View>
//       );
//     } else {
//       if (iconName) {
//         const iconList = {
//           //ADD ALL SVG HERE WITH CUSTOM KEY TO CALL
//           share: <Share width={35} height={35} fill={color} />,
//         };
//         //@ts-ignore
//         const Icon = iconList[iconName] as React.ReactNode;

//         return (
//           <View style={[style, styles.svgStyle]} {...props}>
//             {Icon}
//           </View>
//         );
//       }
//     }
//   };
//   return <View>{renderImage()}</View>;
// };

// export default IconsCollection;
