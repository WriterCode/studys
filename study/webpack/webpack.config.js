var path = require('path');
var glob = require('glob');
var uglify = require('uglifyjs-webpack-plugin') // 代码压缩

// entrys里有多少就创建多少
function entrys(globPath) {
    var _obj = {};
    var files = glob.sync(globPath);
    for (var i = 0; i < files.length; i++) {
        var file_name = path.basename(files[i].replace('.js', ''));
        _obj['build-' + file_name] = './' + files[i];
    }
    return _obj;
}
module.exports = {
    entry: entrys('./app/entrys/*.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build/js'),
        publicPath: "/build/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
            ]
        }, {
            test: /\.scss$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' }
            ]
        }]
    },
    resolve: {
        extensions: ['.js', '.css', '.scss']
    },
    plugins: [
        new uglify()
    ]
}