import * as React from 'react';
import { View, Text, Image, Button, Pressable } from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink' }}>
      <Text style={{ fontSize: 40, textAlign: 'center' /* , fontFamily: 'Inria Sans' */}}> 
      DEN ANDEN HANDSKE 
      </Text>
      <Image source={require('./assets/frontpage.png')} />
      <Button 
        title="Register glove"
        onPress={() => navigation.navigate('Register')}
      />

      <Button
        /* style={{flex: 1, borderRadius: 20, flexDirection: 'row', backgroundColor: 'blue', width: 200}} */
        title="Find glove"
        onPress={() => navigation.navigate('Find')}
      />
    </View>
  );
}

function RegisterScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register glove screen</Text>
    </View>
  );
}

function FindScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Find glove screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  /* const [fontsLoaded] = useFonts({
    'Inria Sans': require('./assets/fonts/InriaSans-Light.ttf'),
  }); */
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' }}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Find" component={FindScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;