import { ForgotApi } from './../api/api'
import { stopSubmit } from 'redux-form'
const initialState = {
  isTrue: false
}
const SET_IS_TRUE = 'SET_IS_TRUE'
const forgotReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_TRUE:
      return {
        ...state,
        ...action.isTrue
      }
    default: return state
  }
}
export const setIsTrue = (isTrue) => ({ type: SET_IS_TRUE, isTrue: true })
export const forgot = (email) => {
  return (dispatch) => {
    ForgotApi.getPassword(email)
      .then(data => {
        debugger
        dispatch(setIsTrue())
      })
      .catch(error => {
        debugger
        let error1 = error.response.data.error
        console.log(error1)
        dispatch(stopSubmit('login', { _error: error1 }))
      })
  }
}
export default forgotReduser;