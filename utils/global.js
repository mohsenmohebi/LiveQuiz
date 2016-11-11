'use strict';
export function get(url){
return fetch(url)
        .then((response) => response.json());
}

var userobj = null;
export function setUser(user){
    userobj = user;
}
export function getUser(){
    return userobj;
}

export function getBaseUrl(){
    return 'http://demo.ctasp.com/MillAPPDev/#/';
}


