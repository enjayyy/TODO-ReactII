import React from 'react';

const ClearAllButton = ({ clearAllTasks }) => {
  return (
    <button onClick={clearAllTasks}>
      Clear All Tasks
    </button>
  );
};

export default ClearAllButton;