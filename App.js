  
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  
  
  if(firebase.apps.length === 0){

  var firebaseConfig = {
    apiKey: "AIzaSyCc6hpg8BZXSKyPrumNgDc-eCAiNXDe4yc",
    authDomain: "rn-todo-notes-app.firebaseapp.com",
    databaseURL: "https://rn-todo-notes-app.firebaseio.com",
    projectId: "rn-todo-notes-app",
    storageBucket: "rn-todo-notes-app.appspot.com",
    messagingSenderId: "1020152054020",
    appId: "1:1020152054020:web:fee318f61ebc09c2dc1051"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
firebase.auth().onAuthStateChanged((user) => {
  if(user === null) {
    setUserLoggedIn(false)
  } else {
    setUserLoggedIn(true)
  }
})

if(userLoggedIn) {
  return (
    <View style={styles.container}>
      <NotesScreenComponent/>
    </View>
  );
} else {
  return (
    <View style={styles.container}>
      <LoginScreenComponent/>
    </View>
  );
}


return (
  <View style={styles.container}>
    {/* <NotesScreenComponent/> */}
    <LoginScreenComponent/>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
});