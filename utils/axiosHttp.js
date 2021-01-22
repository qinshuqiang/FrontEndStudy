import axios from 'axios'
import qs from 'qs'
import { ElLoading } from 'element-plus';
import { ElMessage } from 'element-plus';
//设置请求超时
axios.defaults.timeout = 10000;
//设置请求头
//axios.defaults.headers.common['token'] = token
//post请求头
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";
// 环境的切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://bufantec.com/';
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = 'https://www.ceshi.com';
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'https://www.production.com';
}
var loadings;
let loadingRequestCount = 0; //定义一个请求次数的变量，用来记录当前页面总共请求的次数
const showLoading = () => {
    if (loadingRequestCount === 0) {
        // element的服务方式 target 我这边取的是表格 项目是后台系统 每个页面都有表格 类似整个表格loading
        // 和在表格配置v-loading一样的效果，这么做是全局实现了，不用每个页面单独去v-loading
        loadingInstance = ElLoading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
    }
    loadingRequestCount++
}
const hideLoading = () => {
        if (loadingRequestCount <= 0) return
        loadingRequestCount--
        if (loadingRequestCount === 0) {
            vue.$nextTick(() => { //以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close();
            });
        }
    }
    //请求拦截 请求之前对数据进行一下操作
    //一般在请求拦截器里面开始loading弹窗 或者 数据进行序列化操作
axios.interceptors.request.use(
    config => {
        //config 代表axios的配置
        console.log(config);
        // loadings = ElLoading.service({
        //   lock: true,
        //   text: 'Loading',
        //   spinner: 'el-icon-loading',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // })
        // 请求拦截进来调用显示loading效果
        showLoading()
        if (config.method.toLowerCase() == 'post') {
            //在请求发送之前执行了数据的序列化操作
            config.data = qs.stringify(config.data)
        }
        return config;
    },
    error => {
        //对请求失败进行处理
        return Promise.error(error);
    }
);
// 响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据  
        // loadings.close();
        // 响应拦截进来隐藏loading效果，此处采用延时处理是合并loading请求效果，避免多次请求loading关闭又开启合并loading请求效果 避免重复请求    
        hideLoading()

        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        // 响应拦截进来隐藏loading效果，此处采用延时处理是合并loading请求效果，避免多次请求loading关闭又开启合并loading请求效果 避免重复请求    
        hideLoading()

        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;

                    // 403 token过期
                    // 登录过期对用户进行提示
                    // 清除本地token和清空vuex中token对象
                    // 跳转登录页面                
                case 403:
                    ElMessage({
                        showClose: true,
                        message: '登录过期，请重新登录',
                        type: 'error'
                    });
                    // 清除token
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;

                    // 404请求不存在
                case 404:
                    ElMessage({
                        showClose: true,
                        message: '网络请求不存在',
                        type: 'error'
                    });
                    break;
                    // 其他错误，直接抛出错误提示
                default:
                    ElMessage({
                        showClose: true,
                        message: 'error.response.data.message',
                        type: 'error'
                    });
            }
            return Promise.reject(error.response);
        }
    }
);

//get请求封装
// export function get (url, params) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, {
//         params: params
//       })
//       .then(res => {
//         // 手动清除 Toast
//         // Toast.clear();
//         resolve(res.data);
//       })
//       .catch(err => {
//         reject(err.data);
//       });
//   });
// }

// //post请求封装,qs库将对象转换为&连接的字符串表单格式
// export function post (url, params) {
//   return new Promise((resolve, reject) => {
//     axios
//       //.post(url, QS.stringify(params))
//       .post(url, params)
//       .then(res => {
//         // 手动清除 Toast
//         if (res.data.code === 1) {
//           resolve(res.data.data);
//         } else {
//           reject(res.data.msg);
//         }
//       })
//       .catch(err => {
//         reject(err.data);
//       });
//   });
// }

// export function put (url, params) {
//   return new Promise((resolve, reject) => {
//     axios
//       .put(url, QS.stringify(params))
//       .then(res => {
//         resolve(res.data);
//       })
//       .catch(err => {
//         reject(err.data);
//       });
//   });
// }

// //delete方法的删除参数有点问题{ data: params }
// export function deletes (url, params) {
//   return new Promise((resolve, reject) => {
//     axios
//       .delete(url, { data: params })
//       .then(res => {
//         resolve(res.data);
//         console.log("成功删除");
//       })
//       .catch(err => {
//         reject(err.data);
//         console.log("删除失败");
//       });
//   });
// }

export default axios;