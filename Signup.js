import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import HomeScreen from './HomeScreen';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB-A-aSGxVSgWcPNvl7uDYHVwBzqst4FQw",
  authDomain: "mybooking1-2ede2.firebaseapp.com",
  projectId: "mybooking1-2ede2",
  storageBucket: "mybooking1-2ede2.appspot.com",
  messagingSenderId: "1073374918140",
  appId: "1:1073374918140:android:fa6dc6b1d9d150e1b22e79",
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const handleSignup = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User account created & signed in!");
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={() => handleSignup(email, password)} />
    </View>
    );
};

export default Signup;
