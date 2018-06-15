export const user = (state = '', action) => {
  switch (action.type) {
    case 'SetLogin':
      return Object.assign({}, state, {IsLogin: true})
    case 'SetLogout':
      return Object.assign({}, state, {IsLogin: false})
    default:
      return state
  }
}

export const todos = (state = '', action) => {
  switch (action.type) {
    case 'ChangeTodos':
      return Object.assign({}, state, {test: !state.test})
    default:
      return state
  }
}
