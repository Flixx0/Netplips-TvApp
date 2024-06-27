import { FC } from 'react';
import { StyleProp } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import { ImageStyle } from 'react-native-fast-image';

import { ResizeMode } from 'react-native-fast-image';

type Props = {
  source: Source;
  style?: StyleProp<ImageStyle>;
  resize?: ResizeMode;
};

export const Image: FC<Props> = ({ source, resize, style }) => {
  return (
    <FastImage style={style} source={source} resizeMode={resize ?? FastImage.resizeMode.contain} />
  );
};
