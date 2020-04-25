 var firebaseConfig = {
    apiKey: "AIzaSyC84sXhXVbVrWLM7nUQ9LckJPA1tRmeXRc",
    authDomain: "test-app-6ba7b.firebaseapp.com",
    databaseURL: "https://test-app-6ba7b.firebaseio.com",
    projectId: "test-app-6ba7b",
    storageBucket: "test-app-6ba7b.appspot.com",
    messagingSenderId: "459885096824",
    appId: "1:459885096824:web:2d2cf92b394f1f1300228d",
    measurementId: "G-MBDL44LVKY"
  };
  

var emailId;
  firebase.auth().onAuthStateChanged(async function (user) {
 
        if (user!=null) {
            window.user = user;
          emailId=user.email;
            
        } else{

         console.log("not found");
        }
        
    });


 
const db=firebase.firestore();

 function main(){
  document.getElementById("spinner").style.display="block";
  var c =document.getElementById("task").value;
  var date=document.getElementById("datepicker").value;
  var user=document.getElementById("options").value;
if(user == "Your Self")
{
   db.collection("tasks").add({
      name:c,
      date:date,
      user:"Your Self",
      email:emailId

  })
     .then(function() {
      console.log("Document successfully written!");
      document.getElementById("task").value="";
      document.getElementById("datepicker").value="";
      document.getElementById("options").value="";
      window.location="task.html";
  
     
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

}
   else{
     db.collection("tasks").add({
      name:c,
      date:date,
      user:user
  })
     .then(function() {
      console.log("Document successfully written!");
      document.getElementById("task").value="";
      document.getElementById("datepicker").value="";
      document.getElementById("options").value="";
      window.location="task.html";
  
     
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
   }
    


 }

 function logout(){
  firebase.auth().signOut();
  console.log("logout ");
   window.location="login.html";
  
 }



function main1() {
  document.getElementById('showme').style.display="block";
   document.getElementById('formme').style.display="none";


}

function done(){
  document.getElementById('showme').style.display="none";
   document.getElementById('formme').style.display="block";

}




function call(){
  var d= document.getElementById("Email").value;
  document.getElementById("spinner").style.display="block";
  var e= document.getElementById("Password").value;
  if(d==""||e==""){
    alert("please fill it");
    window.location="login.html";
  }
  else{
    
var auth = null;
firebase
  .auth()
  .signInWithEmailAndPassword(d, e)
  .then( function(user){
    console.log("Authenticated successfully with payload:", user);
    auth = user;
     window.location="index.html";

  })
  .catch(function(error){
    console.log("Login Failed!", error);
    alert("login Failed");
    window.location="login.html";
  });
 
}


}




function register(){
  var d= document.getElementById("email").value;
  var e= document.getElementById("pwd").value;
  var f= document.getElementById("name").value;
  document.getElementById("spinners").style.display="block";
  if(d==""&&e==""&&f==""){
    alert("please fill it");
  }
  else if(e.length<6){
alert("Password Too Short");
  }
  else{
    
  firebase.auth().createUserWithEmailAndPassword(d,e).catch(function(error) {
  console.log(error);
});
firebase.firestore().collection("registers").add({
    email:d,
    name:f
  })
   .then(function() {
      console.log(" successfully regsiterd");
      document.getElementById("email").value="";
  document.getElementById("pwd").value="";
  document.getElementById("name").value="";
  window.location="login.html";

  })
  .catch(function(error) {
      console.error("Error user not saved: ", error);
  });
   
  }
 }


 function usersave(){
  document.getElementById("spinner").style.display="block";
  var user=document.getElementById("user").value;
  
  if(user == ""){
    alert("Please Fill it");
  }
  else{
    firebase.firestore().collection("users").add({
      user:user
    })
     .then(function() {
      console.log("User  successfully written!");
      window.location="index.html";

  })
  .catch(function(error) {
      console.error("Error user not saved: ", error);
  });
  }
 }

var b=[];
 function datauser(){ 

const db=firebase.firestore();
   document.getElementById("options").innerHTML=" ";
firebase.firestore().collection("users")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.data());
                     b.push(doc.data().user); 
        });
        
           //document.getElementById("option").style.display="none";
         document.getElementById("options").innerHTML+='<option selected>'+"Your Self"+'</option><br>';
          for(var i=0;i<b.length;i++){
       document.getElementById("options").innerHTML+='<option>'+b[i]+'</option><br>';
    }

    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

}


