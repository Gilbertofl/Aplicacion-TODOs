import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

import './css/App.css'

const defaultTodos = [
  {text: 'Mas cosas', completed: true},
  {text: '300 abdominales', completed: false},
  {text: 'Manzanas', completed: false},
  {text: 'no se que mas', completed: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);    
    } 
  );

  const completeOnTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }


  return (
    <div className='root'>
      
      <div className='circle1'>
        <figure>
        <img src='https://pngimg.com/d/tree_PNG92702.png'  className='tree1' />
        </figure>
      </div>
      <div className='circle2'>
      <figure>
        <img src='https://pngimg.com/d/tree_PNG92702.png' className='tree2' />
        </figure>
      </div>
      <div className='title'>
        <h1>Bienvenido</h1>
      </div>
      
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoList>
      {searchedTodos.map(todo => (
          <TodoItem
           key={todo.text}
           text={todo.text}
           completed={todo.completed}
           onComplete={() => completeOnTodos(todo.text)}
           onDelete={() => deleteTodos(todo.text)}
           />
        ))}
      </TodoList>
      
      <CreateTodoButton />

    </div>
  );
}



export default App;
