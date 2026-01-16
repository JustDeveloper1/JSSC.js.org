import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'JSSC',
    description: 'JavaScript String Compressor',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/usage' }
        ]
    },
    base: '/docs/'
});
