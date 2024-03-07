
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBuQJ90X2bJ-kPykL3ernj0UkXDrxU8OVo",
      authDomain: "kwitter-296cc.firebaseapp.com",
      databaseURL: "https://kwitter-296cc-default-rtdb.firebaseio.com",
      projectId: "kwitter-296cc",
      storageBucket: "kwitter-296cc.appspot.com",
      messagingSenderId: "1009301178610",
      appId: "1:1009301178610:web:9bd9b58efb69ace5b9686b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome "+ name+"!"
    function addRoom()
{
room_name = document.getElementById("room_name").value

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(name)
{
      console.log(name);
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

