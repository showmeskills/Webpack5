import Login from "@/components/Login";
import $ from "jquery";
import "./assets/scss/index.scss";
$(document).ready(function () {
    const login = new Login();
    login.action();
})

