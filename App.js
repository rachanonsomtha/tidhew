import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavContainer from './src/navigations';
export default function App() {

  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <AppNavContainer />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})