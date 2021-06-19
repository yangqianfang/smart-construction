// import axios from 'axios'
// // import qs from 'query-string'
// import qs from 'qs'
// import md5 from 'blueimp-md5'
import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'
import { Toast } from 'vant'

// const md5 = require('blueimp-md5')

const defaults = {
    //baseURL: "/api",
    basePath: '',
    headers: {},
    auth: {}
}

let cancel
const { CancelToken } = axios

if (process.env.NODE_ENV === 'production') {
    defaults.baseURL = '/api'
}

/**
 * Fetch
 */
class Fetch {
    constructor() {
        this.option = defaults

        this.axiosInstance = axios.create({
            timeout: 10000,
            withCredentials: false,
            headers: {
                Accept: 'application/json, text/plain, */*',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': ' application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
        this.addDefaultRequestInterceptor()
        this.addDefaultResponseInterceptor()
    }

    addRequestInterceptor(func) {
        this.axiosInstance.interceptors.request.use(func)
    }

    addResponseInterceptor(func) {
        this.axiosInstance.interceptors.response.use(func)
    }

    /**
     * default interceptor for request
     */
    addDefaultRequestInterceptor() {
        this.axiosInstance.interceptors.request.use(
            (config) => {
                if (config.method === 'post' && config.type !== 'upload') {
                    // config.data = qs.stringify(config.data)
                }
                return config
            },
            (err) => Promise.reject(err)
        )
    }

    /**
     * default interceptor for response
     */
    addDefaultResponseInterceptor() {
        this.axiosInstance.interceptors.response.use(
            (res) => {
                if (res.data.code === -2) {
                    this.$router.push('/login')
                }
                return res
            },
            (err) => {
                if (axios.isCancel(err)) {
                    console.log('api cancel')
                    return
                }
                if (err.message.includes('timeout')) {
                    Toast('api timeout', 1)
                }

                let errorMessage = err.message
                let status = -1
                if (err.response) {
                    // eslint-disable-next-line prefer-destructuring
                    status = err.response.status
                    // eslint-disable-next-line default-case
                    switch (err.response.status) {
                        case 404: {
                            errorMessage = '404 not found'
                            break
                        }
                        case 500: {
                            errorMessage = '500 internal error'
                            Toast('请求失败，请重试', 1)
                            break
                        }
                        case 403: {
                            Toast('您暂无此操作权限！', 1)
                            break
                        }
                    }
                }
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject({
                    status,
                    body: null,
                    message: errorMessage
                })
            }
        )
    }

    setRequestBaseURL(baseURL) {
        this.option.baseURL = baseURL
    }

    setRequestBasePath(basePath) {
        this.option.basePath = basePath
    }

    setRequestOption(option) {
        if (option.headers) {
            this.addRequestHeaders(option.headers)
            delete option.headers
        }
        Object.assign(this.option, option)
    }

    addRequestHeaders(headers = {}) {
        this.option.headers = Object.assign({}, this.option.headers, headers)
    }

    getRequestHeaders() {
        return this.option.headers
    }

    setRequestAuth(auth = {}) {
        if (!auth.token) {
            throw new Error('token required in auth')
        }
        if (!auth.nonce) {
            throw new Error('nonce required in auth')
        }
        this.option.auth = auth
    }

    raw(option) {
        return axios(option)
    }

    setCancel() {
        // eslint-disable-next-line no-unused-expressions
        cancel && cancel()
    }

    request(option) {
        return this.axiosInstance(option)
    }

    get(url, params = {}) {
        return this.request({ method: 'get', url, params })
    }

    post(url, params = {}) {
        return this.request({
            method: 'post',
            url,
            data: params,
            cancelToken: new CancelToken((c) => {
                cancel = c
            })
        })
    }

    put(url, params = {}) {
        return this.request({ method: 'put', url, data: params })
    }

    patch(url, params = {}) {
        return this.request({ method: 'patch', url, data: params })
    }

    delete(url, params = {}) {
        return this.request({ method: 'delete', url, data: params })
    }

    upload(url, formData) {
        return axios
            .post(url, formData)
            .then((res) => {
                const { data } = res
                return Promise.resolve(data)
            })
            .catch((err) => {
                Vue.prototype.$message({
                    message: err,
                    type: 'error'
                })
            })
    }

    all(items) {
        if (!Array.isArray(items)) {
            if (typeof items !== 'object') {
                // eslint-disable-next-line no-throw-literal
                throw 'argument should be object or array.'
            }
            items = [items]
        }

        const task = []
        for (const item of items) {
            task.push(this.request(item))
        }
        return axios.all(task)
    }
}

export default new Fetch()
