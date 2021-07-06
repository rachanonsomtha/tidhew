import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavContainer from './src/navigations';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded, error] = useFonts({
    Kanit: require('./assets/fonts/Kanit-Regular.ttf'),
    Kanitmedium: require('./assets/fonts/Kanit-Medium.ttf')
  })
  
  if (!loaded){
    return null
  }
  // const Stack = createStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
        <AppNavContainer />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})