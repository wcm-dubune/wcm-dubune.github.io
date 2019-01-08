module.exports = {
    mode: 'development',
    entry: './src',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};