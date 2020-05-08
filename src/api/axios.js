import axios from 'axios'
// @/这是webpack设置的路径别名,就是说@代表着到src文件夹的路径，@之后的内容是自src文件夹到被引入文件的路径
import config from '@/config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    //定死的配置可以写在此处
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            header: {
                // 请求头设置
            }
        }
        return config
    }
    interceptors(instance, url) {
        // 拦截请求
        instance.interceptors.request.use((config) => {
            // 处理config
            console.log("拦截和处理请求")
            console.log(config)
            // 返回修改后的config
            return config
        })
        // 拦截响应
        instance.interceptors.response.use((res) => {
            // 处理响应
            console.log("拦截和处理响应")
            console.log(res)

            // 返回处理过的响应
            return res.data
        }, (err) => {
            // 请求出问题，处理问题
            console.log(err)
            return { err: "网络出错了" }
        })
    }

    // 用于请求的方法
    request(options) {
        const instance = axios.create() // 创造 axios 实例对象
        // 合并this.getInsideConfig()和options中的配置内容，对于两者重复的配置项，后者会覆盖前者
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

const axiosObj = new HttpRequest(baseUrl)

export default axiosObj