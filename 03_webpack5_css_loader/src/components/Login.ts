import $ from "jquery";
function Login(){

}

Login.prototype.action = function(){
  $("#app").html("terry");
  $("#app").addClass("title");
  $("#app").append(`<h1>this is demo</h1>`)
}

export default Login;