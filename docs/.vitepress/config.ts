import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'JSSC',
    description: 'Open-source, self-validating, lossless string compression algorithm designed specifically for JavaScript',
    themeConfig: {
        nav: [
            { text: 'Home', link: 'https://jssc.js.org/', target: '_self' },
            { text: 'Docs', link: '/' }
        ],
    },
    base: '/docs/',
    locales: {
        root: {
            label: 'English',
            lang: 'en'
        },
        ru: {
            label: 'Russian',
            lang: 'ru',
            link: '/ru/',
            description: 'Алгоритм сжатия JavaScript-строк без потерь с открытым исходным кодом.',
        }
    }
});
