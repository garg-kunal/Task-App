
function main1() {
  document.getElementById('showme').style.display="block";
   document.getElementById('formme').style.display="none";


}

function done(){
  document.getElementById('showme').style.display="none";
   document.getElementById('formme').style.display="block";

}




function call(){
  document.getElementById("spinner").style.display="block";
  var d= document.getElementById("Email").value;
  var e= document.getElementById("Password").value;
  if(d==""||e==""){
    alert("please fill it");
  }
  else{
    
    firebase.auth().signInWithEmailAndPassword(d,e).
    catch(function(error) {
  console.log(e.message);

});

var user=firebase.auth().currentuser;
if(user){
   window.location.href="index.html";
    console.log("login");
}
else{
  window.location.href="login.html";
}
  
  } 
}







function register(){
  var d= document.getElementById("email").value;
  var e= document.getElementById("pwd").value;
  if(d==""||e==""){
    alert("please fill it");
  }
  else{
     document.getElementById("Email").value="";
  document.getElementById("Password").value="";
  firebase.auth().createUserWithEmailAndPassword(d,e).catch(function(error) {
  alert("registerde");
});
  }
 }