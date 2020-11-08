import React from 'react';
import styled from 'styled-components';
import {RNCamera} from 'react-native-camera';

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 10px solid gray;
  background-color: pink;
`;

const Touchable = styled.TouchableOpacity``;

export const CameraScreen = () => {
  const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고

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
          width: 200,
          height: 200,
        }}
        captureAudio={false}
      />
      <View>
        <Touchable onPress={takePhoto}>
          <Button />
        </Touchable>
      </View>
    </>
  );
};
