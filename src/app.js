import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

export class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDra4XmImEgZTVijP3J9GkuNc2s1liSiMI',
      authDomain: 'albums-22316.firebaseapp.com',
      databaseURL: 'https://albums-22316.firebaseio.com',
      projectId: 'albums-22316',
      storageBucket: 'albums-22316.appspot.com',
      messagingSenderId: '145925540170'
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header label={'Albums'} />
        <LoginForm />
      </View>
    );
  }
} 
