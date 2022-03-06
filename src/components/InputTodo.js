import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function InputTodo(props) {
    const [Value, setValue] = useState('');
    const handleOnChange = (e) => {
        if (document.getElementById("validation-msg").style.display === "block") {
            document.getElementById("validation-msg").style.display = "none";
        }
        if (e.target.value.length === 0) {
            if (document.getElementById("validation-msg").style.display === "none") {
                document.getElementById("validation-msg").style.display = "block";
            }
        }
        setValue(e.target.value);
    }; 
    const handleOnSubmit = (e) => {
        e.preventDefault();
        let validation = document.getElementById("validation-msg");
        if (Value.length === 0 || Value === null) {
            if (validation.style.display === "none") {
                validation.style.display = "block";
            }
            // alert("please enter some text");
            return false;
        } else {
            if (validation.style.display === "block") {
                validation.style.display = "none";
            }
            props.addTodoItem(Value);
            setValue("");
        }
    };
    return (
        <>
            <div className="add-control">
                <div className="form-group has-feedback">
                    <form action="" className="" onSubmit={handleOnSubmit}>
                        <input type="text" className="form-control" id="addTodo" placeholder="✍️ Add todo..." onChange={handleOnChange} value={Value} />
                        <FaPlusCircle className="form-control-feedback add-btn" title="Add item" onClick={handleOnSubmit}/>
                    </form>
                </div>
            </div>
            <p className="err text-danger text-center animate__animated animate__heartBeat" id="validation-msg" style={{ display: 'none' }}><i className="fa fa-warning"></i> Oops! Please, enter name item</p>
            <p className="no-items text-muted text-center hidden"><i className="fa fa-ban"></i></p>
                {/*<div className="col-auto">*/}
                    
                {/*</div>*/}
                {/*<div className="col-auto">*/}
                    {/*<button type="button" className="btn btn-primary" onClick={handleOnSubmit}>Add</button>*/}
                    {/*</div>*/}
        </>
    );
}

export default InputTodo;