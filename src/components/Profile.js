import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Profile = ({authedUser}) => {
    // const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEyNjkyNmJlZWM4MTRhNGM5ODY1YTgiLCJpYXQiOjE2MjEyODM1ODEsImV4cCI6MTYyMTM2OTk4MX0.iWcFHS9RWT9X8LaN5x0gpWxBQkqxfHjhzPpAlXOe3Xk'
    const [profile, setProfile] = useState()
    useEffect(() => {
        console.log(authedUser.token);
        // fetch('http://localhost:3050/users/me',{headers:{'Authorization' : token}})
        fetch('https://task-manager-342248.herokuapp.com/users/me',{method:'GET', headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${authedUser.token}`
        }})
        .then(res => res.json())
        .then(res => setProfile(res))
        .catch(e => console.log(e))
    }, [authedUser])
    return(
        profile 
        ?
        <div>
            <h1>{profile.name}</h1>
            <p className='display-2'>{profile.age}</p>
        </div>
        : <h1>Loading</h1>
    )
}

function mapStateToProps({authedUser}) {
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(Profile)