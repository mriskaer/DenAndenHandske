import React from 'react'
import { View, Image, Button } from 'react-native'
import styles from '../StyleSheet'

export default function GlovePost(props) {
    return (
        <View>
            <Image
                style={styles.miniMapStyle}
                source={props.source}
            />
            <View style={styles.glovepostButton}>
                <Button
                    title="SEE GLOVE"
                    color="black"
                    onPress={() => props.navigation.navigate("GlovePostPage", { id: props.id })}
                ></Button>
            </View>
        </View>
    )
}
