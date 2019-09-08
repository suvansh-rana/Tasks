import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/todoActions";

import { Tabs } from "materialize-css";

function TodoInput(props) {

    return (
        <div className="row" >
            <div className="row"></div>
            <div className="col s12 m6 offset-m3">
                <form action="POST" className="card-panel" onSubmit={(ev) => props.addTask(ev)}>

                    <div className="input-field">
                        <label htmlFor="title">Task title</label>
                        <input type="text" name="title" required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Task content</label>
                        <textarea required className="materialize-textarea" name="content"></textarea>
                    </div>

                    <div className="right-align">
                        <button type="submit" className="btn btn-small waves-effect waves-light blue darken-4">Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        addTask: ev => {
            ev.preventDefault();

            const taskTitleInput = ev.target.elements.title;
            const taskContentInput = ev.target.elements.content;

            const taskTitle = taskTitleInput.value;
            const taskContent = taskContentInput.value;

            const instance = Tabs.getInstance(
                document.querySelector("ul.tabs")
            );

            instance.select("remaining");


            if (taskTitle.length && taskContent.length) {
                dispatch(addTask(taskTitle, taskContent));
                taskTitleInput.value = "";
                taskContentInput.value = "";
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);