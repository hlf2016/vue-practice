module.exports = {
    devServer: {
        proxy: {
            // 只有包含 /api 的网址才进行代理
            '/api': {
                // 被代理请求的目标服务器地址
                target: 'http://localhost:3000',
                // 因为实际目标服务器网址中不含 /api 所以将其进行重写，用空格替换，相当于去除其中的 /api
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}