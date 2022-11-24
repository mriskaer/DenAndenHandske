import * as React from 'react';
import { View, Text, Image, Button, Pressable } from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react'

import {PostContext} from "./appContext"

import StartScreen from './screens/StartScreen';
import RegisterPage1 from './screens/RegisterPage1';
import FindListPage from './screens/FindListPage';
import RegisterCamera from './screens/RegisterCamera';
import RegisterPage2 from './screens/RegisterPage2';
import FindMapPage from './screens/FindMapPage';

const Stack = createNativeStackNavigator();

function App() {
  var glovePosts=[
    {
      glove_id: "1",
      glove_image: require('./assets/glove1.jpg'), 
    }, 
    {
      glove_id: "2",
      glove_image: require('./assets/glove2.jpg'),
    },
    {
      glove_id: "3",
      glove_image: require('./assets/glove3.jpg'),
    },
    {
      glove_id: "4",
      glove_image: require('./assets/glove4.jpg'),
    },
    {
      glove_id: "5",
      glove_image: require('./assets/glove1.jpg'),  
    }, 
    {
      glove_id: "6",
      glove_image: require('./assets/glove2.jpg'),
    },
    {
      glove_id: "7",
      glove_image: require('./assets/glove3.jpg'),
    },
    {
      glove_id: "8",
      glove_image: require('./assets/glove4.jpg'),
    },
    {
      glove_id: "9",
      glove_image: require('./assets/glove4.jpg'),
    },
  ]

  const [getGlovePosts, setGlovePosts] = useState((glovePosts));


  return (
    <PostContext.Provider value={[getGlovePosts, setGlovePosts]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={StartScreen} options={{ title: '', headerStyle: {backgroundColor: '#FFBDF1', borderWidth: 0}}} />
          <Stack.Screen name="Register" component={RegisterPage1} options={{ title: '', fontFamily: 'InriaSans', headerStyle: {backgroundColor: '#FFBDF1'}}} />
          <Stack.Screen name="Find" component={FindListPage} options={{ title: '', headerStyle: {backgroundColor: '#FFBDF1'}}} />
          <Stack.Screen name="Camera" component={RegisterCamera} />
          <Stack.Screen name="Register2" component={RegisterPage2} options={{ title: '', headerStyle: {backgroundColor: '#FFBDF1'}}} />
          <Stack.Screen name="FindMap" component={FindMapPage} options={{ title: '', headerStyle: {backgroundColor: '#FFBDF1'}}} />
        </Stack.Navigator>
      </NavigationContainer>
    </PostContext.Provider>
    
  );
}

export default App;