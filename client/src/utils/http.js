import axios from 'axios';

let baseUrl = 'http://localhost:6060/'

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