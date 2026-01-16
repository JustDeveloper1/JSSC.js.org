import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'JSSC — JavaScript String Compressor',
    description: 'Open-source, self-validating, lossless string compression algorithm designed specifically for JavaScript',
    themeConfig: {
        nav: [
            { text: 'Home', link: 'https://jssc.js.org/' },
            { text: 'Guide', link: '/guide/usage' }
        ]
    },
    base: '/docs/'
});
