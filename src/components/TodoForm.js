import React, {useState} from "react";
import './TodoForm.css'

function TodoForm ({onCreate}){

    const [input, setInput] = useState("");
    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleKeyPress(event){
        if(event.key === "Enter"){
            onCreate(input);
            setInput('');
        }
    }

    return(
        <div className="form">
            {/* input 내용, 버튼 클릭시 실행 함수, 키 입력시 실행 함수 */}
            <input value={input} placeholder="add new task"
                   onChange={handleChange} onKeyPress={handleKeyPress}/>
            
            {/* 버튼 클릭시 실행 함수 */}
            <div className="create-button" onClick={()=>{
                onCreate(input);
                setInput('');
            }}>
                ADD
            </div>

        </div>
    );
}

export default TodoForm;