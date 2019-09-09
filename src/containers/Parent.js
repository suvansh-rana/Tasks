import React from "react";
import { connect } from "react-redux";

function Parent(props) {
    return (
        <div>
            <header>
                <nav className="nav-extended white">

                    <div className="nav-wrapper">
                        <a href="#!" className="left brand-logo black-text">Tasks</a>
                        <a href="#!" className="right sidenav-trigger dropdown-trigger" data-target="more-options" >
                            <i className="material-icons black-text">more_vert</i>
                        </a>
                    </div>

                    <ul id='more-options' className='dropdown-content'>
                        <li id="install" className="hide">
                            <a href="#!" className="black-text" >
                                <i className="material-icons black-text">add_to_home_screen</i>Add to home screen
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/suvansh-rana" className="black-text" >
                                <i className="material-icons black-text">info</i>About Creator
                            </a>
                        </li>
                    </ul>

                    <div className="nav-content">
                        <ul className="row tabs tabs-transparent">
                            <li className="tab col s4 l2 offset-l3">
                                <a href="#remaining" className="black-text" >
                                    Remaining
                                    {props.notDoneTodo.length ? <span className="right badge white-text"> {props.notDoneTodo.length} </span> : ""}
                                </a>
                            </li>
                            <li className="tab col s4 l2">
                                <a href="#done">
                                    Done
                                    {props.doneTodo.length ? <span className="right badge white-text"> {props.doneTodo.length} </span> : ""}
                                </a>

                            </li>
                            <li className="tab col s4 l2">
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