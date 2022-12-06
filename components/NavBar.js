import React from 'react'
import { View, Text, Button } from 'react-native'
import NavigateButton from './NavigateButton';
import styles from '../StyleSheet'

export default function NavBar(props, { navigation }) {
    return (
        <View style={{ height: 70, flexDirection: 'row' }}>
            <NavigateButton
                style={styles.navbar}
                title={props.leftTitle}
                navigation={props.navigation}
                navigateTo={props.leftNavigation}>
            </NavigateButton>
            <NavigateButton
                style={styles.navbar}
                title={props.rightTitle}
                navigation={props.navigation}
                navigateTo={props.rightNavigation}>
            </NavigateButton>
        </View>

    )
}
