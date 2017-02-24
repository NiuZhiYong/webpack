module.exports = {
    entry: './runoob1.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    }
};
