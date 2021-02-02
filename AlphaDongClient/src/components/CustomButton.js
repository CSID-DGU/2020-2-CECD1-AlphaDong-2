import React, {useState} from 'react';
import styled from 'styled-components';

const Touchable = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '100%'};
  margin-bottom: 16px;
`;
const Button = styled.View`
  width: 100%;
  height: 64px;
  border-radius: 16px;
  background-color: #2c3351;
  /* background-color: #fafafa; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #a6a6a6; */
`;
const BtnText = styled.Text`
  color: #fafafa;
  /* color: #2c3351; */
  font-size: 16px;
`;

export const CustomButton = ({title, onPress, width}) => {
  return (
    <Touchable onPress={onPress} width={width}>
      <Button>
        <BtnText>{title}</BtnText>
      </Button>
    </Touchable>
  );
};
