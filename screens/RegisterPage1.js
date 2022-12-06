import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import AddCheckBox from "../components/AddCheckBox"
import NavBar from '../components/NavBar';
import NavigateButton from '../components/NavigateButton';
import { useContext } from "react";
import { PostContext } from "../appContext"
import styles from '../StyleSheet';

export default function RegisterScreen({ navigation }) {
    const [getGlovePosts, setGlovePosts, getWaitingroom, setWaitingroom] = useContext(PostContext);

    return (
        <View style={styles.standardPage}>
            <Text style={styles.titleAllPages}>
                DEN ANDEN HANDSKE
            </Text>

            <View style={{ flex: 3 }}>

                <Text style={styles.textOnScreen}>
                    Take a picture of the glove
            </Text>

                <View style={{ flex: 6, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                        <Image
                            style={{ height: 130, width: 130, borderRadius: 20, margin: 10 }}
                            source={getWaitingroom["id"] == null ? require("../assets/cameraicon.png") : getWaitingroom["source"]}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 15 }}>
                    Which glove(s) have you found?
            </Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <AddCheckBox hand="left"></AddCheckBox>
                    <AddCheckBox hand="right"></AddCheckBox>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <NavigateButton
                    title='Next'
                    navigation={navigation}
                    navigateTo={getWaitingroom["source"] != require("../assets/cameraicon.png") ? 'Register2' : 'Register'}

                /* navigateTo='Register2' */
                >
                </NavigateButton>
            </View>


            <NavBar
                navigation={navigation}
                leftTitle='HOME'
                leftNavigation="Home"
                rightTitle='FIND GLOVE'
                rightNavigation="Find">
            </NavBar>

        </View>
    );
}
