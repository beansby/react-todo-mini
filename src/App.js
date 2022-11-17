import { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import TodoForm from "./components/TodoForm";
import TodoItemList from "./components/TodoItemList";
import TodoItem from "./components/TodoItem";

class App extends Component{

    constructor(props){
        super(props);
        const id = 2;
        this.state = {
            input:"",
            todos:[
                {id:0, content:'리액트 공부', isComplete:false},
                {id:1, content:'리액트 공부2', isComplete:true}
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event){
        this.setState({
            input:event.target.value
        })
    }

    handleCreate(){
        const {input, todos} = this.state;
        // 입력값이 없으면
        if (input ===""){
            alert("할 일을 입력해주세요.");
            return;
        }
        // 입력값이 있으면
        this.setState({
            input:"",
            todos:todos.concat({
                id:this.id++,
                content:input,
                isComplete:false
            })
        });
    }

    handleKeyPress(event){
        if(event.key === "Enter"){
            this.handleCreate();
        }
    }


    render(){
        return (
            <>
                <TodoListTemplate form={(
                    <TodoForm value={this.state.input}
                              onChange={this.handleChange}
                              onCreate={this.handleCreate}
                              onKeyPress={this.handleKeyPress}/>
                )}>
                    
                    
                    <TodoItemList/>
                </TodoListTemplate>

            </>
        )
    }
}

export default App;