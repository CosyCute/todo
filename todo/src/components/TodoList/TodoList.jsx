import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({todos, setTodos, remove}) => {

  return (
    <ul className="list-group todo-list">
      { todos.map((item) => <li className="list-group-item" key={item.id}>
      <TodoListItem 
      label={item} 
      todos={todos} 
      setTodos={setTodos}
      remove={remove}/></li>) }
    </ul>
  );
};

export default TodoList;
