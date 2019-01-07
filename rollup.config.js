import buble from 'rollup-plugin-buble';
import alias from 'rollup-plugin-alias';
import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

const isProd = process.env.NODE_ENV === 'production';
const packages = require('./package.json');
const getFilePath = (type = '') => `dist/${packages.name}${type == '' ? '' : '.'}${type}.js`;
const output = options => ({
    name: packages.name,
    sourcemap: true,
    ...options,
});

const configure = {
    input: 'src/index.js',
    output: [output({
        file: getFilePath(),
        format: 'umd',
    }), output({
        file: getFilePath('es'),
        format: 'umd',
    })],
    plugins: [
        alias({
            common: './common',
        }),
        buble(),
        resolve(),
    ],
    external: [],
};

if (isProd) {
    configure.output.file = `dist/${packages.name}.min.js`;
    configure.plugins.push(minify());
}

module.exports = configure;
