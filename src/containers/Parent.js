import React from "react";
import { connect } from "react-redux";

function Parent(props) {
    return (
        <div>
            <header>
                <nav className="nav-extended purple darken-4">

                    <div className="nav-wrapper center-align">
                        <a href="#!" className="brand-logo">Tasks</a>
                    </div>

                    <div className="nav-content">
                        <ul className="row tabs tabs-transparent">
                            <li className="tab col s4">
                                <a href="#remaining">Remaining  <span  className="right badge white-text "> {props.notDoneTodo.length} </span> </a>
                            </li>
                            <li className="tab col s4">
                                <a href="#done">Done <span  className="right badge white-text "> {props.doneTodo.length} </span> </a>
                               
                            </li>
                            <li className="tab col s4">
                                <a href="#create">Create</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main> {props.children} </main>
        </div>
    );
}

const mapStateToProps = state => {

    return {
        doneTodo: state.todos.filter(function (taskObj) {
            return taskObj.done;
        }),
        notDoneTodo: state.todos.filter(function (taskObj) {
            return !taskObj.done;
        })
    }
}


export default connect(mapStateToProps)(Parent);