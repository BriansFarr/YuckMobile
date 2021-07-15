import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});