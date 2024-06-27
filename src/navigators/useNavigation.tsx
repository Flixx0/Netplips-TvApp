import { MainStackParamsList } from '@navigators/types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const useMainNavigation = useNavigation<StackNavigationProp<MainStackParamsList>>;
