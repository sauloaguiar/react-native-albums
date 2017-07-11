import React, { Component } from 'react'; 
import { Button, Card, CardSection, Input } from './common';

export class LoginForm extends Component {
  state = { email: '', password: '' };
  render() {
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
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

