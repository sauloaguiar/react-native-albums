import React from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header label={'Albums'} />
    <LoginForm />
  </View>
);

export default App;

/**/
