import React, {useState} from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function TodoItem(props) {
    let editModeStyle = {};
    let viewModeStyle = {};
    const [EditMode, setEditMode] = useState(false);
    const handleOnUpdate = (id) => {
        if (id) {
            setEditMode(true);
        }
    }
    const handleOnUpdateDone = (e) => {
        if (e.key === "Enter") {
            setEditMode(false);
        }
    }
    return (
        <>
            <div className="mb-3">
                <div className={"input-group animate__animated" + (props.todo.completed === true ? " completed" : '') }>
                    <div className="input-group-text" onClick={!EditMode ? () => (props.handleOnCheck(props.todo.id)) : ''}>
                        <input className="form-check-input mt-0" type="checkbox" checked={props.todo.completed === true ? "checked" : ""} onClick={() => (props.handleOnCompleted(props.todo.id))} onChange={() => (props.handleOnCompleted(props.todo.id))} />
                    </div>
                    {!EditMode && <div className={'form-control mb-0' + (props.todo.completed === true ? " completed" : '')} id={"todo-wrapper-" + props.todo.id} style={{display: viewModeStyle.display}}>
                        <div className='d-flex'>
                            <p className="todo-row m-0 flex-grow-1 text-start" aria-label="Text input with checkbox" id={"todo-" + props.todo.id} onClick={!EditMode ? () => (props.handleOnCheck(props.todo.id)) : ''}>{props.todo.title}</p>
                            <div className='d-flex'>
                                <span className='px-2'><BiEdit className='edit-icon' id={props.todo.id} size={18} onClick={() => (handleOnUpdate(props.todo.id))}/></span>
                                <span className=''><MdDelete className='delete-icon' id={props.todo.id} size={18} onClick={() => (props.handleOnDelete(props.todo.id))}/></span>
                            </div>
                        </div>
                    </div>}
                    {EditMode && <input type="text" className="form-control updateTodo" value={props.todo.title} id={"update-todo-" + props.todo.id} style={{display: editModeStyle.display}} onChange={(e) => (props.handleOnUpdateValue(e.target.value, props.todo.id))} onKeyDown={handleOnUpdateDone}/>}
                </div>
            </div>
        </>
    );
}

export default TodoItem;