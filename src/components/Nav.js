import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeAuthedUser } from '../actions/authedUser';
import '../index.css';

const Nav = ({dispatch}) => {
 
    const logOut = (e) => {
        e.preventDefault()
        dispatch(removeAuthedUser())
    }

    return(
        <div className='row d-flex flex-column align-items-center flex-md-row justify-content-md-start bg-light mb-5'>
            <p className='h2 nav-link link-danger col-12 col-md-3 app-logo'>Taskitos</p>
            <Link className='h3 col-1 col-md-2' to='/me'>Profile</Link>
            <Link className='h3 col-1 col-md-5' to='/tasks'>Tasks</Link> 
            <Link className='h3 col-1' to='/logout' onClick={e => logOut(e)}>Logout</Link>
        </div>
    )
}

export default connect()(Nav)