import React from 'react';
import { Text, View, Image } from 'react-native'; 
import { Card } from './Card';
import { CardSection } from './CardSection';

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextTitleStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1
  }
};

export const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextTitleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri: image }}
          style={styles.imageStyle}
        />
      </CardSection>
    </Card>
  );
};
