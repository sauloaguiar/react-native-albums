import React, { Component } from 'react'; 
import firebase from 'firebase';
import { Text } from 'react-native'; 
import { Button, Card, CardSection, Input } from './common';


export class LoginForm extends Component {
  state = { email: '', password: '', error: undefined };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: undefined });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {

      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.' });
          });
      });
  }

  render() {
    const { errorTextStyle } = style;
    return ( 
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'name@example.com'}
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>
        <CardSection>
          <Input 
            placeholder={'password'}
            label={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>
        {this.state.error && <Text style={errorTextStyle}>
          {this.state.error}
        </Text>
        }
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const style = {
  errorTextStyle: {

  }
};
