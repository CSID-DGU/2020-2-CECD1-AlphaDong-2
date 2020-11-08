import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#81ecec",
    alignItems: "center",
    justifyContent: "center",
  },
});