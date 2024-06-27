import React, { createContext, useContext } from 'react';
import { StatusBar, View } from 'react-native';

import { theme } from '@contexts/themeValues';
import { Theme } from '@contexts/themeTypes';
import { ReactNode } from 'react';
import { FC } from 'react';

const flexStyle = {
  flex: 1,
};

const ThemeContext = createContext<Theme>({} as Theme);

type Props = {
  children: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  //   useFonts({
  //     NetflixFont: require('@font/circular-std-medium-500'),
  //   });

  return (
    <View style={flexStyle}>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </View>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
