import { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";

class App extends Component{
    render(){
        return (
            <>
                <TodoListTemplate>
                    오늘 할일 템플릿
                </TodoListTemplate>
            </>
        )
    }
}

export default App;