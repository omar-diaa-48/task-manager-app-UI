import React from 'react';

const Task = (props) => {
    const {task} = props
    return(
        <div>
            <h4>{task.description}</h4>
        </div>
    )
}

export default Task