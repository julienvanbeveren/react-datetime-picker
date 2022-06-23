import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'
import jsx from 'acorn-jsx'
import svg from 'rollup-plugin-svg'

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs'
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named'
            }
        ],
        acornInjectPlugins: [jsx()],
        plugins: [
            typescript(),
            postcss({
                plugins: [],
                minimize: true
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
            terser(),
            svg()
        ]
    }
]
