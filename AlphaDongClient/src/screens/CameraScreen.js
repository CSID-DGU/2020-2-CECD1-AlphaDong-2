import React, {useState} from 'react';
import styled from 'styled-components';
import {Dimensions, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";

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
  background-color: #ebdf37;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Touchable = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GuideLine = styled.View`
  width: 8px;
  height: 56px;
  background-color: #fff;
  position: absolute;
  border-radius: 8px;
`;

const GuideLineVert = styled.View`
  width: 56px;
  height: 8px;
  background-color: #fff;
  position: absolute;
  border-radius: 8px;
`;

const GuideContainerTopLeft = styled.View`
  position: absolute;
  top: 24px;
  left: 24px;
`;
const GuideContainerTopRight = styled.View`
  position: absolute;
  top: 24px;
  right: 24px;
  transform: rotate(90deg);
`;
const GuideContainerBottomLeft = styled.View`
  position: absolute;
  bottom: 184px;
  left: 24px;
  transform: rotate(270deg);
`;
const GuideContainerBottomRight = styled.View`
  position: absolute;
  bottom: 184px;
  right: 24px;
  transform: rotate(180deg);
`;

const Guide = (pos) => {
  return (
    <>
      <GuideContainerTopLeft>
        <GuideLine />
        <GuideLineVert />
      </GuideContainerTopLeft>
      <GuideContainerTopRight>
        <GuideLine />
        <GuideLineVert />
      </GuideContainerTopRight>
      <GuideContainerBottomLeft>
        <GuideLine />
        <GuideLineVert />
      </GuideContainerBottomLeft>
      <GuideContainerBottomRight>
        <GuideLine />
        <GuideLineVert />
      </GuideContainerBottomRight>
    </>
  );
};

const BtnText = styled.Text``;

export const CameraScreen = ({navigation}) => {
  const [camType, setCamType] = useState('back');
  const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고
  const totalWidth = Dimensions.get('window').width;
  CameraRoll.getAlbums().then((r)=>console.log(r));
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
        console.log("🍕 result ========>", result);
      }
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
      <Guide />
      <View>
        <ButtonContainer>
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
