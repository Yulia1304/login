import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReduser } from 'redux-form'
import authReduser from './authReduser'
import registerReduser from './registerReduser'
import forgotReduser from './forgotReduser'

let redusers = combineReducers(
  {
    form: formReduser,
    auth: authReduser,
    reg: registerReduser,
    forgot: forgotReduser
  })
export let store = createStore(redusers, applyMiddleware(thunkMiddleware))
export default store;






