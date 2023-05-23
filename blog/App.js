// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './screens/IndexScreen';
import { BlogProvider } from './context/BlogContext';



const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="index" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <BlogProvider>
    <App/>
  </BlogProvider>
}