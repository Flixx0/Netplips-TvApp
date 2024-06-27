import { NavBar } from '@components/Navbar';
import { MainStackParamsList } from '@navigators/types';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@screens/HomeScreen';
import { MoviesScreen } from '@screens/MoviesScreen';

const Stack = createStackNavigator<MainStackParamsList>();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => <NavBar />,
        cardStyleInterpolator: ({ current }) => ({
          cardStyle: {
            opacity: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        }),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movies" component={MoviesScreen} />
    </Stack.Navigator>
  );
};
