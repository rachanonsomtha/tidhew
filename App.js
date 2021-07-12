import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavContainer from './src/navigations';
import { useFonts } from 'expo-font';
import { store } from './src/features/store';
import { Provider } from 'react-redux';

export default function App() {

  const [loaded, error] = useFonts({
    Kanit: require('./assets/fonts/Kanit-Regular.ttf'),
    Kanitmedium: require('./assets/fonts/Kanit-Medium.ttf')
  })

  if (!loaded) {
    return null
  }
  // const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavContainer />
      </View>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})