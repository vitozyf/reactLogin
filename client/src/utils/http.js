import axios from 'axios';
const debug = process.env.NODE_ENV !== 'production'

const baseUrl = debug ? 'http://localhost:6060/' : 'http://http://47.98.240.182:6060/'

const options = {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json' 
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
};

export default {
  $post (url, data, success, errcb) {
    axios(Object.assign({}, options, {
      url: baseUrl + url,
      data: data
    })).then(res => {
      typeof success === 'function' && success(res)
    }).catch(err => {
      typeof errcb === 'function' && errcb(err)
    })
  }
}