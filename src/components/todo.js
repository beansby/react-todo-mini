import {Component} from 'react';

function Todo(props){
    return(
        <div className='todo' key={props.todo.id}>
            <p>
                <label className={props.todo.completed ? "completed" : null} onClick={props.handleClick}>
                    {/* db에 있는 todo list 값 */}
                    {props.todo.todoName}
                </label>  
                <label onClick={props.handleDelete}> x </label>
            </p>
        </div>
    )
}

export default Todo;
