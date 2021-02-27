import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ResultItemList} from '../components/ResultItemList';
import styled from 'styled-components';
import {Header} from '../components/Header';

const Container = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const MainScreen = ({navigation}) => {
  const onPress = (item) => {
    navigation.navigate('ResultDetail', item);
  };
  return (
    <Container>
      <Header title={'최근 기록'} />
      <ResultItemList navigation={navigation} />
    </Container>
  );
};
