export const users = (state = '', action) => {
  switch (action.type) {
    case 'CHANGEUSER':
      return Object.assign({}, state, {isFetching: !state.isFetching})
    default:
      return state
  }
}

export const auth =  (state = '', action) => {
  switch (action.type) {
    case 'CHANGEAUTH':
      return Object.assign({}, state, {isFetching: !state.isFetching})
    default:
      return state
  }
}

export const count = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}