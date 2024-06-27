import { Text } from '@components/Text';
import { useTheme } from '@contexts/ThemeContext';
import { MainTypos } from '@contexts/themeTypes';
import { FC, useCallback, useState } from 'react';
import { Pressable } from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
  textVariant?: keyof MainTypos;
  variant?: 'blank';
};

export const Button: FC<Props> = ({ text, textVariant, onPress }) => {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <Pressable
      onPress={onPress}
      isTVSelectable
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{
        borderWidth: 2,
        borderRadius: 4,
        paddingHorizontal: 4,
        borderColor: focused ? theme.colors.white10 : theme.colors.dark,
      }}
    >
      <Text variant={textVariant}>{text}</Text>
    </Pressable>
  );
};
