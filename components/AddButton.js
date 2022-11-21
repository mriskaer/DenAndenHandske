import React from 'react'
import { View, Text } from 'react-native'

export default function AddButton(props) {
    return (
        <View>
            <View style={{borderRadius: 20, flexDirection: 'column', backgroundColor: 'lightblue', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10}}>
                <Button
                    title={props.title}
                    color='black'
                    onPress={() => props.navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}
