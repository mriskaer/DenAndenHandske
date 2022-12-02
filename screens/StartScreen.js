import { View, Button, Image, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import NavBar from "../components/NavBar"


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
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFBDF1' }}>
            
            {!fontsLoaded ? (
                <Text> Loading...</Text>
            ) : (
                <Text style={{ fontSize: 55, textAlign: 'center' , fontFamily: 'AmaticBold', marginTop: 80 }}> 
                 DEN ANDEN HANDSKE 
                </Text> 
            )} 

            <View style={{flex: 2}}>
                <Image source={require('../assets/frontpage.png')} />
            </View>   
 
            <NavBar 
                navigation={navigation}
                leftTitle='REGISTER GLOVE' 
                leftNavigation="Register" 
                rightTitle='FIND GLOVE'
                rightNavigation="Find" 
                >
            </NavBar> 

      </View>
    );
  }