import React, { Component } from "react";

// check값 활성화시 체크표시, 마우스가 hover될때 엑스마크 보여줌
class TodoItem extends Component{
    render(){
        // todo내용, 체크박스 on/off상태, todoItem Key값, 체크박스 on/off 시키는 함수, todoItem 삭제시키는 함수
        const {content, isComplete, id, onToggle, onRemove} = this.props;

        return(
            <div className="todo-item" onClick={()=> onToggle(id)}>
                {/* x 마크 : onRemove 삭제 기능 */}
                <div className="todo-item-remove" onClick={(e)=>{
                    e.stopPropagation(); // onToggle 실행되지 않게 함
                    onRemove(id)
                }}>
                    &times;
                </div>

                <div className={`todo-item-content ${isComplete && 'isComplete'}`}>
                    <div>
                        {content}
                    </div>
                </div>

                {
                    isComplete && (<div className="isComplete-mark"> ✓ </div>)
                }

            </div>
        )

    }
}

export default TodoItem;