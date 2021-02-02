import React, {Fragment} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

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
const CameraGuide = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default CameraGuide;
