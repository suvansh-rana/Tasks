import React from "react";
import { connect } from "react-redux";

function Parent(props) {
    return (
        <div>
            <header>
                <nav className="nav-extended white">

                    <div className="nav-wrapper">
                        <a href="#!" className="left brand-logo black-text">Tasks</a>
                        <a href="#!" id="install" className="right hide sidenav-trigger"><i className="material-icons black-text">add_to_home_screen</i></a>
                    </div>

                    <div className="nav-content">
                        <ul className="row tabs tabs-transparent">
                            <li className="tab col s4">
                                <a href="#remaining" className="black-text" >
                                    Remaining  
                                    {props.notDoneTodo.length ? <span  className="right badge white-text"> { props.notDoneTodo.length } </span>  : "" }
                                </a>
                            </li>
                            <li className="tab col s4">
                                <a href="#done">
                                    Done
                                    {props.doneTodo.length ? <span  className="right badge white-text"> { props.doneTodo.length } </span>  : "" }
                                </a>
                               
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