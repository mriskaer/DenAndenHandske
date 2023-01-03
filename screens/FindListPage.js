import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import GlovePost from "../components/GlovePost"
import { useContext } from "react";
import { PostContext } from "../appContext"
import NavBar from '../components/NavBar';
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
        <View style={styles.standardPage}>
            <View style={{ height: 50 }}>
                <Text style={styles.titleAllPages}>
                    DEN ANDEN HANDSKE
                </Text>
            </View>

            <View style={{ justifyContent: 'center' }}>
                <SafeAreaView style={{ maxHeight: 600 }}>
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
