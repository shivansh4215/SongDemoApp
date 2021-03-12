

import React, {useEffect}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


 import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListPage from './src/component/ListPage';
import DetailPage from './src/component/DetailPage';
import SplashScreen from 'react-native-splash-screen'
const Stack = createStackNavigator();

const App= () =>  {
  useEffect(() => {
    // Subscribe to network state updates
    SplashScreen.hide();
    
    
  }, []);
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="ListPage" component={ListPage} options={ {headerShown: false}}/>
      <Stack.Screen name="DetailPage" component={DetailPage} />
     </Stack.Navigator>
     </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor:'#fff',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "#000",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#ddd',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
