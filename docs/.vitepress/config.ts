import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'JSSC',
    description: 'Open-source, self-validating, lossless string compression algorithm designed specifically for JavaScript',
    themeConfig: {
        nav: [
            { text: 'Home', link: 'https://jssc.js.org/', target: '_self' },
            { text: 'Docs', link: '/' }
        ],
        search: {
            provider: 'local',
            options: {
                locales: {
                    ru: {
                        translations: {
                            button: {
                                buttonText: 'Поиск',
                                buttonAriaLabel: 'Поиск',
                            },
                            modal: {
                                backButtonTitle: 'Закрыть',
                                displayDetails: 'Подробнее',
                                resetButtonTitle: 'Очистить',
                                noResultsText: 'Ничего не найдено.',
                                footer: {
                                    selectText: 'выбрать',
                                    selectKeyAriaLabel: 'Клавиша Enter',
                                    navigateText: 'перейти',
                                    navigateUpKeyAriaLabel: 'Стрелка вверх',
                                    navigateDownKeyAriaLabel: 'Стрелка вниз',
                                    closeText: 'закрыть',
                                    closeKeyAriaLabel: 'Клавиша Esc'
                                }
                            }
                        }
                    }
                }
            }
        }
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
    },
    head: [
        ['link',{rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
        ['link',{rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin:''}],
        ['link',{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@100..900&family=Rubik+Mono+One&family=Rubik:ital,wght@0,300..900;1,300..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap'}],

        ['link',{rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
        ['link',{rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
        ['link',{rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
        ['link',{rel: 'manifest', href: '/site.webmanifest'}],
    ],
    lastUpdated: true,
});
