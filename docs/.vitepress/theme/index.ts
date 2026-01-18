import DefaultTheme from 'vitepress/theme-without-fonts';
import type { Theme } from 'vitepress';

import './style.css';
import './fonts.css';

import CharTable from '../components/CharTable.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CharTable', CharTable)
  }
} satisfies Theme;
