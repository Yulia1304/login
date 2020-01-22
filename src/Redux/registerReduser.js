import { HeaderApi } from '../api/api'
const SET_REGISTER = 'SET_REGISTER'
const SET_ERROR = 'SET_ERROR'
const initialState = {
  isReg: false,
  login: null,
  email: null,
  password: null,
  error: 'some error'
}
const registerReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER:
      return {
        ...state,
        ...action.payloadReg
      }

    case SET_ERROR:
      return {
        ...state,
        ...action.error
      }
    default: return state
  }
}
export const setAuthUserData = (email, password, isReg) => ({ type: SET_REGISTER, payloadReg: { email, password, isReg } })
export const setError = (error) => ({ type: SET_ERROR, error: error })
export const register = (email, password, error) => {
  return (dispatch) => {
    HeaderApi.register(email, password)
      .then((data) => {
        if (data) {
          let { email, password } = data.data.addedUser
          dispatch(setAuthUserData(email, password, true));
          console.log(data)
          console.log('o gggggg')
        }
        else {
          dispatch(setError(error))
          alert('error')
        }
      })
  }
}
export default registerReduser;