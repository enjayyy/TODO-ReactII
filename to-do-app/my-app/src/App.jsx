import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import ClearAllButton from './components/ClearAllButton'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (taskDescription) => {
    const newTask = {
      id: Date.now(),
      description: taskDescription,
      timestamp: new Date().toLocaleString(),
    }
    setTasks((prevTasks) => [...prevTasks, newTask]) 
  }

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId))
  }

  const editTask = (taskId, newTaskDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, description: newTaskDescription } : task
      )
    )
  }

  const clearAllTasks = () => {
    setTasks([])
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      <ClearAllButton clearAllTasks={clearAllTasks} />
    </div>
  )
}

export default App