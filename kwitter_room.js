var firebaseConfig = {

    apiKey: "AIzaSyCfPS_J-lxoKGAMzbL6rL7PGWjGozFpqZY",
  
    authDomain: "kwitter-8d5c3.firebaseapp.com",
  
    databaseURL: "https://kwitter-8d5c3-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-8d5c3",
  
    storageBucket: "kwitter-8d5c3.appspot.com",
  
    messagingSenderId: "193138578699",
  
    appId: "1:193138578699:web:4201488ac7d9a6e2e3fe0e"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    })

    localStorage.setItem("room_name" , room_name);

    window.location = "kwitter_page.html";
    
  }
  getRoom();
  function getRoom() {
    firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = ""
      snapshot.forEach(function(childSnapshot) {
        var Room_names = childSnapshot.key;
        row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  }
  
  
