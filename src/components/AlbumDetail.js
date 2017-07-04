import React from 'react';
import { Text } from 'react-native'; 
import { Card } from './Card';
import { CardSection } from './CardSection';

export const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};
