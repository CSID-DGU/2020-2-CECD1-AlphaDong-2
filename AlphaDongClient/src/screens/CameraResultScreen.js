import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {StyleSheet, View, Image, ToastAndroid} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';
import ImageResizer from 'react-native-image-resizer';
import CameraRoll, {save} from '@react-native-community/cameraroll';
import {CustomButton} from '../components/CustomButton';
import usePostVinImage from '../lib/hooks/usePostVinImage';
import {formattedTime} from '../lib/utils';

const ButtonContainer = styled.View`
  display: flex;
  width: 100%;
  margin-top: 16px;
  position: absolute;
  bottom: 88px;
  padding: 0px 16px;
  align-items: flex-end;
`;

const LoadingContainer = styled.View`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const IndicatorWrapper = styled.View`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #000000;
  opacity: 0.7;
  border-radius: 40px;
`;

const ImageContainer = styled.View`
  display: flex;
  justify-content: center;
  height: 100%;
  padding-bottom: 200px;
`;

const LoadingText = styled.Text`
  position: absolute;
`;

export const CameraResultScreen = ({route, navigation}) => {
  const [imagePath, setImagePath] = useState(route.params.imagePath);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [isLoading, callBackAPI] = usePostVinImage();
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

  const sendImage = () => {
    const formData = new FormData();
    formData.append('files', {
      name: 'testimage',
      type: 'image/jpeg',
      uri: imagePath,
    });
    callBackAPI(formData)
      .then((res) => {
        ToastAndroid.show(
          `${res.data.results} 인식되었습니다.`,
          ToastAndroid.SHORT,
        );
      })
      .catch((e) => {
        ToastAndroid.show(`에러가 발생했습니다.\n${e}`, ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <LoadingContainer>
          <IndicatorWrapper />
          <BallIndicator color="#ffffff" />
        </LoadingContainer>
      )}
      <ImageContainer>
        <AutoHeightImage
          source={{uri: imagePath}}
          width={Dimensions.get('window').width}
        />
      </ImageContainer>
      <ButtonContainer>
        <CustomButton title="Rotate" onPress={rotateImage} width="50%" />
        <CustomButton title="Detect" onPress={sendImage} width="50%" />
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
