// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyAJv0ca2jbrICxz_fHRy8qwPDv2n5saVvw",
    authDomain: "indexiotlight101.firebaseapp.com",
    databaseURL: "https://indexiotlight101-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "indexiotlight101",
    storageBucket: "indexiotlight101.appspot.com",
    messagingSenderId: "274492003084",
    appId: "1:274492003084:web:a4d7dc8591b1c90654af29",
    measurementId: "G-9DP7V2HHND"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  $(document).ready(function(){
    var database = firebase.database();
    var ledStatus;

    database.ref().on("value", function(snap){
      ledStatus = snap.val().ledStatus;
      if(ledStatus == 1){
        $(".lightStatus").text("The light is on");
      } else if(ledStatus == 0){
        $(".lightStatus").text("The light is off");
      }
    });

    $(".lightButton").click(function(){
      var firebaseRef = firebase.database().ref().child("ledStatus");
      firebaseRef.set(1);
      ledStatus = 1;
    });

    $(".lightOff").click(function(){
      var firebaseRef = firebase.database().ref().child("ledStatus");
        firebaseRef.set(0);
        ledStatus = 0;
    });
  });