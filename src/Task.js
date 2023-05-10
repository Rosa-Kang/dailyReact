import React from 'react'

const Task = (props) => {

  return (
    <div 
          className="tasks"
          style={{backgroundColor: props.completed ? "green" :  "transparent"}}
    >
          <li>{props.task}</li>
          <button onClick={()=> props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  )
}

export default Task