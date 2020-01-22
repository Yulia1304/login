import React from 'react';
import styles from './../LoginForm/login.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input } from './../LoginForm/Input'
import { connect } from 'react-redux';
import { register } from './../Redux/registerReduser'
import { requiredField, minLengthCreatot } from './../utils/requiredRules'
const minLength7 = minLengthCreatot(7)
function RegisterForm(props) {
    return (
        <div className={styles.loginWraper} >
            <h1>Registration</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'email'}
                        validate={requiredField} component={Input} placeholder={'Email'} />
                </div>
                <div>
                    <Field name={'password'} type={'password'}
                        validate={[requiredField, minLength7]} component={Input} placeholder={'Password'} />
                </div>

                {/* {props.error &&  <div className={styles.error}>{props.error}</div>} */}
                <div>

                    <button >Reg</button>
                </div>
            </form>
        </div>
    );
}

const RegisterReduxForm = reduxForm({ form: 'login' })(RegisterForm)

const Register = (props) => {
    const onSubmit = (regData) => {
        props.register(regData.email, regData.password)
    }
    if (props.isReg) {
        return <div className={styles.reg}>your email is {props.email}</div>
    }

    return <div>

        <RegisterReduxForm onSubmit={onSubmit} />
    </div>

}


const mapStateToProps = (state) => ({

    isReg: state.reg.isReg,
    email: state.reg.email
})
export default connect(mapStateToProps, { register })(Register);