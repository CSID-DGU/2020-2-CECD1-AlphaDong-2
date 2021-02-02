import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import {CustomButton} from '../components/CustomButton';
import CenterModal from '../components/CenterModal';
import CameraGuide from '../components/CameraGuide';
import FastImage from 'react-native-fast-image';

const ButtomContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 88px;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  width: 90%;
  flex: 1;
`;

const ModalText = styled.Text`
  font-size: 20px;
`;

const ModalBtnContainer = styled.View`
  width: 100%;
  margin-top: 16px;
  display: flex;
  align-items: flex-end;
  margin-right: 32px;
  margin-bottom: 8px;
  height: 64px;
`;

export const CameraScreen = ({navigation}) => {
  const [camType, setCamType] = useState('back');
  const [isModal, setModal] = useState(true);
  const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고
  const totalWidth = Dimensions.get('window').width;
  // CameraRoll.getAlbums().then((r)=>console.log(r));
  const takePhoto = async () => {
    console.log('cameraRef', cameraRef);
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log('😻 data =====>', data);
      navigation.navigate('imageDetail', {imagePath: data.uri});
      if (data) {
        const result = await CameraRoll.save(data.uri);
        console.log('🍕 result ========>', result);
      }
    }
  };

  return (
    <>
      <CenterModal isModal={isModal} onPress={() => setModal(false)}>
        <FastImage
          source={require('../../static/images/rotatedevice.gif')}
          style={{height: 200, width: 200}}
        />
        <ModalText>가로로 촬영해 주세요</ModalText>
        <ModalBtnContainer>
          <CustomButton
            onPress={() => setModal(false)}
            title="알겠어요"
            width="45%"
          />
        </ModalBtnContainer>
      </CenterModal>
      <RNCamera
        ref={cameraRef}
        style={{
          width: '100%',
          height: '100%',
        }}
        captureAudio={false}
        type={camType}
      />
      <CameraGuide />
      <ButtomContainer>
        <ButtonContainer>
          <CustomButton onPress={takePhoto} title="SHOOT" />
        </ButtonContainer>
      </ButtomContainer>
    </>
  );
};
