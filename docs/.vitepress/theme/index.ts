import DefaultTheme from 'vitepress/theme-without-fonts';
import type { Theme } from 'vitepress';

import './style.css';
import './fonts.css';

const theme: Theme = {
  ...DefaultTheme,
};

export default theme;
