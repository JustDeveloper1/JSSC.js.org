import { defineConfig } from 'vitepress';
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';
import { withMermaid } from "vitepress-plugin-mermaid";

function encodings(lang? : string) : {}[] {
    const prefix = (lang ? '/' + lang : '') + '/internals/encodings/';
    return [
        { text: 'JSSCBASE', link: prefix + 'base' },
        { text: 'JSSCRU', link: prefix + 'ru' },
        { text: 'JSSCENRU', link: prefix + 'enru' },
        { text: 'JSSCENKK', link: prefix + 'enkk' },
        { text: 'JSSCHI', link: prefix + 'hi' },
        { text: 'JSSCENHI', link: prefix + 'enhi' },
        { text: 'JSSCBN', link: prefix + 'bn' },
        { text: 'JSSCENBN', link: prefix + 'enbn' },
        { text: 'JSSCHIBN', link: prefix + 'hibn' },
        { text: 'JSSCJA', link: prefix + 'ja' },
        { text: 'JSSCTelu', link: prefix + 'telu' },
        { text: 'JSSCMR', link: prefix + 'mr' },
        { text: 'JSSCB', link: prefix + 'b' },
        { text: 'JSSCE', link: prefix + 'e' },
        { text: 'JSSCAR', link: prefix + 'ar' },
    ]
}

export default withMermaid(defineConfig({
    title: 'JSSC',
    description: 'Open-source, self-validating, lossless string compression algorithm designed specifically for JavaScript',
    themeConfig: {
        nav: [
            { text: 'Demo', link: 'https://jssc.js.org/', target: '_self' }
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
                            { text: 'Frequency Map', link: '/internals/modes/07' },
                            { text: 'URL', link: '/internals/modes/08' },
                        ]
                    },
                    {
                        text: 'Character Encodings',
                        link: '/internals/encodings/',
                        collapsed: true,
                        items: encodings()
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
        },
        logoLink: {
            link: 'https://jssc.js.org/',
            target: '_self'
        }
    },
    base: '/docs/',
    locales: {
        root: {
            label: 'English',
            lang: 'en'
        },
        ru: {
            label: 'Русский',
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
                    { text: 'Демонстрация', link: 'https://jssc.js.org/', target: '_self' }
                ],
                sidebar: [
                    {
                        text: 'Под капотом',
                        collapsed: true,
                        items: [
                            { text: 'Заголовочный Символ', link: '/ru/internals/header' },
                            {
                                text: 'Режимы Сжатия',
                                link: '/ru/internals/modes/',
                                collapsed: true,
                                items: [
                                    { text: 'Two-Digit CharCode Concatenation', link: '/ru/internals/modes/01' },
                                    { text: 'Two-Byte CharCode Concatenation', link: '/ru/internals/modes/02' },
                                    { text: 'Decimal Integer Packing', link: '/ru/internals/modes/03' },
                                    { text: 'Alphabet Encoding', link: '/ru/internals/modes/04' },
                                    { text: 'Character Encoding', link: '/ru/internals/modes/05' },
                                    { text: 'Inline Integer Encoding', link: '/ru/internals/modes/06' },
                                    { text: 'Frequency Map', link: '/ru/internals/modes/07' },
                                ]
                            },
                            {
                                text: 'Кодировки Символов',
                                link: '/ru/internals/encodings/',
                                collapsed: true,
                                items: encodings('ru')
                            }
                        ]
                    }
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
