import Mock from 'mockjs'
// 位置信息数据
import Position from '@/api/mockServerData/position'
// 首页入口数据
import Index from '@/api/mockServerData/index_entry'
// 餐馆信息
import Restaurants from '@/api/mockServerData/restaurants'

// 尽量保障模拟真实，配置请求延迟 1s
Mock.setup({
    timeout: 1000
})

// 严格一致写法
// 这里第一个参数路由 必须与你定义的严格一致 
// 如在 @/config/index.js 中定义的 'api' 在 @/api/data.js 中定义的请求地址是 user 那么此处必须写 api/user 
// 如果 @/config/index.js 中定义的 '/api' 或者 '/api/' 在 @/api/data.js 中定义的请求地址是 user 那么此处必须写 '/api/user'

// Mock.mock('api/user', {
//     username: 'pannio',
//     age: 16,
//     sex: '男',
//     type: '靓仔'
// })

// 正则匹配写法
// 匹配 'api/user' 开头的部分路由，如 'api/username'

// Mock.mock(/api\/user/igs, {
//     username: 'pannio',
//     age: 16,
//     sex: '男',
//     type: '靓仔'
// })


// 模拟随机数据
Mock.mock(/api\/user/igs, {
    username: 'pannio',
    mktime: '@datetime',
    'score|1-800': 800,
    'rank|1-100': 100,
    nickname: '@cname',
    address: '@url',
    imgUrl: '@image',
    email: '@email'
})

// 模拟位置数据接口信息
Mock.mock('api/pos', Position)
// 首页入口数据接口
Mock.mock('api/index', Index)
// 餐馆信息
Mock.mock('api/restaurants', Restaurants)