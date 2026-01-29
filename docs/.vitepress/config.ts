import { defineConfig } from 'vitepress';
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(defineConfig({
    title: 'JSSC',
    description: 'Open-source, self-validating, lossless string compression algorithm designed specifically for JavaScript',
    themeConfig: {
        nav: [
            { text: 'Demo', link: 'https://jssc.js.org/', target: '_self' },
            { text: 'Docs', link: '/' }
        ],
        sidebar: [
            {
            text: 'Under the Hood',
            collapsed: true,
            items: [
                    { text: 'Header Character', link: '/internals/header' },
                    {
                        text: 'Compression Modes',
                        link: '/internals/modes/',
                        collapsed: true,
                        items: [
                            { text: 'Two-Digit CharCode Concatenation', link: '/internals/modes/01' },
                            { text: 'Two-Byte CharCode Concatenation', link: '/internals/modes/02' },
                            { text: 'Decimal Integer Packing', link: '/internals/modes/03' },
                            { text: 'Alphabet Encoding', link: '/internals/modes/04' },
                            { text: 'Character Encoding', link: '/internals/modes/05' },
                            { text: 'Inline Integer Encoding', link: '/internals/modes/06' },
                        ]
                    },
                    {
                        text: 'Character Encodings',
                        link: '/internals/encodings/',
                        collapsed: true,
                        items: [
                            { text: 'JSSCBASE', link: '/internals/encodings/base' },
                            { text: 'JSSCRU', link: '/internals/encodings/ru' },
                            { text: 'JSSCENRU', link: '/internals/encodings/enru' },
                            { text: 'JSSCENKK', link: '/internals/encodings/enkk' },
                            { text: 'JSSCHI', link: '/internals/encodings/hi' },
                            { text: 'JSSCENHI', link: '/internals/encodings/enhi' },
                            { text: 'JSSCBN', link: '/internals/encodings/bn' },
                            { text: 'JSSCENBN', link: '/internals/encodings/enbn' },
                            { text: 'JSSCHIBN', link: '/internals/encodings/hibn' },
                            { text: 'JSSCJA', link: '/internals/encodings/ja' },
                            { text: 'JSSCTelu', link: '/internals/encodings/telu' },
                            { text: 'JSSCMR', link: '/internals/encodings/mr' },
                            { text: 'JSSCB', link: '/internals/encodings/b' },
                            { text: 'JSSCE', link: '/internals/encodings/e' },
                            { text: 'JSSCAR', link: '/internals/encodings/ar' },
                        ]
                    }
                ]
            }
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
                        },
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
            themeConfig: {
                outline: {
                    label: 'Содержание страницы'
                },
                lastUpdated: {
                    text: 'Обновлено'
                },
                nav: [
                    { text: 'Демонстрация', link: 'https://jssc.js.org/', target: '_self' },
                    { text: 'Документация', link: '/' }
                ]
            }
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

        ['meta',{name: 'theme-color', content: '#efd5ff'}]
    ],
    lastUpdated: true,
    markdown: {
        codeTransformers: [
            transformerTwoslash()
        ],
    },
    mermaid: {
        themeVariables: {
            fontFamily: "'Source Code Pro', monospace",
        },
        flowchart: {
            wrappingWidth: 1000,
        },
    },
    cleanUrls: true
}));
