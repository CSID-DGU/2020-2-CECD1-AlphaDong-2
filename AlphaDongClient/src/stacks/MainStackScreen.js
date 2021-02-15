import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ResultDetailScreen} from '../screens/ResultDetailScreen';
import {MainScreen} from '../screens/MainScreen';

const MainStack = createStackNavigator();

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="ResultDetail"
        component={ResultDetailScreen}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};
