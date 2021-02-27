import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Modal,
  BackHandler,
  Alert,
} from 'react-native';
import styled from 'styled-components';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageContainer = styled.TouchableOpacity``;

const ContentContainer = styled.View`
  margin-top: 16px;
  padding: 0 16px;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const VinNumberContainer = styled.View`
  /* background-color: red; */
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: #f1f3f7;
  margin-bottom: 16px;
`;

const VinText = styled.Text`
  font-size: 32px;
  height: 40px;
`;

const TimeStampText = styled.Text`
  font-size: 16px;
  color: #adadad;
  margin-bottom: 16px;
`;

const images = [
  {
    url: 'http://placekitten.com/600/400',
  },
];

export const ResultDetailScreen = ({route}) => {
  const {height, width} = Dimensions.get('window');
  const [isModal, setModal] = useState(false);
  const {img_url, vin_num, created_at} = route.params;
  useEffect(() => {
    const backAction = () => {
      setModal(false);
    };
    console.log('detail page');

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <View style={styles.container}>
      <ImageContainer onPress={showModal}>
        <Image
          style={{
            width: width,
            height: 320,
            resizeMode: 'contain',
            backgroundColor: 'black',
          }}
          source={{uri: img_url}}
        />
      </ImageContainer>
      <ContentContainer>
        <VinNumberContainer>
          <VinText>{vin_num}</VinText>
          <TimeStampText>{created_at}</TimeStampText>
        </VinNumberContainer>
        <Text>ResultDetailScreen</Text>
        <Text>뭔가 뭔가 차량 관련한 정보가 들어가야하는 곳</Text>
      </ContentContainer>
      <Modal visible={isModal} transparent={true} onRequestClose={hideModal}>
        <ImageViewer
          imageUrls={[
            {
              url: img_url,
              width: width,
            },
          ]}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
