
export default function AddTodo() {
    
    return (
        
        <form  method='POST'>
            <input type="text" name='newTodo' placeholder='Create new todo' />
            <button type="submit" >Create</button>
        </form>
    )
}