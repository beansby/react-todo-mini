import React from "react";
import './TodoForm.css'

function TodoForm ({value, onChange, onCreate, onKeyPress}){
    return(
        <div className="form">
            {/* input 내용, 버튼 클릭시 실행 함수, 키 입력시 실행 함수 */}
            <input value={value} placeholder="오늘 할 일을 입력하세요"
                   onChange={onChange} onKeyPress={onKeyPress}/>
            
            {/* 버튼 클릭시 실행 함수 */}
            <div className="create-button" onClick={onCreate}>
                추가
            </div>

        </div>
    );
}

export default TodoForm;