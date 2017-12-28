const initialState = {
  isFetching: true,
  msg: {
    type: 1, //0失败， 1成功
    content: ''
  },
}

export const actionTypes = {
  FETCH_START: "FETCH_START",
  FETCH_END: "FETCH_END",
}

export const actions = {

}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state, isFetching: true
      }
    case actionTypes.FETCH_END:
      return {
        ...state, isFetching: false
      }
    default:
      return state
  }
}