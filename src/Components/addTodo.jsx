import {useRef} from 'react';


export default function AddTodo({AddNewTodo}) {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputElement = inputRef.current;
        AddNewTodo(inputElement.value);
        inputElement.value = '';
    }
    return (
        
        <form  method='POST' onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" name='newTodo' placeholder='Create new todo' />
            <button type="submit" >Create</button>
        </form>
    )
}