import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({label, todos, setTodos, remove}) => {

  const important = label.important;
  const done = label.done;

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
    textDecoration: done ? 'line-through' : 'none'
  };
  const onLabelClick = () => {
    todos[label.id].done = !todos[label.id].done;
    setTodos(todos => [...todos])
  }

  const onImportantBtnClick = () => {
    todos[label.id].important = !todos[label.id].important;
    setTodos(todos => [...todos])
  }

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        onClick={onLabelClick}
        style={style}>
        {label.label}
      </span>

      <button onClick={onImportantBtnClick} type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button onClick={() => remove(label)} type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
