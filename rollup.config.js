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
        nodeResolve({
            main: true,
            jsnext: true,
        }),
        commonjs(),
        babel({
            babelrc: false,
            presets: [
                ['es2015', { modules: false }]
            ],
            plugins: [
                'external-helpers'
            ],
            exclude: 'node_modules/**'
        }),
    ],
    targets: [
        {
            dest: 'dist/prod.js',
            format: 'iife',
            moduleName: 'threetest',
        }
    ]
};
