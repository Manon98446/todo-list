import React,{ useEffect, useState } from 'react'
import AddTodo from './Components/addTodo';
import Header from './Components/header';
import TodoList from './Components/todoList';
import {v4 as uuidv4} from "uuid";

function App() {

  const LSKEY = "MyTodoApp"; //clef de notre application
  const initTodos = [
    {
        id: uuidv4(),
        name: 'Apprendre React',
        done: false
    },
    {
        id:uuidv4(),
        name: 'Faire la vaisselle',
        done: true
    },
    {
        id:uuidv4(),
        name: 'courir',
        done: true
    }
  ];
  const [todos, setTodos] = useState([]); //state permet de modifier le DOM en fonction du state, ce qu'une simple variable (let) ne permet pas, le array pourrait etre modifié par let mais ce ne serait pas affiché sur l'interface de l'utilisateur
  const [firstLoad, setFirstLoad] = useState(true);
  const changeTodoStatus = (id) => {
    const newTodos = todos.map((todo) => {
        if(todo.id === id){
            todo.done = !todo.done;
        } 
        return todo;
    });
   setTodos(newTodos);
  }

  const AddNewTodo =(newtTodoName) => {
    const newTodo = {
      id: uuidv4(),
      name: newtTodoName,
      done: false
    }
    const newTodos = [... todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  }

  useEffect(() => {
    if(!firstLoad){
      window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos))
    } else {
      setFirstLoad(false);
    }
  } , [todos, firstLoad]); //lorsque [todos] a un changement, la fonction pour localstorage est appelée

  useEffect(() => {
    const initialTodos = JSON.parse(window.localStorage.getItem(LSKEY + ".todos"))
    setTodos(initialTodos)
  }, []);

  return (
    <main className="container">
      <Header />
      
      <AddTodo AddNewTodo={AddNewTodo} />
      
      <TodoList todos={todos} changeTodoStatus={changeTodoStatus}/>
    </main>
  )
}

export default App
