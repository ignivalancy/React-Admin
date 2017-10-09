/* 
      *                                                            *
    *****                                                        *****                             
      *                                                            *
        ==========================================================
        ==========                                      ==========
        ==========       Page For LeftSidebar           ==========
        ==========                                      ==========
        ==========================================================
      *                                                            *
    *****                                                        *****   
      *                                                            *
*/
import React, { Component } from "react";
import { Link } from "react-router-dom";
class LeftSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div
                className="sidebar"
                data-color="purple"
                data-image="../assets/img/sidebar-1.jpg"
            >
                <div className="logo">
                    <a
                        href="#"
                        className="simple-text"
                    >
                        Igniva React Admin
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className={window.location.pathname=="/dashboard" ? "active" : ""}>
                            <Link to="/dashboard">
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className={window.location.pathname=="/profile" ? "active" : ""}>
                            <Link to="/profile">
                                <i className="material-icons">person</i>
                                <p>User Profile</p>
                            </Link>
                        </li>
                        <li className={window.location.pathname=="/table" ? "active" : ""}>
                            <Link to="/table">
                                <i className="material-icons">content_paste</i>
                                <p>Table List</p>
                            </Link>
                        </li>
                        <li className={window.location.pathname=="/typography" ? "active" : ""}>
                            <Link to="/typography">
                                <i className="material-icons">library_books</i>
                                <p>Typography</p>
                            </Link>
                        </li>
                        <li className={window.location.pathname=="/icons" ? "active" : ""}>
                            <Link to="./icons">
                                <i className="material-icons">bubble_chart</i>
                                <p>Icons</p>
                            </Link>
                        </li>
                        <li className={window.location.pathname=="/maps" ? "active" : ""}>
                            <Link to="/maps">
                                <i className="material-icons">location_on</i>
                                <p>Maps</p>
                            </Link>
                        </li>
                        <li className={window.location.pathname=="/notifications" ? "active" : ""}>
                            <Link to="/notifications">
                                <i className="material-icons text-gray">
                                    notifications
                                </i>
                                <p>Notifications</p>
                            </Link>
                        </li>
                        <li className="active-pro">
                            <Link to="upgrade">
                                <i className="material-icons">unarchive</i>
                                <p>Upgrade to PRO</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default LeftSidebar;