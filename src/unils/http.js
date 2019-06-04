//  引入axios
import axios from 'axios'
//  生成一个axios实例
const http = axios.create()
// 设置http 的一些默认选项
http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://www.baidu.com/' : 'http://localhost:3000/'//  基准url
http.defaults.timeout = 10000 // 超过这个时间点请求还没完成，年轻啊么就报错
//  做请求拦截

//  做响应拦截
http.interceptors.response.use(response => {
  return response.data
})

// 暴露
export default http
