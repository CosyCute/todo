import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';
const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        return (
            <li className="list-group-item todo-list-item">
                <TodoListItem {...item} />
            </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;