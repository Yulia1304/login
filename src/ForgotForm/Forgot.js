import React from 'react';
import styles from './../LoginForm/login.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input } from './../LoginForm/Input'
import { connect } from 'react-redux';
import { forgot } from './../Redux/forgotReduser'
function ForgotForm(props) {
    return (
        <div className={styles.loginWraper} >
            <h1>Forgot Password</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'email'} component={Input} placeholder={'Email'} />
                </div>
                {props.error && <div className={styles.error}>{props.error}</div>}
                <div>
                    <button >Recover</button>
                </div>
            </form>
        </div>
    );
}
const ForgotReduxForm = reduxForm({ form: 'login' })(ForgotForm)
const Forgot = (props) => {
    const onSubmit = (formData) => {
        props.forgot(formData.email)
    }
    if (props.isTrue) {
        return <div> later </div>
    }
    return <div>

        <ForgotReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isTrue: state.forgot.isTrue
})
export default connect(mapStateToProps, { forgot })(Forgot);