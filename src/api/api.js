import * as axios from 'axios'
const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/'
})
export const HeaderApi = {
    getAuth(token) {
        return instance.post(`auth/me`, { token })
            .then(response => {
                return response
            })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    },
    register(email, password) {
        debugger
        return instance.post(`auth/register`, { email, password })

    }
}
export const ForgotApi = {
    getPassword(email) {
        return instance.post(`auth/forgot`, { email })
    }
}

