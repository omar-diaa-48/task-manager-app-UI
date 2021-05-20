import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const TasksBoard = ({authedUser}) => {
    // const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEyNjkyNmJlZWM4MTRhNGM5ODY1YTgiLCJpYXQiOjE2MjEyODM1ODEsImV4cCI6MTYyMTM2OTk4MX0.iWcFHS9RWT9X8LaN5x0gpWxBQkqxfHjhzPpAlXOe3Xk'
    const [tasks, setTasks] = useState()
    useEffect(() => {
        // fetch('http://localhost:3050/tasks', {headers:{'Authorization' : token}})
        fetch('https://task-manager-342248.herokuapp.com/tasks', {headers:{'Authorization' : `Bearer ${authedUser.token}`}})
            .then(res => res.json())
            .then(res => setTasks(res))
            .catch(e => console.log(e))
    }, [authedUser])
    return(
        <div className='text-center'>
            <h1>Tasks Board</h1>
            {tasks 
            ? 
            <ul className='list-group'>
                {tasks.map(task => 
                    <li className={`list-unstyled ${task.completed ? 'list-group-item-action' : 'list-group-item-danger'}`} 
                        key={task._id}>
                        <Task task={task} />
                    </li>)}
            </ul>
            :<h1>Loading</h1>}
        </div>
    )
}

function mapStateToProps({authedUser}) {
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(TasksBoard)