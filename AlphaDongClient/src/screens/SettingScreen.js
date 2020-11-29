import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
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
