import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {StyleSheet, View, Image, ToastAndroid} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';
import ImageResizer from 'react-native-image-resizer';
import CameraRoll, {save} from '@react-native-community/cameraroll';
import {CustomButton} from '../components/CustomButton';
import axios from 'axios';

const ButtonContainer = styled.View`
  display: flex;
  width: 100%;
  margin-top: 16px;
  position: absolute;
  bottom: 88px;
  padding: 0px 16px;
  align-items: flex-end;
  background-color: rebeccapurple;
`;

const ImageContainer = styled.View`
  display: flex;
  justify-content: center;
  height: 100%;
  padding-bottom: 200px;
`;

export const CameraResultScreen = ({route}) => {
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

  const sendIamge = () => {
    const formData = new FormData();
    formData.append('files', {
      name: 'testimage',
      type: 'image/jpeg',
      uri: imagePath,
    });
    axios
      .post('http://52.78.241.187:5001/detect', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        ToastAndroid.show(
          `${res.data.vin_num} 저장되었습니다.`,
          ToastAndroid.SHORT,
        );
      })
      .catch((error) => {
        ToastAndroid.show(`${error}`, ToastAndroid.SHORT);
      });
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
        <CustomButton title="Rotate" onPress={rotateImage} width="50%" />
        <CustomButton title="Save" onPress={sendIamge} width="50%" />
      </ButtonContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
