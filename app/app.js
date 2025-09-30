import {route} from "../model/model.js";

function initListeners() {
    // $("nav a").on("click", (e) => {
    //     e.preventDefault();
    //     let btnID = e.currentTarget.id;
    //     console.log(btnID);
    //     changePage(btnID);
    // })
}

function initRouting() {
    $(window).on("hashchange", route);
    route();
}

 
$(document).ready(function () {
    initRouting();
    initListeners();
});