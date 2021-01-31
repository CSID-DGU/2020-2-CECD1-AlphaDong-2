import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CameraScreen} from '../screens/CameraScreen';
import {ImageDetailScreen} from '../screens/ImageDetailScreen';

const CameraStack = createStackNavigator();

export const CameraStackScreen = () => {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen name="camera" component={CameraScreen}  options={{headerShown: false}}/>
      <CameraStack.Screen name="imageDetail" component={ImageDetailScreen}  options={{headerShown: false}} />
    </CameraStack.Navigator>
  );
}

