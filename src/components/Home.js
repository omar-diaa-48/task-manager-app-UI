import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import {setAuthedUser} from '../actions/authedUser';

const Home = ({authedUser, dispatch, history}) => {
    const[email,setEmail] = useState()
    const[password,setPass] = useState()
    const login = (e) => {
        e.preventDefault()
        fetch('https://task-manager-342248.herokuapp.com/users/login', {
            method:'POST', 
            body:JSON.stringify({email, password}),
            headers:{'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(res => {
                dispatch(setAuthedUser(res.user._id, res.token))
            })
            .then(() => history.push('/me'))
            .catch(error => console.log(error))
    }
    const signUp = (e) => {
        e.preventDefault()
        console.log({email,password});
    }
    return (
        <div className='row d-flex flex-column'>
            <div className='col-12 col-md-6'>
                <form action="">
                    <div className='form-group row mb-4'>
                        <label htmlFor="email" className='col-4 col-form-label'>Email address:</label>
                        <div className='col-8'>
                            <input onInput={e => setEmail(e.target.value)} id='email' className='form-control' type="text" placeholder='enter your email address'/>
                            <small className='form-text'>No worries we will never share your email with any one :)</small>
                        </div>
                    </div>
                    <div className='form-group row mb-4'>
                        <label htmlFor="pass" className='col-4 col-form-label'>Password</label>
                        <div className='col-8'>
                            <input onInput={e => setPass(e.target.value)} id='pass' className='form-control' type="Password" placeholder='enter your password'/>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-end'>
                        <button onClick={login} className='btn btn-success m-1'>Login</button>
                        <button onClick={signUp} className='btn btn-primary m-1'>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser}) => {
    return{
        authedUser
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setAuthedUser : () => {dispatch(SET_AUTHED_USER)}
//     }
// }

export default withRouter(connect(mapStateToProps)(Home))