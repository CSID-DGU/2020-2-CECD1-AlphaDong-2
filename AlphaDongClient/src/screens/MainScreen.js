import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ResultItemList} from '../components/ResultItemList';
import styled from 'styled-components';
import {Header} from '../components/Header';

const Container = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    flex: 1;
    backgroundColor: #F2F3F5;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;

export const MainScreen = () => {
  return (
    <Container>
      <Header title={"최근 기록"}/>
      <ResultItemList />
    </Container>
  );
};
