import { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import TodoForm from "./components/TodoForm";
import TodoItemList from "./components/TodoItemList";
import TodoItem from "./components/TodoItem";

class App extends Component{
    render(){
        return (
            <>
                <TodoListTemplate form={<TodoForm/>}>
                    <TodoItemList/>
                </TodoListTemplate>

            </>
        )
    }
}

export default App;