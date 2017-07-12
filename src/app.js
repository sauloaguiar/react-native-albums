import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Spinner, Header } from './components/common';
import { LoginForm } from './components/LoginForm';

export class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDra4XmImEgZTVijP3J9GkuNc2s1liSiMI',
      authDomain: 'albums-22316.firebaseapp.com',
      databaseURL: 'https://albums-22316.firebaseio.com',
      projectId: 'albums-22316',
      storageBucket: 'albums-22316.appspot.com',
      messagingSenderId: '145925540170'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header label={'Albums'} />
        <View style={{ marginTop: 5, height: 45 }} > 
          {this.renderContent()}
        </View>
        
      </View>
    );
  }
} 
