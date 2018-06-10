import axios from 'axios';

let baseUrl = 'http://localhost:6060/'

export default {
  $post (url, data, success, errcb) {
    axios.post(baseUrl + url, data).then(res => {
      typeof success === 'function' && success(res)
    }).catch(err => {
      typeof errcb === 'function' && errcb(err)      
    })
  }
}