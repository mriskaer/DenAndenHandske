import { View, Text, Image, Button, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import GlovePost from "../components/GlovePost"
import { useContext } from "react";
import { PostContext } from "../appContext"
import NavBar from '../components/NavBar';
import NavigateButton from '../components/NavigateButton';
import styles from '../StyleSheet';

export default function FindScreen({ navigation }) {
    const [getGlovePosts] = useContext(PostContext);

    function make_post(post_data) {
        return (
            <GlovePost
                navigation={navigation}
                id={post_data.id}
                source={post_data.source}
            ></GlovePost>
        )
    }

    return (
        <View style={{ alignItems: 'center', backgroundColor: '#FFBDF1' }}>
            <View style={{ height: 50 }}>
                <Text style={styles.titleAllPages}>
                    DEN ANDEN HANDSKE
                    </Text>
            </View>

            <View style={{ justifyContent: 'center' }}>
                <SafeAreaView style={{ maxHeight: 600 /* HJÆLP HER PLZ */ }}>
                    <FlatList
                        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}

                        data={getGlovePosts}

                        renderItem={({ item }) => make_post(item)}

                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <NavBar
                    navigation={navigation}
                    leftTitle='HOME'
                    leftNavigation="Home"
                    rightTitle='REGISTER GLOVE'
                    rightNavigation="Register">
                </NavBar>
            </View>
        </View>
    );
}
