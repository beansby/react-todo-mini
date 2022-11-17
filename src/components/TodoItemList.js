import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    render(){
        // todo 객체가 들어있는 배열, 체크박스 on/Off, todo 객체 삭제
        const {todos, onToggle, onRemove} = this.props;

        return(
            <div>
                <div>
                    <TodoItem content="TodoItem1"/>
                    <TodoItem content="TodoItem2"/>
                    <TodoItem content="TodoItem3"/>
                </div>
            </div>
        );
    }
}

export default TodoItemList;