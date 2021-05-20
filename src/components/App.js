import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import Nav from './Nav';
import Profile from './Profile';
import TasksBoard from './TasksBoard';

const App = ({authedUser}) => {
    return(
        <div className='container'>
            <Nav/>
            {authedUser

            ?
            <Fragment>
                <Route path='/tasks' component={TasksBoard} />
                <Route path='/me' component={Profile} />
            </Fragment>
            
            :<Home />
            }
        </div>
    )
}

function mapStateToProps({authedUser}) {
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(App)