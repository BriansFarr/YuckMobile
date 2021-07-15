import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/greenyuck.jpeg')}>
      <View style={styles.headerContainer}>
        
      <Text>Search your favorite restuarants' worst health code violations.</Text>
      <Image
        style={styles.header}
        source={require('../assets/header.png')} />
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "green"
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "maroon"
  },
  header: {
    width: 325,
    height: 100,
    position: 'absolute',
    top: 70,
    left: 55,
  },
  headerContainer: {
    position: "absolute",
    top: 70,
    
  }
  
  
})

export default WelcomeScreen;