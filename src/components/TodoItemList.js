import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    // re-rendering 여부 결정 : 구현하지 않으면 default = true, 업데이트에 영향 주는 조건을 return
    // todo값 변경시 this.props.todos와 nextProps.todos가 다를때만 re-rendering
    // shouldComponentUpdate(nextProps, nextState){
    //     return this.props.todos !== nextProps.todos;
    // }


    render(){
        // todo 객체가 들어있는 배열, 체크박스 on/Off, todo 객체 삭제
        const {todos, onToggle, onRemove} = this.props;
        console.log(todos);
        // 객체 배열을 컴포넌트 배열로 변환
        const todoList = todos.map(
            // todo = {id, content, isComplete}
            ({id, content, isComplete}) => (
                <TodoItem id={id}
                          content={content}
                          isComplete={isComplete}
                          onToggle={onToggle}
                          onRemove={onRemove}
                          key={id}/>
            )
        );

        return(
            <div>
                
                {todoList}
                
            </div>
        );
    }
}

export default TodoItemList;