import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from './TabBar';
import {MainScreen} from '../screens/MainScreen';
import {CameraScreen} from '../screens/CameraScreen';
import {SettingScreen} from '../screens/SettingScreen';
import {useSafeArea} from 'react-native-safe-area-context';
import {View} from 'react-native';
export const BottomMenu = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="main" component={MainScreen} />
        <Tab.Screen name="camera" component={CameraScreen} />
        <Tab.Screen name="setting" component={SettingScreen} />
      </Tab.Navigator>
      {useSafeArea().bottom > 0 && (
        <View
          style={{
            height: useSafeArea().bottom - 5,
            backgroundColor: 'white',
          }}
        />
      )}
    </View>
  );
};
