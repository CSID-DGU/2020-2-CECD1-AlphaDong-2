import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';
import ImageResizer from 'react-native-image-resizer';
import CameraRoll from '@react-native-community/cameraroll';

const ButtonContainer = styled.View`
  display: flex;
  width: 100%;
  margin-top: 16px;
  position: absolute;
  bottom: 88px;
  padding: 0px 16px;
`;
const Touchable = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;
const Button = styled.View`
  width: 100%;
  height: 64px;
  border-radius: 16px;
  background-color: #2C3351;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.View`
  display: flex;
  justify-content: center;
  height: 100%;
  padding-bottom: 200px;
`;
const BtnText = styled.Text`
    color: #FAFAFA;
    font-size: 16px;
`;


export const ImageDetailScreen = ({route}) => {
  const [imagePath, setImagePath] = useState(route.params.imagePath);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    Image.getSize(imagePath, (width, height) => {
      setWidth(width);
      setHeight(height);
    });
  }, [imagePath]);

  const rotateImage = () => {
    ImageResizer.createResizedImage(
      imagePath,
      height,
      width,
      'JPEG',
      100,
      90,
    ).then((r) => {
      setImagePath(r.uri);
    });
  };

  const saveImage = () => {
    CameraRoll.save(imagePath);
    ToastAndroid.show(
      `${width} X ${height} 저장되었습니다.`,
      ToastAndroid.SHORT,
    );
  };

  return (
    <View style={styles.container}>
      <ImageContainer>
        <AutoHeightImage
          source={{uri: imagePath}}
          width={Dimensions.get('window').width}
        />
      </ImageContainer>
      <ButtonContainer>
        <Touchable onPress={rotateImage}>
          <Button>
            <BtnText>Rotate</BtnText>
          </Button>
        </Touchable>
        <Touchable onPress={saveImage}>
          <Button>
            <BtnText>Save</BtnText>
          </Button>
        </Touchable>
      </ButtonContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F5',
  },
});
