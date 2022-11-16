import {Component} from 'react';

function Input(props){
    return(
        // handleSubmit, input, handleChange 속성값 필요
        <form onSubmit={props.handleSubmit}>  
            <label>
            <input type="text" required={true} value={props.input} onChange={props.handleChange}/>
            </label>
            <input type='submit' value='Create'/> 
        </form>
    )
    
}

export default Input;