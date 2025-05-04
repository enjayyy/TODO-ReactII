import React from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
  const handleEdit = () => {
    const newDescription = prompt("Edit task:", task.description);
    if (newDescription) {
      onEdit(task.id, newDescription);
    }
  };

  return (
    <div className="task-item">
      <p>{task.description} <span>{new Date(task.timestamp).toLocaleString()}</span></p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;