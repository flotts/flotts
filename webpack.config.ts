import * as path from "path"
import * as webpack from "webpack"
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server"

const config: webpack.Configuration = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}

export default config
