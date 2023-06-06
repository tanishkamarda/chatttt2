// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyB_OJMHFHtxpn1QjhbkvBY8rmHgV48d5Vg",
    authDomain: "chatboxapp-5b8c3.firebaseapp.com",
    databaseURL: "https://chatboxapp-5b8c3-default-rtdb.firebaseio.com",
    projectId: "chatboxapp-5b8c3",
    storageBucket: "chatboxapp-5b8c3.appspot.com",
    messagingSenderId: "189176970063",
    appId: "1:189176970063:web:f263250b1fb3a0f245e33a"
  };
  
  
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



