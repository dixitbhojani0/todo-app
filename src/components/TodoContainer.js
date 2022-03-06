import React, { useEffect, useState } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import { MdFactCheck } from 'react-icons/md';

function TodoContainer(props) {
    const [Todos, setTodos] = useState({
        todoList: []
    });
    useEffect(() => {
        const data = localStorage.getItem("todoList");
        if (data !== "undefined" && data !== "null" ) {
            const parsedData = JSON.parse(data);
            if (parsedData) {
                setTodos({
                    todoList: parsedData
                });
            }
        }
    }, []);
    useEffect(() => {
        const temp = JSON.stringify(Todos.todoList);
        localStorage.setItem("todoList", temp);
    }, [Todos]);
    
    const addTodo = (item) => {
        const newTodoItem = {
            id: uuidv4(),
            title: item,
            completed: false
        }
        if(item.trim()) {
            setTodos({
                todoList: [
                    ...Todos.todoList,
                    newTodoItem
                ]
            });
        }
    }
    const handleOnChange = (id) => {
        if(id) {
            setTodos ({
                todoList: Todos.todoList.map((todo, index) => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            })
        }
    }
    const handleOnCheck = (id) => {
        if (id) {
            setTodos({
                todoList: Todos.todoList.map((todo, index) => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            })
        }
    }
    const handleOnUpdateValue = (updateValue, id) => {
        if (id && updateValue) {
            setTodos({
                todoList: Todos.todoList.map((todo, index) => {
                    if (todo.id === id) {
                        todo.title = updateValue;
                    }
                    return todo;
                })
            })
        }
    }
    const handleOnDelete = (id) => {
        if (id) {
            setTodos({
                todoList: Todos.todoList.filter((todo) => {
                    if (todo.id !== id) {
                        return todo;
                    }
                })
            })
        }
    }
    return(
        <>
            <div className="logo">
                <MdFactCheck size={100} className="main-logo" />
            </div>
            <div className='container'>
                <div className="today">{props.randomDay + props.randomDayName}</div>
                <div className='row justify-content-center'>
                    <div className='col-md-4 col-xs-6'>
                        <InputTodo addTodoItem={addTodo}/>
                        <TodoList todos={Todos} handleOnCompleted={handleOnChange} handleOnDelete={handleOnDelete} handleOnUpdateValue={handleOnUpdateValue} handleOnCheck={handleOnCheck}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TodoContainer;