import React from 'react';
import "./AppHeader.css"

const AppHeader = ({todos}) => {
  
  var countOfImportant = 0;
  const toDo = () =>{
    for (let i = 0; i < todos.length; i++)
    if (todos[i].important) countOfImportant++
  }
  toDo();
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{todos.length - countOfImportant} more to do, {countOfImportant} done</h2>
    </div>
  );
};

export default AppHeader;
