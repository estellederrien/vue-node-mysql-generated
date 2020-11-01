const webpack = require("webpack");
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:3000", // This is set for xmysql routes generator https://github.com/o1lab/xmysql
                // ,pathRewrite: {'^/api' : ''}
            },
            "/": {
                target: "http://localhost:80", // Serving the vue.js app
            },
            "/generic-api": {
                target: "http://localhost:80", // When using generic-crud.js 
            }
        },
        hot: true,
        liveReload: true,
    },
    // THIS CODE FETCH THE APPLICATION VERSION, FROM PACKAGE.JSON. IT IS THEN AVAILABLE THROUGH THE WHOLE VUE.JS APP
    configureWebpack: (config) => {
        return {
            plugins: [
                new webpack.DefinePlugin({
                    APPLICATION_VERSION: JSON.stringify(require("./package.json").version),
                }),
            ],
        };
    },
};