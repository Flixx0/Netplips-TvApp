import { ThemeProvider } from '@contexts/ThemeContext';
import { theme } from '@contexts/themeValues';
import { MainStackNavigator } from '@navigators/MainStackNavigator';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const App = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.dark,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <ThemeProvider>
        <MainStackNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
