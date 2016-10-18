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
        commonjs({
            // We can list all the things in this array, but it will bring the
            // entire file in and won’t tree-shake.
            namedExports: {
                'node_modules/three/build/three.js': ['PlaneBufferGeometry', 'PlaneGeometry', 'LatheGeometry', 'Scene']
            }
        }),
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
