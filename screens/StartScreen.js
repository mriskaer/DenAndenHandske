import { View, Button, Image, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

export default function HomeScreen({navigation}) {

    // CUSTOM FONT
    const [fontsLoaded] = useFonts({
        'InriaSans': require("./../assets/fonts/InriaSans-Regular.ttf"),
        'JosefinSans': require("../assets/fonts/JosefinSans.ttf"),
        'AmaticBold': require("./../assets/fonts/AmaticSC-Bold.ttf")
    })

    //const [fontLoaded, setFontLoaded] = useState(false);

    /* async function loadAsync2() {
        await Font.loadAsync({
            InriaSans: require('../assets/fonts/InriaSans-Light.ttf'),
         });
    } */
    
    /* useEffect(async() => {
        loadAsync2()
    }, []); */

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFBDF1' }}>
            
            {!fontsLoaded ? (
                <Text> Loading...</Text>
            ) : (
                <Text style={{ fontSize: 45, textAlign: 'center' , fontFamily: 'AmaticBold', marginTop: 80 }}> 
                 DEN ANDEN HANDSKE 
                </Text> 
            )} 
                
            <Image source={require('../assets/frontpage.png')} />
                    

            <View style={{height: 100, flexDirection: 'row'}}>
                <View style={{flex: 1, borderRadius: 10, flexDirection: 'column', backgroundColor: '#DA90FC', margin: 2, justifyContent: 'center'}}>
                    <Button 
                    title="REGISTER GLOVE"
                    color={'black'}
                    onPress={() => navigation.navigate('Register')}
                    />
                </View>
                <View style={{flex: 1, borderRadius: 10, flexDirection: 'column', backgroundColor: '#DA90FC', margin: 2, justifyContent: 'center'}}>
                    <Button
                    fontFamily="InriaSans"
                    title="FIND GLOVE"
                    color='black'
                    onPress={() => navigation.navigate('Find')}
                    />
                </View>
            </View>

      </View>
    );
  }