import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ResultItemList} from '../components/ResultItemList';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <ResultItemList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
