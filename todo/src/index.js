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

  const [filterBtnArr, setFilterBtnArray] = useState([
    {label: "All", className: "btn btn-info", id: 0},
    {label: "Active", className: "btn btn-outline-secondary", id: 1},
    {label: "Done", className: "btn btn-outline-secondary", id: 2}])

  const [appendFilterArray, setAppendFilterArray] = useState([...todos])

  const reset = (e) => {
    setTodos(e)
    setAppendFilterArray(e);
  }

  const removeLabel = (label) =>{
    let newArr = todos.filter(x => x.id !== label.id)
    for(let i = 0; i < todos.length - 1; i++)
      newArr[i].id = i;
    reset(newArr)
  }

  const search = (inputValue) => {
    setAppendFilterArray([...todos].filter(x => x.label.toLowerCase().includes(inputValue)))
  }

  const filter = (condition) => {
    switch (condition){
      case 'All':
        setAppendFilterArray([...todos])
        break;
      case 'Active':
        setAppendFilterArray([...todos].filter(x => x.important))
        break;
      case 'Done':
        setAppendFilterArray([...todos].filter(x => !x.important))
        break;
      default :
      break;
    }
  }

  const addLabel = (labelText) => {
    if (labelText) {
    reset([...todos, {label: labelText, important: false, done: false, id: todos.length}])
  }}
  return (
    <div className="todo-app">
      <AppHeader todos={todos} />
      <div className="top-panel d-flex">
        <SearchPanel searchFilter={search}/>
        <div className="btn-group">
          {filterBtnArr.map(x => <ItemStatusFilter 
          key={x.label}
          currentFilter={x}
          filterBtnArr={filterBtnArr}
          setFilterBtnArray={setFilterBtnArray} 
          filter={filter}/>)}
        </div>
      </div>

      <TodoList todos={appendFilterArray} setTodos={setTodos} remove={removeLabel}/>
      <ItemAddForm addLabel={addLabel}/>
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));