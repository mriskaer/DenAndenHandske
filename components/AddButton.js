import React from 'react'
import { View, Text, Button } from 'react-native'
import StyleSheet from '../StyleSheet'

export default function AddButton(props) {
        return (
            <View style={props.style == undefined || props.style == null ? StyleSheet.basicButton : props.style}>
                <Button
                    title={props.title}
                    color='black'
                    onPress={() => props.navigation.navigate(props.navigateTo)}
                />
            </View>

            //{margin: 5, borderRadius: 20, flexDirection: 'column', backgroundColor: 'lightblue', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10}
    )
}
