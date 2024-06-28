import { getMovies } from '@queries/tmdb';
import { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export const MoviesScreen: FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  console.log(movies);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MOVIES</Text>
    </View>
  );
};
