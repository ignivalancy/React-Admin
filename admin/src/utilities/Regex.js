/*
 * @file: Regex.js
 * @description: Regex used for validation in application.
 * @date: 16.08.2017
 * @author: Nishant Singh
 * */

var Regex = {
    validateEmail: function(val) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
    },
    validateMultipleEmail: function(val) {
        return /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;,.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/.test(val);
    },
    validateMobile: function(val) {
        return /^\+?\d{9,12}$/.test(val);
    },
    
    validateFreeSpace: function(val) {
        return /^$|^[^\s]+(\s+[^\s]+)*$/.test(val);
    },
    validateMobileWithoutCC: function(val) {
        return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(val);
    },
    validateString: function(val) {
        return /^\S[a-zA-Z\x20]{0,25}$/.test(val);
    },
    validatePassword: function(val) {
        return /^(?=.*[A-Za-z])(?=.*[0-9!@#$%^&*_])[A-Za-z0-9!@#$%^&*_]{8,32}$/.test(val);
    },
    validateNumbers: function(val) {
        return /^[0-9]{0,}$/.test(val);
    },
    validateInteger: function(val) {
        return /^\d*[1-9]\d*$/.test(val);
    },
    validateURL: function(url) {
        return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(url);
    },
    validatePrice(val) {
        return /^(\d*([.,](?=\d{1}))?\d+)?$/.test(val);
    },
    validateAlphaNumberic(val) {
        return /^[a-zA-Z0-9]{0,20}$/.test(val);
    },
    getNumbericValuesFromString(val) {
        return val.match(/^\d+|\d+\b|\d+(?=\w)/g);
    }
}

module.exports = Regex
