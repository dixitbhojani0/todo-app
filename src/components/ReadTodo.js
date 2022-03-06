import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function ReadTodo(props) {
    // console.log(props.todoList);
    const [Edit, setEdit] = useState(0);
    const [Todos, setTodos] = useState(props.todoList);
    const [Keys, setKeys] = useState(Object.keys(Todos));
    const handleDelete = (e) => {
        e.preventDefault();
        if(window.confirm("Are you sure you want delete this item?")) {
            localStorage.removeItem(document.querySelector('.delete-icon').getAttribute('id'));
            setTodos(localStorage);
            setKeys(Object.keys(Todos));
        }
    }

    // const handleUpdate = (e) => {
    //     // e.preventDefault();
    //     let keyName = document.querySelector('.edit-icon').getAttribute('id');
    //     setEdit(keyName);
    //     // console.log(document.querySelector('.edit-icon').getAttribute('id'));
    //     console.log(Edit);

    // }
    useEffect(() => {
      alert(Edit);
    
    }, [Edit]);
    

    return (
        <div className='col-5 mt-5'>
            {Object.keys(Todos).map((key, index) => (
                <div className='d-flex' key={index}>
                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                        </div>
                        <div className='form-control mb-0 d-flex justify-content-between'>
                            { 
                                <>
                                <p className="todo-row" aria-label="Text input with checkbox" id={"todo-" + key}>{Todos[key]}</p>
                                    <div>
                                        <span className='px-2'><BiEdit className='edit-icon' id={key} size={18} onClick={() => setEdit(key)} /></span>
                                        <span className=''><MdDelete className='delete-icon' id={key} size={18} onClick={handleDelete} /></span>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReadTodo;