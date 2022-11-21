import { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import TodoForm from "./components/TodoForm";
import TodoItemList from "./components/TodoItemList";
import TodoItem from "./components/TodoItem";
import './App.css';

class App extends Component{

    constructor(props){
        super(props);
        // this.id = 2;
        this.state = {
            // input:"", => TodoForm에서 useState Hook 사용
            todos:[
                // {id:0, content:'리액트 공부', isComplete:false},
                // {id:1, content:'리액트 공부2', isComplete:true}
            ]
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        // this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleInitInfo = this.handleInitInfo.bind(this);
    }
    // handleInitInfo 추가, handleChange 제거
    componentDidMount(){
        this.handleInitInfo();
    }

    handleInitInfo(){
        fetch("/api/todos").then(res => res.json())
                           .then(todos=> this.setState({todos:todos}))
                           .catch(err=> console.log(err))
    }

    // handleChange(event){
    //     this.setState({
    //         input:event.target.value
    //     });
    // }

    handleCreate(inputValue){

        const {todos} = this.state;
        // 입력값이 없으면
        if (inputValue ===""){
            alert("할 일을 입력해주세요.");
            return;
        }
        // 입력값이 있으면
        this.setState({
            // input:"",
            todos:todos.concat({
                id: 0,
                content:inputValue,
                isComplete:false
            })
        });

        const data = {
            body:JSON.stringify({"content":inputValue}),
            headers:{'Content-Type':'application/json'},
            method:'post'
        }
        fetch("/api/todos", data).then(res=>{
            if(!res.ok){
                throw new Error(res.status);
            } else {
                return this.handleInitInfo();
            }
        })
        .catch(err=>console.log(err));
    }

    // handleKeyPress(event){
    //     if(event.key === "Enter"){
    //         this.handleCreate();
    //     }
    // }

    // todo complete method : 완료처리
    handleToggle(id){
        const {todos} = this.state;

        const isComplete = todos.find(todo => todo.id === id).isComplete;
        if(!window.confirm(isComplete?"미완료하시겠습니까?":"완료하시겠습니까?")){
            return;
        }
        // id로 몇번째 아이템인지 찾기
        const index = todos.findIndex(todo => todo.id === id);

        // 선택한 객체 저장
        const selected = todos[index];
        // 배열 복사
        const nextTodos = [...todos];
        // 기존 값 복사, isComplete 값 덮어쓰기
        nextTodos[index] = {
            ...selected, 
            isComplete:!selected.isComplete
        };
        this.setState({
            todos:nextTodos
        });

        const data = {
            headers:{'Content-Type':'application/json'},
            method:'put'
        }
        fetch("/api/todos/"+id, data).then(res=>{
            if(!res.ok){
                throw new Error(res.status);
            } else {
                return this.handleInitInfo();
            }
        })
        .catch(err=>console.log(err));
    
    }

    handleRemove (id) {
        const {todos} = this.state;
        const removeContent = todos.find(todo => todo.id === id).content;
        if(!window.confirm(""+removeContent+" 을 삭제하시겠습니까?")){
            return;
        }

        this.setState({
            todos:todos.filter(todo => todo.id !== id)
        });

        const data = {
            headers:{'Content-Type':'application/json'},
            method:'delete'
        }
        fetch("/api/todos/"+id, data).then(res=>{
            if(!res.ok){
                throw new Error(res.status);
            } else {
                return this.handleInitInfo();
            }
        })
        .catch(err=>console.log(err));
    }

    render(){
        return (
            
            <TodoListTemplate form={(
                <TodoForm onCreate={this.handleCreate}
                        //   value={this.state.input}
                        //   onChange={this.handleChange}
                        //   onKeyPress={this.handleKeyPress}
                            />
            )}>
                
                {/* todos => todoitemlist에 전달 */}
                <TodoItemList todos={this.state.todos} onToggle={this.handleToggle} onRemove={this.handleRemove}/>
            </TodoListTemplate>

            
        );
    }
}

export default App;