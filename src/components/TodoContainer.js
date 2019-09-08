import React from 'react';
import Parent from '../containers/Parent';
import TodoInput  from "../containers/TodoInput";
import TodoList from "../containers/TodoList";

export default function TodoContainer(props) {
    
    return (
        <Parent>
            <div id="remaining"> <TodoList remaining/> </div>
            <div id="done"> <TodoList /></div>
            <div id="create"> <TodoInput /> </div>
        </Parent>
    );

}
