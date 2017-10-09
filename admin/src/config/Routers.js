/*
 * @file: Routers.js
 * @description: Defined all routers
 * @date: 09.10.2017
 * @author: Jasdeep Singh
 * */

/************ React Pages  *****************/
import React from "react";
import { Route, Router } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import Icons from "../containers/Icons";
import Maps from "../containers/Maps";
import Notifications from "../containers/Notifications";
import TableList from "../containers/TableList";
import Typography from "../containers/Typography";
import Upgrade from "../containers/Upgrade";
import UserProfile from "../containers/UserProfile";
import Footer from "../components/Footer";
import Header from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const Routers = store => {
    const state = store.store.getState();  
    /*********** Check authentications ***********/
    const requireAuth = () => {
        if (!state.user.loggedIn) {
            window.location.href = "/";
        }

    };


    return (
         <div className="wrapper">
          <Header/>
            <div className="main-panel">           
            <RightSidebar/>
            <Route exact={true} path="/dashboard" component={Dashboard}/> 
             <Route exact path="/profile" component={UserProfile}/> 
             <Route exact path="/table" component={TableList}/> 
             <Route exact path="/typography" component={Typography}/> 
             <Route exact path="/icons" component={Icons}/>
             <Route exact path="/notifications" component={Notifications}/>
             <Route exact path="/upgrade" component={Upgrade}/>
             <Route exact path="/maps" component={Maps}/>
            <Footer />
          </div>
        </div>
    );
};

export default Routers;