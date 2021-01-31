import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  Button,
  Alert,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';
import ImageResizer from 'react-native-image-resizer';
import CameraRoll from '@react-native-community/cameraroll';

export const ImageDetailScreen = ({route}) => {
  const [imagePath, setImagePath] = useState(route.params.imagePath);

  const rotateImage = () => {
    ImageResizer.createResizedImage(imagePath, 100, 100, 'JPEG', 100, 90).then(
      (r) => {
        setImagePath(r.uri);
      },
    );
  };

  const saveImage = () => {
      CameraRoll.save(imagePath);
  }

  return (
    <View style={styles.container}>
      <Text>ImageDetail</Text>
      <AutoHeightImage
        source={{uri: imagePath}}
        width={Dimensions.get('window').width}
      />
      <Button title="회전" onPress={rotateImage} />
      <Button title="저장" onPress={saveImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
