import { View, Button, Image, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';

export default function HomeScreen({navigation}) {

    // CUSTOM FONT
    /* const [fontsLoaded] = useFonts({
        'InriaSans': require("./../assets/fonts/InriaSans-Light.ttf"),
    })

    const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(async() => {
     await Font.loadAsync({
         InriaSans: require('../assets/fonts/InriaSans-Light.ttf'),
      });
      setFontLoaded(true);
    }, []); */
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink' }}>
        {/* {!fontLoaded ? (
            <Text> Loading...</Text>
        ) : ( */}
            <Text style={{ fontSize: 45, textAlign: 'center' , /* fontFamily: 'InriaSans' */}}> 
            DEN ANDEN HANDSKE 
            </Text> 
        {/* )} */}
        
        <Image source={require('../assets/frontpage.png')} />

        <View style={{height: 100, flexDirection: 'row'}}>
            <View style={{flex: 1, borderRadius: 10, flexDirection: 'column', backgroundColor: 'lightblue', margin: 5, justifyContent: 'center'}}>
                <Button 
                title="Register glove"
                onPress={() => navigation.navigate('Register')}
                />
            </View>
            <View style={{flex: 1, borderRadius: 10, flexDirection: 'column', backgroundColor: 'lightblue', margin: 5, justifyContent: 'center'}}>
                <Button
                title="Find glove"
                onPress={() => navigation.navigate('Find')}
                />
            </View>
        </View>

      </View>
    );
  }