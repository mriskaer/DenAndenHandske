import React from 'react'
import { View, Text, Image } from 'react-native'
import { useContext } from "react";
import { PostContext } from "../appContext";
import styles from "../StyleSheet";

export default function FindEndPage({navigation, route}) {
    const [getGlovePosts, setGlovePosts, getWaitingroom, setWaitingroom] = useContext(PostContext);
    var current_post = getGlovePosts.filter((ele) => (ele["id"] == route.params.id))[0]
    console.log(current_post)
    return (
        <View>
            <Text>{current_post["id"]}</Text>
            
        <Image style={styles.miniMapStyle} source={current_post["source"]}>

        </Image>
        </View>
    )
}
