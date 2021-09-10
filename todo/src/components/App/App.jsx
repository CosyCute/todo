import React from "react";
import SearchPanel from '../SearchPanel/SearchPanel';
import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';

const App = () => {

    const todoData = [
      {label: 'Drink Coffee'}, 
      {label: 'Build React App', important: true},
      {label: 'Have a lunch'}]
  
    return (
      <div>
        <AppHeader />
        <SearchPanel />
        <TodoList todos={todoData}/>
      </div>
    )
  }

  export default App;