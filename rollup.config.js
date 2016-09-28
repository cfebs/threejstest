/* eslint-env node */
//import bundleSize from 'rollup-plugin-bundle-size';
//import sourcemaps from 'rollup-plugin-sourcemaps';
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
//const inject = require('rollup-plugin-inject');


export default {
    entry: 'src/app.js',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        commonjs(),
        nodeResolve({
            jsnext: true
        })
    ],
    targets: [
        {
            dest: 'dist/es.js',
            format: 'es',
            exports: 'named',
            sourceMap: true
        }
    ]
};

