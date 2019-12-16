import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/Validation/FormControls/FormControls'
import { required } from '../common/Validation/Validation'
import { login } from '../../redux/authReducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from '../common/Validation/FormControls/FormControls.module.css'

let LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>Login</div>
                <Field placeholder='Email' name='email' component={Input} validate={[required]} />
                <Field placeholder='Password' name='password' component={Input} validate={[required]} type='password' />
                <Field type='checkbox' name='rememberMe' component={Input} /> remember me
                <button>Submit</button>
                {props.error && <div className={s.summaryError}>{props.error}</div>}
            </form>
        </div>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    let onSubmit = (values) => {

        props.login(values.email, values.password, values.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)


