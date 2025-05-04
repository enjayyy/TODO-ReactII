import { useState } from 'react'

function TaskItem({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newDescription, setNewDescription] = useState(task.description)

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newDescription)
    }
    setIsEditing(!isEditing)
  }

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span>{task.description} - {task.timestamp}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  )
}

export default TaskItem