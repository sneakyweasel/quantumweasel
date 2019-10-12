const path = require('path')

module.exports = {
    entry: "./src/app.ts",
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "inline-source-map",
    mode: "development"
};