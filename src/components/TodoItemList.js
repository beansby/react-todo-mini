import React, { Component } from "react";

class TodoItemList extends Component {
    render(){
        // todo 객체가 들어있는 배열, 체크박스 on/Off, todo 객체 삭제
        const {todos, onToggle, onRemove} = this.props;

        return(
            <div>
                Todo Item 자리
            </div>
        );
    }
}

export default TodoItemList;