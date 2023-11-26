var firebaseConfig = {
    apiKey: "AIzaSyCL7po1jlCW5tegLTxrPLaxaq4fEOK14a4",
    authDomain: "letschatapp-fe0a5.firebaseapp.com",
    databaseURL: "https://letschatapp-fe0a5-default-rtdb.firebaseio.com",
    projectId: "letschatapp-fe0a5",
    storageBucket: "letschatapp-fe0a5.appspot.com",
    messagingSenderId: "604936130406",
    appId: "1:604936130406:web:c1205fe277d84984acc2a7",
    measurementId: "G-1JTS0HMG73"
  };
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+ user_name+"!";

function addUser() {
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({ purpose : "Adding user" });
}

function removeUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}