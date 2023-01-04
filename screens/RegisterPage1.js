import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
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
            <View style={{ height: 80 }}>
                <Text style={styles.titleAllPages}>
                    DEN ANDEN HANDSKE
                </Text>
            </View>

            <View style={{ flex: 2 }}>

                <Text style={styles.textOnScreen}>
                    Take a picture of the glove
                </Text>

                <View style={styles.mapview}>
                    <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                        <Image
                            style={styles.miniMapStyle}
                            source={getWaitingroom["id"] == null ? require("../assets/cameraicon.png") : getWaitingroom["source"]}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textOnScreen}>
                    Which glove(s) have you found?
            </Text>
                <View style={styles.checkboxes}>
                    <AddCheckBox hand="left"></AddCheckBox>
                    <AddCheckBox hand="right"></AddCheckBox>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <NavigateButton
                    title='Next'
                    navigation={navigation}
                    navigateTo={getWaitingroom["source"] != require("../assets/cameraicon.png") ? 'Register2' : 'Register'}
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
