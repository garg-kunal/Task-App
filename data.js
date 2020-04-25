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




 
var a=[];
var da=[];
var ca=[];
var x=[];
var y=[];
var z=[];
      // completed
var u=[];
var v=[];
var emal=null;
function data(){ 
const db=firebase.firestore();
   document.getElementById("text").innerHTML=" ";
db.collection("tasks")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            
            console.log(doc.data());
            
            a.push(doc.data().name);
            da.push(doc.data().date);
            ca.push(doc.data().user);
           
           
        });
       
         document.getElementById("spinner").style.display="none";
         document.getElementById("result").style.display="block";
          for(var i=0;i<a.length;i++){
           
            document.getElementById("sno").innerHTML+='<div class="card"><div class="row borderless"><div class="col-md-2 text-center">'+i+"</div>"+' <div class="col-md-2 text-center"> '+a[i]+'</div>'+
            '<div class="col-md-2  text-center">'+ca[i]+'</div>'+' <div class="col-md-2 text-center">'+da[i]+'</div>'+'<div class="col-md-4">You Check Your Own Task</div>'+"</div></div></div><br>";
      
    }
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  var emailId;  
firebase.auth().onAuthStateChanged(async function (user) {
 
        if (user!=null) {
           
          emailId=user.email;
        
            //console.log(emailId);
        firebase.firestore().collection("tasks").where("email","==",user.email)
      .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.data());
            x.push(doc.data().name);
            y.push(doc.data().date);
            z.push(doc.data().user);
           
        });
          document.getElementById("spinner").style.display="none";
         document.getElementById("result").style.display="block";
           document.getElementById("text").innerHTML=" ";
          for(var i=0;i<x.length;i++){
            console.log(x.length);
            document.getElementById("no").innerHTML+='<div class="card"><div class="row borderless"><div class="col-md-2 text-center">'+i+"</div>"+' <div class="col-md-2 text-center"> '+x[i]+'</div>'+
            '<div class="col-md-2  text-center">'+y[i]+'</div>'+' <div class="col-md-2 text-center">'+z[i]+'</div>'+'<div class="col-md-4"><input onclick="correctit();" type="checkbox" id="check"/><input type="number" style="display:none" id="number"/></div>'+"</div></div></div><br>";
      document.getElementById("number").value=i;
    }
    });

        } 
        
    });

 var emailId;  
firebase.auth().onAuthStateChanged(async function (user) {
 
        if (user!=null) {
           
          emailId=user.email;
      firebase.firestore().collection("complete").where("email","==",user.email)
      .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.data());
             v.push(doc.data().completed);
            u.push(doc.data().date);
           
        });
        //console.log("bcyuc");
        document.getElementById("comp").innerHTML="";
          document.getElementById("spinner").style.display="none";
         document.getElementById("result").style.display="block";
           document.getElementById("text").innerHTML=" ";
          for(var i=0;i<v.length;i++){
           
            document.getElementById("comp").innerHTML+='<div class="card card-body">'+i+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+v[i]+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+u[i]+"</div><br>";
      
    }
    });

        } 
        
    });
      

}

function logout(){
  firebase.auth().signOut();
  console.log("logout ");
   window.location="login.html";
  
 }


function checkall(){
 
    document.getElementById("all").style.display="block";
    document.getElementById("my").style.display="none";

}
function my(){
    document.getElementById("my").style.display="block";
    document.getElementById("all").style.display="none";

 

}


function correctit(){
  var checkBox = document.getElementById("check");
 emal=email;
  if (checkBox.checked == true){
   var a=document.getElementById("number").value;
   
var jobskill_query = firebase.firestore().collection('tasks').where('user','==',"Your Self").where("name","==",x[a]);
jobskill_query.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    doc.ref.delete();
  });
});
firebase.firestore().collection("complete").add({
    completed:x[a],
    date:y[a],
    email:user.email
})
.then(function() {
      console.log("Document successfully written!");
      window.location="task.html";
  
     
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });


  } else {
    alert("unchecked");
  }
}
