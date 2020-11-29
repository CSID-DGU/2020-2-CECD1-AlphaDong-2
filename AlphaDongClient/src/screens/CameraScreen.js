import React, {useState} from 'react';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';

const View = styled.View`
  position: absolute;
  width: 100%;
  bottom: 96px;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  width: 90%;
  flex: 1;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const Button = styled.View`
  width: 100%;
  height: 64px;
  border-radius: 16px;
  background-color: white;
`;

const Touchable = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BtnText = styled.Text``;

export const CameraScreen = () => {
  const [camType, setCamType] = useState('back');
  const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고
  const totalWidth = Dimensions.get('window').width;

  const takePhoto = async () => {
    console.log('cameraRef', cameraRef);
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log('😻 data', data);
    }
  };

  return (
    <>
      <RNCamera
        ref={cameraRef}
        style={{
          width: '100%',
          height: '100%',
        }}
        captureAudio={false}
        type={camType}
      />
      <View>
        <ButtonContainer>
          <Touchable onPress={takePhoto}>
            <Button>
              <BtnText>사진 촬영</BtnText>
            </Button>
          </Touchable>
          <Touchable onPress={takePhoto}>
            <Button>
              <BtnText>사진 촬영</BtnText>
            </Button>
          </Touchable>
        </ButtonContainer>
      </View>
    </>
  );
};
