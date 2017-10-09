'use strict';
/*
 * @file: Connection.js
 * @description: Connection file for the application
 * @date: 20.09.2017
 * @author: Lancy Goyal
 * */

const localhost = "192.168.0.26:3002",
    staging = "202.164.59.45:4004",
    live = "202.164.59.45:4004";

const running_url = staging,
    http_url = `http://${running_url}`,
    socket_url = `ws://${running_url}/websocket`,
    apiBase_url = `http://${running_url}/rest/v1/`,
    mediaBase_url = `http://${running_url}/store/files/uploads/`;

export default class Connection {

    static getResturl() {
        return apiBase_url;
    };

    static getSocketResturl() {
        return socket_url;
    };

    static getBaseUrl() {
        return http_url;
    };

    static getMedia(_id) {
        return mediaBase_url + _id;
    }

    static parseImgUrl(url) {
        if (url)
            return url.charAt(0) === '/' ? `${http_url}${url}` : url;
        else
            return {};
    };
}