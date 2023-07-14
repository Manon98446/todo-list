import React,{ useState } from 'react'
import AddTodo from './Components/addTodo';
import Header from './Components/header';
import TodoList from './Components/todoList';

function App() {
  const initialTodos = [
    {
        id: "1",
        name: 'Apprendre React',
        done: false
    },
    {
        id:'2',
        name: 'Faire la vaisselle',
        done: true
    },
    {
        id:'3',
        name: 'courir',
        done: true
    }
  ];
  const [todos, setTodos] = useState(initialTodos); //state permet de modifier le DOM en fonction du state, ce qu'une simple variable (let) ne permet pas, le array pourrait etre modifié par let mais ce ne serait pas affiché sur l'interface de l'utilisateur
  
  const changeTodoStatus = (id) => {
    const newTodos = todos.map((todo) => {
        if(todo.id === id){
            todo.done = !todo.done;
        } 
        return todo;
    });
   setTodos(newTodos);
}
  return (
    <main className="container">
      <Header />
      
      <AddTodo/>
      
      <TodoList todos={todos} changeTodoStatus={changeTodoStatus}/>
    </main>
  )
}

export default App
