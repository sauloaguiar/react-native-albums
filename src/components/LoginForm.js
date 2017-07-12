import React, { Component } from 'react'; 
import firebase from 'firebase';
import { Text } from 'react-native'; 
import { Button, Card, CardSection, Input, Spinner } from './common';


export class LoginForm extends Component {
  state = { email: '', password: '', error: undefined, loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: undefined, loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
      });
  }

  onLoginFailed() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    });
  }
  
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: undefined
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
          {this.state.loading ?
          <Spinner size={'small'} />
          :
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
          }
        </CardSection>
      </Card>
    );
  }
}

const style = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
