import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
export const SettingScreen = () => {
  return (
    <Container>
      <Header title={'설정'} />
      <Text>Setting</Text>
    </Container>
  );
};
