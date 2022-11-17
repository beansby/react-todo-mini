import React from "react";
import './TodoListTemplate.css'

function TodoListTemplate ({form, children}) {
    return(
        <main className="todo-list-template">
            <div className="todo-list-title">
                TO-DO LIST
            </div>
            
            {/* 입력창 */}
            <section className="form-wrapper">
                {form}
            </section>

            {/* to-do list */}
            <section className="todoItemList-wrapper">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate;