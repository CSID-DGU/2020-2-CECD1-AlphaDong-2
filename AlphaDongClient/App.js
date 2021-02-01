/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {BottomMenu} from './src/components/BottomMenu';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {setCustomText} from 'react-native-global-props';

const App: () => React$Node = () => {
  const customTextProps = {
    style: {
      fontFamily: 'Poppins-Medium',
    },
  };
  setCustomText(customTextProps);

  return (
    <>
      <NavigationContainer>
        <SafeAreaProvider>
          <BottomMenu />
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
