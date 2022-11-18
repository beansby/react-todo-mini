import React, { Component } from "react";
import './TodoItem.css'

// check값 활성화시 체크표시, 마우스가 hover될때 엑스마크 보여줌
class TodoItem extends Component{
    // 컴포넌트 최적화
    // shouldComponentUpdate(nextProps, nextState){
    //     return this.props.isComplete !== nextProps.isComplete;
    // }

    render(){
        // todo내용, 체크박스 on/off상태, todoItem Key값, 체크박스 on/off 시키는 함수, todoItem 삭제시키는 함수
        const {content, isComplete, id, onToggle, onRemove} = this.props;
        console.log(id);

        return(
            <div className="todo-item" onClick={()=> onToggle(id)}>
                {/* 체크 표시 : complete  */}
                {
                    isComplete && (<div className="isComplete-mark"> ✓ </div>)
                }

                {/* 컴포넌트 최적화 부분 todo-item-text 확인할 것 */}
                <div className={`todo-item-content ${isComplete && 'isComplete'}`}>
                    <div>
                        {content}
                    </div>
                </div>



                {/* x 마크 : onRemove 삭제 기능 */}
                <div className="todo-item-remove" onClick={(e)=>{
                    e.stopPropagation(); // onToggle 실행되지 않게 함
                    onRemove(id)
                }}>
                    &times;
                </div>               

            </div>
        )

    }
}

export default TodoItem;