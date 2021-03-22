import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import {formattedTime} from '../lib/utils';

const Container = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: 16px;
  padding-bottom: 16px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #f1f3f7;
`;

const ImageContainer = styled.Image`
  border-radius: 16px;
  margin-right: 16px;
`;

const ContentContainer = styled.View`
  margin-left: 16px;
`;

const ContentItemTitle = styled.Text`
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 4px;
  font-family: 'Poppins-Medium';
`;
const ContentItem = styled.Text`
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 16px;
  font-family: 'Poppins-Medium';
`;
const ContentItemTimeStamp = styled.Text`
  font-weight: 100;
  margin-bottom: 8px;
  font-size: 16px;
  color: #adadad;
  font-family: 'Poppins-Medium';
`;

export const ResultItem = ({item, navigation}) => {
  const onPress = () => {
    navigation.navigate('ResultDetail', item);
  };
  return (
    <Container onPress={onPress}>
      <FastImage
        style={{
          borderRadius: 8,
          width: 104,
          height: 104,
        }}
        source={{
          uri: item.img_url,
        }}
      />
      <ContentContainer>
        <ContentItemTitle>{item.vin_num}</ContentItemTitle>
        <ContentItem>
          AI : v{JSON.parse(item.full_info)['ai_version']}
        </ContentItem>
        <ContentItemTimeStamp>
          {formattedTime(item.created_at)}
        </ContentItemTimeStamp>
      </ContentContainer>
    </Container>
  );
};
