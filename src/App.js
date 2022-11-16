import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Input from './components/input';
import Todo from './components/todo';

function App() {
  const baseUrl = "http://localhost:8080/"

  // 입력되는 값
  const [input, setInput] = useState("");
  // to-do list : 빈 배열, null 
  const [todos, setTodos] = useState([]);

  useEffect(()=> {
    getTodos();
  }, []);

  async function getTodos(){
    await axios.get(baseUrl+"/todo")
    .then((response)=>{
      console.log(response.data);
      setTodos(response.data);
    })
    .catch((error)=> {
      console.error(error);
    })
  }

  // to-do input value 변경 함수
  function ChangeText(event){
    event.preventDefault();
    setInput(event.target.value);
    console.log(input);
  }

  // to-do input submit 함수
  function InsertTodo(event){
    event.preventDefault();

    const InsertTodo = async () => {
      // 비동기 함수를 기다려주도록 ? spring-boot에서 post로 된 http method (insertTodo)를 호출하기 위해서 
      // {} JSON형식으로 객체를 넣어줌 : todoRequest controller => val todoName
      await axios
        .post(baseUrl + "/todo", {todoName:input})
        .then((response)=> {
          console.log(response.data);
          setInput(""); //input 하면서 초기화
          getTodos();
        })
        .catch((error)=> {
          console.error(error); // error handling
        })
    }

    InsertTodo();
    console.log("할 일이 추가됨");
  }

  // to-do check -> id를 받아와서 체크 : completed 처리
  function UpdateTodo(id){
    console.log(id);

    const UpdateTodo = async () => {
      await axios
        .put(baseUrl + "/todo/" + id, {}) // @Putmapping -> pathvariable의 value, path : "/todo/{todoId}""
        .then((response)=> {
          console.log(response.data);
          // getTodos();

          // DB 접근 없이 화면에서만 변경 처리 : 상태 변경 
          setTodos(
            todos.map((todo) => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
          )
        })
        .catch((error)=> {
          console.error(error); // error handling
        })
    }
  }
 
  // to-do 삭제
  function DeleteTodo(id){
    const DeleteTodo = async () => {
      await axios
        .delete(baseUrl + "/todo/" + id, {}) // @Deletemapping -> pathvariable의 value, path : "/todo/{todoId}""
        .then((response)=> {
          setTodos(
            todos.filter((todo) => todo.id !== id) 
          )
        })
        .catch((error)=> {
          console.error(error); // error handling
        })
    }
  }


  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Input handleSubmit={InsertTodo} input={input} handleChange={ChangeText}/>

      {
        todos ? todos.map((todo) => {
          return (
            <Todo key={todo.id}
              todo={todo} handleClick={()=> UpdateTodo(todo.id)} handleDelete={()=> DeleteTodo(todo.id)}/>
          )
        
        }) : null
      }
    </div>
  )
};






export default App;