const firebaseConfig = {
      apiKey: "AIzaSyBvZcS7jTE_6jI6K4hO3xbgq7sqkKuCZWI",
      authDomain: "goofy-ah-64faf.firebaseapp.com",
      databaseURL: "https://goofy-ah-64faf-default-rtdb.firebaseio.com",
      projectId: "goofy-ah-64faf",
      storageBucket: "goofy-ah-64faf.appspot.com",
      messagingSenderId: "1081301442035",
      appId: "1:1081301442035:web:cb93ad3a8c4056a4638686"
    };
    firebase.initializeApp(firebaseConfig)
    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name + " ! "
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names)
      row = "<div class='Room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)>#"+ Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();

function addRoom()
{
      Room_names = document.getElementById("room_name").value

      firebase.database().ref("/").child(Room_names).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", Room_names)

      window.location = "kwitter_page.html"
}

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}