import { useState, useRef } from "react";

const TodoList = () => {

    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    const textElement = useRef();
    const addToList = () => {
        console.log(text)
        const id = list.length + 1;
        setList([ ...list, { id : id, value : text } ]);
        console.log(list)
        textElement.current.focus();
        setText("");
    }

    const deleteItem = (id) => {
        const filterItems = list.filter( ( object, index ) => {
            if( id !== object.id ) {
                return object;
            } 
        });
        setList(filterItems)
    }

    return(
        <div>
            <h2>TodoList</h2>
            <input name="text" type="text" ref={ textElement } onChange={ (e) => setText(e.target.value ) } value={text}/>
            <button onClick={ addToList }>Submit</button>
            <h2>List Items : </h2>
            <ul className="list">
                {
                    list.map( ( {value, id },index ) => (
                        <li className="list-item" key={index}>{value} <button className="delete-button" onClick={ () => deleteItem(id) }>Delete</button></li>
                    ) )
                }
            </ul>
        </div>
    );
}

export default TodoList;