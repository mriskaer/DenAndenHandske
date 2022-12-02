import React from 'react'
import { View, Button } from 'react-native'
import styles from '../StyleSheet'

export default function AddButton(props) {
        return (
            <View style={props.style == undefined || props.style == null ? styles.basicButton : props.style}>
                <Button
                    title={props.title}
                    color='black'
                    onPress={() => props.navigation.navigate(props.navigateTo)}
                />
            </View>

    )
}
