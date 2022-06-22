import axios from 'axios'

const service = axios.create({
  timeout: 2 * 1000
})

service.interceptors.request.use(config => {
  config.data = JSON.stringify(config.data)
  config.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Author: 'Nick.Huang'
  }

  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '錯誤請求'
        break
      case 401:
        error.message = '未授權，請重新登入'
        break
      case 403:
        error.message = '拒絕存取'
        break
      case 404:
        error.message = '請求錯誤,未找到該資源'
        break
      case 405:
        error.message = '請求方法未允許'
        break
      case 408:
        error.message = '請求超時'
        break
      case 500:
        error.message = '伺服器端出錯'
        break
      case 501:
        error.message = '網路未實現'
        break
      case 502:
        error.message = '網路錯誤'
        break
      case 503:
        error.message = '服務不可用'
        break
      case 504:
        error.message = '網路超時'
        break
      case 505:
        error.message = 'http版本不支援該請求'
        break
      default:
        error.message = `連線錯誤${error.response.status}`
    }
  } else {
    // 超時處理
    if (JSON.stringify(error).includes('timeout')) {
      console.log('伺服器響應超時，請重新整理當前頁')
    }
    error.message('連線伺服器失敗')
  }

  console.log(error.message)

  return Promise.resolve(error.response)
})

export default service
