const webpack = require("webpack");
module.exports = {
    devServer: { // Theses params only works when using developping vue.js on port localhost:8080 
        proxy: {
            "/api": { // USING CLASSICAL SEQUELIZE GENERATED ROUTES
                target: "http://localhost:80",
            },
            "/xmysql/api": { // USING XMYSQL GENERATED ROUTES
                target: "http://localhost:3000",
                pathRewrite: { '^/api': '/api' }
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