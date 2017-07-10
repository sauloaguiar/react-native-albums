import React from 'react';
import { View } from 'react-native';
import Header from './components/header';
import AlbumList from './components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header label={'Albums'} />
    <AlbumList />
  </View>
);

export default App;
