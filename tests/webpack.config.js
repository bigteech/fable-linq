var path = require("path");
var fs = require("fs");

function resolve(filePath) {
    return path.resolve(__dirname, filePath);
}

module.exports = {
    entry: resolve("./Fable.linq.Tests.fsproj"),
    output: {
        filename: "tests.bundle.js",
        path: resolve("./bin")
    },
    mode: "development",
    target: "node",
    module: {
        rules: [
            {
                test: /\.fs(x|proj)?$/,
                use: {
                    loader: "fable-loader"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!fable)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
