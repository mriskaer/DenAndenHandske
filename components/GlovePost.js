import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import styles from '../StyleSheet'
import AddButton from './AddButton'

export default function GlovePost(props) {
    return (
        <View>
            <Image 
                style={{height: 130, width: 130, borderRadius: 20, margin: 10}}
                source={(props.glove_image)} 
            />
            <AddButton
                style={styles.glovepostButton}
                title="SEE GLOVE"
                navigation={props.navigation}
                navigateTo="Home">
            </AddButton>
        </View>
    )
}
