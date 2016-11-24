module.exports = {
    entry: {
        main: './src/main.ts'
    },
    output: { filename: './dist/app.js' },
    resolve: {
        extensions: ['', '.ts', '.vue']
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.tsx?$/, loader: 'vue-ts-loader' }
        ],
    },
    vue: {
        loaders: { ts: 'vue-ts-loader' }
    },
    devtool: "#source-map"
}