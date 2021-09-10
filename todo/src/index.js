import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader/AppHeader.jsx';
import SearchPanel from './components/SearchPanel/SearchPanel.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';

import './index.css';
import ItemAddForm from './components/ItemAddForm/ItemAddForm.jsx';

const App = () => {

  const [todos, setTodos] = useState([
    { label: 'Drink Coffee', important: false, done: false, id: 0 },
    { label: 'Make Awesome App', important: true, done: false, id: 1 },
    { label: 'Have a lunch', important: false, done: false, id: 2 }
  ]);

  const [appendFilterArray, setAppendFilterArray] = useState([...todos])

  const [filterCondition, setFilterCondition] = useState('All');

  const removeLabel = (label) =>{
    setTodos(todos.filter(x => x.id !== label.id))
    let newArr = todos.filter(x => x.id !== label.id);
    for(let i = 0; i < todos.length - 1; i++)
      newArr[i].id = i;
  }

  const search = (inputValue) => {
    setAppendFilterArray([...todos])
    setTodos([...appendFilterArray].filter(x => x.label.includes(inputValue)))
  }

  const filter = (condition) => {
    setFilterCondition(condition)
    switch (condition){
      case 'All':
        setTodos([...appendFilterArray])
        break;
      case 'Active':
        if (filterCondition !== 'Done' && filterCondition !== 'Active') setAppendFilterArray([...todos])
        setTodos([...appendFilterArray].filter(x => x.important))
        break;
      case 'Done':
        if (filterCondition !== 'Active' && filterCondition !== 'Done') setAppendFilterArray([...todos])
        setTodos([...appendFilterArray].filter(x => !x.important))
        break;
      default :
      break;
    }
  }

  const addLabel = (labelText) => {
    setTodos([...todos, {label: labelText, important: false, done: false, id: todos.length + 1}])
  }
  return (
    <div className="todo-app">
      <AppHeader todos={todos} />
      <div className="top-panel d-flex">
        <SearchPanel searchFilter={search}/>
        <ItemStatusFilter filter={filter}/>
      </div>

      <TodoList todos={todos} setTodos={setTodos} remove={removeLabel}/>
      <ItemAddForm addLabel={addLabel}/>
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));