
var firebaseConfig = {
      apiKey: "AIzaSyAz01UyVAPr_9LTcB9P4LEuoDJ6Z0vaAJM",
      authDomain: "kwitter-42b61.firebaseapp.com",
      databaseURL: "https://kwitter-42b61-default-rtdb.firebaseio.com",
      projectId: "kwitter-42b61",
      storageBucket: "kwitter-42b61.appspot.com",
      messagingSenderId: "470075647282",
      appId: "1:470075647282:web:1153dd56e5de9dca0de32b",
      measurementId: "G-DF6Y45WNRE"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");

     function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "addding room name"
      });
  localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}