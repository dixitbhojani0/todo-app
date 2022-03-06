import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReadTodo from "./ReadTodo";

function CreateTodo(props) {
    const [Value, setValue] = useState("");
    const [Todos, setTodos] = useState(localStorage);
    const handleOnChange = (e) => {
        setValue(e.target.value);
    }; 
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (Value.length === 0 || Value === null) {
            alert("please enter some text");
            return false;
        }
        localStorage.setItem(uuidv4(), Value);
        setValue("");
        setTodos(localStorage);
    };

    return (
        <div className='row'>
            {/* <div className="col-3"> */}
                <form action="" className="row g-3" onSubmit={handleOnSubmit}>
                    <div className="col-auto">
                    <input type="text" className="form-control" id="addTodo" placeholder="Add todo..." onChange={handleOnChange} value={Value}/>
                    </div>
                    <div className="col-auto">
                    <button type="button" className="btn btn-primary" onClick={handleOnSubmit}>Add</button>
                    </div>
                </form>
            {/* </div> */}
            <ReadTodo todoList={Todos} />
        </div>
        
    );
}

export default CreateTodo;