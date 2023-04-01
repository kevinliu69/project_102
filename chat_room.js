var firebaseConfig = {
    apiKey: "AIzaSyAk_gg7lHoMJdVliaKbiUdJ35id.Dg-P9s",
    authDomain: "social-e5855.firebaseapp.com",
    databaseURL: "https://social-e5855-default-rtdb.firebaseio.com",
    projectId: "social-e5855",
    stroageBucket: "social-e5855.appspot.com",
    messagingSenderId: "671543009162",
    appId: "1:67154300162:web:a881fdddf02bf05c08b273",
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();