import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  display: flex;
  width: 100%;
  flex-direction:row;
  margin-bottom: 16px;
  background-color: #fff;
  border-radius: 16px;
  padding:16px;
`;


const ImageContainer = styled.Image`
    border-radius:16px;
    margin-right: 16px;
`;

const ContentContainer = styled.View`
`;

const ContentItem = styled.Text`
    font-weight: bold;
    margin-bottom: 8px;
`;

export const ResultItem = ({item}) => {
  return (
    <Container>
      <ImageContainer source={{uri: item.img_url}} style={{width: 96, height: 80}} />
      <ContentContainer>
        <ContentItem>{item.vin_num}</ContentItem>
        <ContentItem>기타 정보 들어갈 곳</ContentItem>
      </ContentContainer>
    </Container>
  );
};
