const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: 'development', // "production" | "development" | "none"

    entry: './src/index.ts',

    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    },

    target: "node",

    module: {
        rules: [{
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader'
        }]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        modules: [
            "node_modules", // node_modules 内も対象とする
        ],
        extensions: [
            '.ts',
            '.js' // node_modulesのライブラリ読み込みに必要
        ],
        plugins: [
            new TsconfigPathsPlugin({/* options: see below */})
        ]
    }
};