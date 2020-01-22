import React from 'react';
import styles from './login.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input } from './Input'
import { connect } from 'react-redux';
import { login } from './../Redux/authReduser'
function LoginForm(props) {
    return (
        <div className={styles.loginWraper} >
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'email'} component={Input} placeholder={'Email'} />
                </div>
                <div>
                    <Field name={'password'} type={'password'} component={Input} placeholder={'Password'} />
                </div>
                <div>
                    <Field name={'rememberMe'} component={Input} type={'checkbox'} /> remember me
            </div>
                {props.error && <div className={styles.error}>{props.error}</div>}
                <div>
                    <button >Login</button>
                </div>
            </form>
        </div>
    );
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <div>your id is {props.id} </div>
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.userId
})
export default connect(mapStateToProps, { login })(Login);