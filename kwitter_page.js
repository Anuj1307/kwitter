
//YOUR FIREBASE LINKS
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

room_name = localStorage.getItem("room_name")
user_name = localStorage.getItem("user_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
