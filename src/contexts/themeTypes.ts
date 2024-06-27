import { TextStyle } from 'react-native';

export type MainColors = {
  black: string;
  white: string;
  white10: string;
  dark: string;
  red: string;
  redDark: string;
};

export type MainTypos = {
  body: TextStyle;
  title1: TextStyle;
  title2: TextStyle;
};

export type Theme = {
  colors: MainColors;
  typo: MainTypos;
};
