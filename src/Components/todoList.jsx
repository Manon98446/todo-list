
export default function TodoList({todos,changeTodoStatus}){
    
    
    /*const handleClick = () => {
        const newTodos = [ ... todos];
        newTodos.push("New todo");
        setTodos(newTodos);
    }*/

    return(
        <section>
            <h2>Todos </h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input 
                        type="checkbox" 
                        id={todo.id} 
                        checked={todo.done} 
                        onChange={() => {changeTodoStatus(todo.id)}}/> {/*on appelle une fonction vide (sans paramètres) pour ne pas appeler la fontion change Todostatus (avec paramètres) de facon automatique, quand on appelle la fonction vide, elle appelle la fonction avec parametre*/}
                        {todo.name}
                    </li>)
                )}
            </ul>
            {/*<button type='button' onClick={handleClick}>add todo</button>*/}
        </section>
    )
}