import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'

const { name } = require('./package.json')

const plugins = [
    typescript({
        // tsconfig: false,
        experimentalDecorators: true,
        module: `es2015`,
    }),
    css({
        output: `${name}.css`,
    }),
]

const externals = ['vue']

export default [{
    input: `src/index.ts`,
    output: [{
        // for TypeScript build
        format: `esm`,
        file: `dist/${name}.es.js`
    }, {
        // for Broswer build
        name: `Component`,
        format: `umd`,
        file: `dist/${name}.js`,
        globals: {
            vue: `Vue`,
        },
    }],
    plugins: [
        ...plugins,
        vue({
            css: false,
        }),
    ],
    externals,
}, {
    input: `src/index.ts`,
    output: {
        // for SSR build
        format: `cjs`,
        file: `dist/${name}.ssr.js`
    },
    plugins: [
        ...plugins,
        vue({
            css: false,
            template: { 
                optimizeSSR: true,
             },
        }),
    ],
    externals,
}]