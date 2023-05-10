import React, { useState} from 'react';
import './App.css'
import Task from './Task';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }
  
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed : false,
    };

    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((item) => {
      return item.id !== id;
    });

    setTodoList(newTodoList);
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          return { ...t, completed: true };
        } else {
          return t;
          }
        })
      )
  }

  return ( 
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange} type="text" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        <ul>
          {todoList.map((item, key) => {
            return <Task key={key} task={item.taskName} id={item.id} completed={item.completed} deleteTask={deleteTask} completeTask={completeTask} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default App;