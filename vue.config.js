module.exports = {
    devServer: {
        proxy: {
            //配置跨域
            '/api': {
                target: "http://todo.im",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}
