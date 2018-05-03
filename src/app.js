import React from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import { AlbumList } from './components/common/AlbumList';

export const App = () => (
    <View style={{ flex: 1 }}>
      <Header label={'Albums'} />
      <AlbumList />
    </View>
  );

