import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript'

const { name } = require('./package.json')

export default [{
    input: `src/index.ts`,
    output: {
        // for TypeScript build
        format: `esm`,
        file: `dist/${name}.es.js`
    },
    plugins: [
        typescript({
            tsconfig: false,
            experimentalDecorators: true,
            module: `es2015`,
        }),
        css({
            output: `dist/${name}.css`,
        }),
        vue({
            css: false,
        }),
    ],
}, {
    input: `src/index.ts`,
    output: {
        // for SSR build
        format: `cjs`,
        file: `dist/${name}.ssr.js`
    },
    plugins: [
        typescript({
            tsconfig: false,
            experimentalDecorators: true,
            module: `es2015`,
        }),
        css({
            output: `dist/${name}.css`,
        }),
        vue({
            css: false,
            template: { 
                optimizeSSR: true,
             },
        }),
    ],
}, {
    input: `src/index.js`,
    output: {
        // for Broswer build
        name: `Component`,
        format: `umd`,
        file: `dist/${name}.js`
    },
    plugins: [
        typescript({
            tsconfig: false,
            experimentalDecorators: true,
            module: `es2015`,
        }),
        css({
            output: `dist/${name}.css`,
        }),
        vue({
            css: false,
        }),
    ],
}]