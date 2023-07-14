
export default function TodoList({todos,changeTodoStatus, handleDeleteClick}){
    
    
    

    return(
        <section>
            <h2>Todos </h2>
            <ul>
                {todos && todos.map((todo, index) => ( //conditional rendering react
                    <li key={index}>
                        <input 
                        type="checkbox" 
                        id={todo.id} 
                        checked={todo.done} 
                        onChange={() => {changeTodoStatus(todo.id)}}/> {/*on appelle une fonction vide (sans paramètres) pour ne pas appeler la fontion change Todostatus (avec paramètres) de facon automatique, quand on appelle la fonction vide, elle appelle la fonction avec parametre*/}
                        {todo.name}
                        <button onClick={ () => {handleDeleteClick(todo.id)}}>Delete</button>
                    </li>)
                )}
            </ul>
            {/*<button type='button' onClick={handleClick}>add todo</button>*/}
        </section>
    )
}