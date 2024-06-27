import { Text } from '@components/Text';
import { MainTypos } from '@contexts/themeTypes';
import { FC } from 'react';
import { Pressable } from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
  textVariant?: keyof MainTypos;
  variant?: 'blank';
};

export const Button: FC<Props> = ({ text, textVariant, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text variant={textVariant}>{text}</Text>
    </Pressable>
  );
};
