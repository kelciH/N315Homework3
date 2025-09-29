import {changePage} from "../model/model.js";

function initListeners() {
    $("nav a").on("click", (e) => {
        e.preventDefault();
        let btnID = e.currentTarget.id;
        console.log(btnID);
        changePage(btnID);
    })
}
 
$(document).ready(function () {
    changePage("Home");
    initListeners();
});