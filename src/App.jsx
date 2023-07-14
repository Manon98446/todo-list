import React,{ useState } from 'react'
import AddTodo from './Components/addTodo';
import Header from './Components/header';
import TodoList from './Components/todoList';

function App() {
  
  return (
    <main className="container">
      <Header />
      
      <AddTodo/>
      
      <TodoList/>
    </main>
  )
}

export default App
