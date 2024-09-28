/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
    important: true,
    content  : [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(({ addComponents }) => {
            addComponents({
                '.text-h1': {
                    fontSize  : '2.25rem !important',
                    fontWeight: '600 !important',
                    lineHeight: '2.75rem !important',
                },
                '.text-h2': {
                    fontSize  : '1.875rem !important',
                    fontWeight: '500 !important',
                    lineHeight: '2.25rem !important',
                },
                '.text-h3': {
                    fontSize  : '1.5rem !important',
                    fontWeight: '500 !important',
                    lineHeight: '2rem !important',
                },
                '.text-h4': {
                    fontSize  : '1.25rem !important',
                    fontWeight: '500 !important',
                    lineHeight: '1.6rem !important',
                },
                '.text-h5': {
                    fontSize  : '1.125rem !important',
                    fontWeight: '500 !important',
                    lineHeight: '1.6rem !important',
                },
                '.text-h6': {
                    fontSize  : '1rem !important',
                    fontWeight: '500 !important',
                    lineHeight: '1.2rem !important',
                },
                '.text-subtitle-1': {
                    fontSize  : '0.875rem !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.1rem !important',
                },
                '.text-subtitle-2': {
                    fontSize  : '0.75rem !important',
                    fontWeight: '400 !important',
                    lineHeight: '1rem !important',
                },
                '.text-body-1': {
                    fontSize  : '0.875rem !important',
                    fontWeight: '400 !important',
                },
                '.text-body-2': {
                    fontSize  : '0.75rem !important',
                    fontWeight: '400 !important',
                },
                '.text-button': {
                    fontSize     : '0.875rem !important',
                    fontWeight   : '500 !important',
                    textTransform: 'capitalize !important',
                },
                '.text-caption': {
                    fontSize  : '0.75rem !important',
                    fontWeight: '400 !important',
                },
                '.text-overline': {
                    fontSize     : '0.75rem !important',
                    fontWeight   : '500 !important',
                    textTransform: 'uppercase !important',
                },
            });
        }),
    ],
};
