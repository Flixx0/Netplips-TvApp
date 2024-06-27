import { MainStackParamsList } from "@navigators/types";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@screens/Home";

const Stack = createStackNavigator<MainStackParamsList>();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
