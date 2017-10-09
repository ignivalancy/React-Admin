/*
 * @file: UserStorage.js
 * @description: Handle User storage for the application 
 * @date: 29.07.2017
 * @author: Jasdeep Singh
 * */

'use strict';

const USER = 'user';

const UserStorage = {

    isLoggedIn() {
        return JSON.parse(localStorage.getItem(USER));
    },

    loggedIn(data) {
        return localStorage.setItem(USER, JSON.stringify(data));
    },

    // updateData(data) {
    //     let obj = JSON.parse(localStorage.getItem(USER));
    //     let newData = Object.assign(obj,data);
    //     return localStorage.setItem(USER, JSON.stringify(newData));
    // },

    logout() {
        return localStorage.clear();
    }

};

module.exports = UserStorage;
