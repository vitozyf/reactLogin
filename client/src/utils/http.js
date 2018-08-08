import axios from 'axios';
import {getCookie, removeCookie} from 'src/utils/cookie';
import Configs from 'src/utils/config';
import { message } from 'antd';
const DEBUG = process.env.NODE_ENV !== 'production'
let httpRequest = async (config) => {
  try {
    let headers = {
      'Content-Type': 'application/json'
    }
    let auth = getCookie(Configs.SessionIdName)
    auth && Object.assign({}, headers, {
      'Authorization': 'REACTLOGIN ' + auth
    })
    let response = await axios.request(Object.assign({},{
      baseURL: Configs.BaseUrl,
      url: config.url,
      timeout: DEBUG ? 100000 : 30000,
      headers: headers,
      method: config.method,
      data: config.data,
      withCredentials: true
    }))
    // 网络层
    if (!response.data || response.status !== 200) {
      message.warning('网络异常，请稍后再试')
      throw new Error('网络异常，请稍后再试')
    }
    let data = response.data
    return successReponseHandler(data);
    // return data
  } catch (e) {
    let err
    if (e.response) {
      err = '服务器异常,请稍后重试'
    } else if (e.request) {
      err = '请求异常'
    } else {
      if (e.message === 'Network Error') {
        err = '网络异常'
      } else if (e.message.substr(0, 7) === 'timeout') {
        err = '请求超时'
      } else {
        err = e.message
      }
    }
    message.error(err)
    // throw e
  }
}

async function successReponseHandler (data) {
  if (data.Code === 0) return data.Data
  let errorMsg = ''
  switch (data.Code) {
    case 1: 
      errorMsg = data.Message;
      break
    case 120:
    case 130:
    case 140:
      errorMsg = '系统异常，请稍后再试'
      break
    case 401:
      window.location.href = '/#/login'
      removeCookie(Configs.SessionIdName)
      errorMsg = '您的登录状态失效，请重新登录！'
      break
    default: 
      errorMsg = '系统异常,请联系管理员';
  }
  message.error(errorMsg)
  return null
}

let $httpPost = async (url, data, config) => {
  let response = await httpRequest(Object.assign({}, {
    url: url, 
    data: data
  }, config, {
    method: 'post'
  }))
  return response
}

export default {
  $post: $httpPost
}

