import { useTheme } from '@contexts/ThemeContext';
import { MainTypos } from '@contexts/themeTypes';
import { FC } from 'react';
import { Text as RNText, TextProps } from 'react-native';

type Props = {
  variant?: keyof MainTypos;
};

export const Text: FC<TextProps & Props> = ({ children, variant = 'body' }) => {
  const theme = useTheme();
  return <RNText style={theme.typo[variant]}>{children}</RNText>;
};
