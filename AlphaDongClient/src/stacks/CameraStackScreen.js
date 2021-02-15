import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CameraScreen} from '../screens/CameraScreen';
import {CameraResultScreen} from '../screens/CameraResultScreen';
import {ResultDetailScreen} from '../screens/ResultDetailScreen';

const CameraStack = createStackNavigator();

export const CameraStackScreen = () => {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen
        name="camera"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <CameraStack.Screen
        name="CameraResult"
        component={CameraResultScreen}
        options={{headerShown: false}}
      />
    </CameraStack.Navigator>
  );
};
