import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import styles from '../StyleSheet'
import NavigateButton from './NavigateButton'

export default function GlovePost(props) {
    return (
        <View>
            <Image
                style={{ height: 130, width: 130, borderRadius: 20, margin: 10 }}
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
