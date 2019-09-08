import React from "react";

function TodoListItem(props) {

    return (
        <div className='card'>

            <div className="card-content">
                <span className="card-title"> {props.taskObj.title} </span>
                <p>
                    {props.taskObj.content}
                </p>
            </div>

            <div className="card-action right-align">
                <a href="#!"
                    onClick={() => props.toggleDone(props.taskObj)}
                    className={`btn btn-small purple darken-4 ${props.taskObj.done ? "amber darken-4" : "green accent-4"} `}>
                    {props.taskObj.done ? "not done" : "done"}
                </a>
                <a href="#!" onClick={() => props.removeTask(props.taskObj)} className="grey-text btn btn-small btn-flat white" > delete </a>
            </div>

        </div>
    );

}

export default TodoListItem;