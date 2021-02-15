import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 16px;
  width: 100%;
  padding-left: 8px;
  margin-top: 16px;
`;

const HeaderTitle = styled.Text`
  font-size: 24px;
`;

export const Header = ({title}) => {
  return (
    <Container>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
};
