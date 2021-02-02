import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import Modal from 'react-native-modal';

const ModalContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  padding-top: 8px;
  margin: 0 32px;
  border-radius: 24px;
`;

const CenterModal = (props) => {
  return (
    <ModalContainer>
      <Modal isVisible={props.isModal} onBackdropPress={props.onPress}>
        <ModalContent>{props.children}</ModalContent>
      </Modal>
    </ModalContainer>
  );
};

export default CenterModal;
