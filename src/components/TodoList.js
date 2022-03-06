import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <ul className="todo-list">
            {
                props.todos.todoList && props.todos.todoList.map((todo, index) => (
                    <li data-id="todo.id" key={index}>
                        <TodoItem todo={todo} handleOnCompleted={props.handleOnCompleted} handleOnDelete={props.handleOnDelete} handleOnUpdateValue={props.handleOnUpdateValue} handleOnCheck={props.handleOnCheck}/>
                    </li>
                ))
            }
        </ul>
    );
}

export default TodoList;