module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "src/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                    use: ['style-loader','css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [require('autoprefixer')]
                }}]
            },
            {
                test: /\.svg$/,
                loader: 'svg-loader'
            }

        ]
    }
}
