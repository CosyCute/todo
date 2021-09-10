import React from 'react';

const TodoListItem = ({label, important = false}) => {
    const liStyle = {
        color: important ? "#FF0000" : "#000000"
    }
    return (
        <span style={liStyle}>{label}</span>
    );
};

export default TodoListItem;