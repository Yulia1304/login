import { HeaderApi } from './../api/api'
import { stopSubmit } from 'redux-form'
const SET_AUTH_DATA = 'SET_AUTH_DATA'
const initialState = {
  isAuth: false,
  login: null,
  email: null,
  userId: null,
  token: null,
}
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload
      }
    default: return state
  }
}
export const setAuthUserData = (userId, name, isAuth) => ({ type: SET_AUTH_DATA, payload: { userId, name, isAuth } })
export const getAuth = (token) => (dispatch) => {
  return HeaderApi.getAuth(token)
    .then(data => {
      let { _id, name, isAuth } = data.data
      dispatch(setAuthUserData(_id, name, true))
    })
}
export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    HeaderApi.login(email, password, rememberMe)
      .then(data => {
        debugger
        if (data.status === 200) {
          dispatch(getAuth(data.data.token))
        }
        else {
          console.log('o no')
        }
      })
      .catch(error => {
        let error1 = error.response.data.error
        console.log(error1)
        dispatch(stopSubmit('login', { _error: error1 }))
      })
  }
}
export const logout = () => {
  return (dispatch) => {
    HeaderApi.logout()
      .then(data => {
        dispatch(setAuthUserData(null, null, null, false))
      })
  }
}
export default authReduser;