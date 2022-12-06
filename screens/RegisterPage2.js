import { View, Text, Image, Button, SafeAreaView, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';
import { useContext } from "react";
import { PostContext } from "../appContext"
import MapView, { Marker } from 'react-native-maps';
import styles from "../StyleSheet";


export default function RegisterPage2({ navigation }) {
    const [text, onChangeText] = React.useState("");
    const [getGlovePosts, setGlovePosts, getWaitingroom, setWaitingroom] = useContext(PostContext);

    var marker = getWaitingroom["location"]
    var region = {
        ...marker, latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    }

    return (
        <View style={styles.standardPage}>
            <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={{ fontSize: 25, margin: 5, fontFamily: 'InriaSans' }}>
                    DEN ANDEN HANDSKE
            </Text>
            </View>

            <View style={{ flex: 2 }}>

                <Text style={{ flex: 1, fontSize: 15, }}>
                    Where did you find the glove?
            </Text>
                {marker ?   // Only render MapView if there are welldefined marker and region objects to feed as props to MapView
                    <View style={{ flex: 6, alignItems: 'center' }}>
                        <MapView style={styles.miniMapStyle} region={region} zoomEnabled={false} scrollEnabled={false}>
                            <Marker coordinate={marker} title='Your Location' description='Your current location' pinColor='pink' />
                        </MapView>
                    </View>
                    : <View style={{ flex: 6, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('FindMap')}>
                            <Image
                                style={{ height: 130, width: 130, borderRadius: 20, margin: 10 }}
                                source={require('../assets/mapsicon.png')}
                            />
                        </TouchableOpacity>
                    </View>}

            </View>
            <View style={{ flex: 2, alignItems: 'center' }}>
                <Text style={{ fontSize: 15 }}>
                    Do you want to leave a comment for the owner?
            </Text>
                <View style={{ flex: 1, margin: 15 }}>
                    <SafeAreaView>
                        <TextInput
                            style={{ alignSelf: 'center', backgroundColor: 'white', borderRadius: 20, borderWidth: 1, borderColor: 'gray', padding: 10, width: 300, height: 100 }}
                            onChangeText={(txt) => {
                                setWaitingroom({ ...getWaitingroom, description: txt })

                                onChangeText(txt)
                            }}
                            value={text}
                            multiline
                            placeholder="Add comment here..."
                            onSubmitEditing={Keyboard.dismiss}

                        />
                    </SafeAreaView>
                </View>

            </View>

            <View style={{ flex: 1 }}>
                <View style={{ borderRadius: 20, flexDirection: 'column', backgroundColor: 'lightblue', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10 }}>
                    <Button
                        title="POST GLOVE"
                        color='black'
                        onPress={() => {
                            if (getWaitingroom["location"] != null) {

                                setGlovePosts([...getGlovePosts, getWaitingroom])
                                setWaitingroom({ id: null, filename: null, creationTime: null, source: require("../assets/cameraicon.png") })
                                navigation.navigate('Home')
                            }

                        }}
                    />
                </View>
            </View>

            <NavBar
                navigation={navigation}
                leftTitle='HOME'
                leftNavigation="Home"
                rightTitle='FIND GLOVE'
                rightNavigation="Find"
            >

            </NavBar>

        </View>
    )
}