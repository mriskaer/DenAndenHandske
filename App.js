import * as React from 'react';
import { View, Text, Image, Button, Pressable } from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react'
import { LogBox } from "react-native"
import { PostContext } from "./appContext"

import StartScreen from './screens/StartScreen';
import RegisterPage1 from './screens/RegisterPage1';
import FindListPage from './screens/FindListPage';
import RegisterCamera from './screens/RegisterCamera';
import RegisterPage2 from './screens/RegisterPage2';
import FindMapPage from './screens/FindMapPage';
import FindEndPage from './screens/FindEndPage';

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs(true)

function App() {
    var glovePosts = [
        {
            id: "1",
            source: require('./assets/glove1.jpg'),
            filename: "egon",
            creationTime: "23452345",
            leftChecked: true,
            rightChecked: false,
            location: { longitude: 12.528457923503545, latitude: 55.678110122660165 },
            description: "Flot"
        },
        {
            id: "2",
            source: require('./assets/glove2.jpg'),
            filename: "egon",
            creationTime: "23452345",
            leftChecked: true,
            rightChecked: false,
            location: { longitude: 12.528457923503545, latitude: 55.678110122660165 },
            description: "Sød"
        },
        {
            id: "3",
            source: require('./assets/glove3.jpg'),
            filename: "egon",
            creationTime: "23452345",
            leftChecked: true,
            rightChecked: false,
            location: { longitude: 12.528457923503545, latitude: 55.678110122660165 },
            description: "Skøn"
        },
        {
            id: "4",
            source: require('./assets/glove4.jpg'),
            filename: "egon",
            creationTime: "23452345",
            leftChecked: true,
            rightChecked: false,
            location: { longitude: 12.528457923503545, latitude: 55.678110122660165 },
            description: "Dejlig"
        }
    ]

    const [getGlovePosts, setGlovePosts] = useState((glovePosts));

    const [getWaitingroom, setWaitingroom] = useState({ id: null, filename: null, creationTime: null, source: require("./assets/cameraicon.png"), leftChecked: false, rightChecked: false, location: null, description: null });

    return (
        <PostContext.Provider value={[getGlovePosts, setGlovePosts, getWaitingroom, setWaitingroom]}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={StartScreen} options={{ title: '', headerStyle: { backgroundColor: '#FFBDF1', borderWidth: 0 } }} />
                    <Stack.Screen name="Register" component={RegisterPage1} options={{ title: '', fontFamily: 'InriaSans', headerStyle: { backgroundColor: '#FFBDF1' } }} />
                    <Stack.Screen name="Find" component={FindListPage} options={{ title: '', headerStyle: { backgroundColor: '#FFBDF1' } }} />
                    <Stack.Screen name="Camera" component={RegisterCamera} />
                    <Stack.Screen name="Register2" component={RegisterPage2} options={{ title: '', headerStyle: { backgroundColor: '#FFBDF1' } }} />
                    <Stack.Screen name="FindMap" component={FindMapPage} options={{ title: '', headerStyle: { backgroundColor: '#FFBDF1' } }} />
                    <Stack.Screen name="GlovePostPage" component={FindEndPage} options={{ title: '', headerStyle: { backgroundColor: '#FFBDF1' } }} />
                </Stack.Navigator>
            </NavigationContainer>
        </PostContext.Provider>

    );
}

export default App;