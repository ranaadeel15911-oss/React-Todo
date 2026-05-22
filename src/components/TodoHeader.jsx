import React from 'react';
import '../styles/TodoHeader.css';

const TodoHeader = ({ totalTodos, completedTodos }) => {
  return (
    <div className="todo-header">
      <h1>📝 My Todo List</h1>
      <div className="header-stats">
        <span className="stat">Total: {totalTodos}</span>
        <span className="stat">Completed: {completedTodos}</span>
        <span className="stat">Remaining: {totalTodos - completedTodos}</span>
      </div>
    </div>
  );
};

export default TodoHeader;
