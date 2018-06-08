// 统一声明默认State
export default {
  auth: {
    isFetching: false,
    isAuthenticated: false
  },
  users: {
    isFetching: false,
    meta: {
      total: 0,
      perPage: 10,
      page: 1
    },
    data: []
  },
  count: 0
};