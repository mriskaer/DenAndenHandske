import * as React from 'react';
import { View, Text, Image, Button, Pressable } from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen';
import RegisterPage1 from './screens/RegisterPage1';
import FindListPage from './screens/FindListPage';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={StartScreen} options={{ title: '' }}/>
        <Stack.Screen name="Register" component={RegisterPage1}/>
        <Stack.Screen name="Find" component={FindListPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;