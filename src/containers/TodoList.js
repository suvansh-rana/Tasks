import React from "react";
import { connect } from "react-redux";
import { removeTask, toggleDone } from "../actions/todoActions";
import TodoListItem from "./TodoListItem";
import getTodos from "../helpers/getTodos";
import { Tabs } from "materialize-css";

function TodoList(props) {

    const todos = getTodos(props.todos, !props.remaining);

    return (
        <div className="row">
            <div className="col s12 l6 offset-l3">

                <div className="row"></div>

                {
                   todos.length > 0 ?

                        <div>
                            {todos.reverse().map(
                                taskObj =>
                                    <TodoListItem
                                        taskObj={taskObj}
                                        key={taskObj.id}
                                        removeTask={props.removeTask}
                                        toggleDone={props.toggleDone} />
                            )
                            }

                        </div>

                        :

                        <div className="card-panel center-align z-depth-0 white grey-text" >No tasks {props.remaining ? "remaining" : "done"} </div>

                }


            </div>
        </div>

    );

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {

    return {
        removeTask: taskObj => {
            dispatch(removeTask(taskObj));

        },
        toggleDone: taskObj => {
            dispatch(toggleDone(taskObj));

            const instance = Tabs.getInstance(
                document.querySelector("ul.tabs")
            );

            !taskObj.done ? instance.select("done") : instance.select("remaining");

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);