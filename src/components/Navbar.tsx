import { Button } from '@components/Button';
import { Image } from '@components/Image';
import { LOGO } from '@constants/images';
import { useMainNavigation } from '@navigators/useNavigation';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

export const NavBar = () => {
  const navigation = useMainNavigation();

  const handlePressHome = useCallback(() => {
    navigation.navigate('Home');
  }, []);

  const handlePressMovies = useCallback(() => {
    navigation.navigate('Movies');
  }, []);

  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.image} />
      <Button textVariant="title2" text="Accueil" onPress={handlePressHome} />
      <Button textVariant="title2" text="Films" onPress={handlePressMovies} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  image: {
    width: 100,
    height: 50,
  },
});
