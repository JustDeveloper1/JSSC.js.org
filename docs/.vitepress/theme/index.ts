import DefaultTheme from 'vitepress/theme-without-fonts';
import type { Theme } from 'vitepress';

import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'

import './style.css';
import './fonts.css';

import CharTable from '../components/CharTable.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue);
    app.component('CharTable', CharTable);
  }
} satisfies Theme;
