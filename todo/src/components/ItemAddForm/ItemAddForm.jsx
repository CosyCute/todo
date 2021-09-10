import React from 'react';
import './ItemAddForm.css'
const ItemAddForm = ({addLabel}) => {

    const addTask = (e) => {
        addLabel(e.target.value)
        e.target.value = '';
    }

    return (
        <div>
            <input className="add-form form-control" type="text" placeholder="Add task..."
            onKeyDown={(e) => {if (e.key === "Enter") addTask(e)}} />
        </div>
    );
};

export default ItemAddForm;