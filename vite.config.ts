import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        minify: 'terser',
        terserOptions: {
            sourceMap: false,
            compress: true,
            mangle: {
                eval: false
            },
            format: {
                comments: false,
                ascii_only: true,
                wrap_func_args: false,
                inline_script: true
            }
        }
    }
});