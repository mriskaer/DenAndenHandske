import React from 'react'
import { View, Text, Button } from 'react-native'

export default function AddButton(props) {
    return (
            <View style={{margin: 5, borderRadius: 20, flexDirection: 'column', backgroundColor: 'lightblue', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10}}>
                <Button
                    title={props.title}
                    titleExtra={props.titleExtra}
                    color='black'
                    //onPress={() => props.navigateTo}
                    onPress={() => props.navigation.navigate(props.navigateTo)}
                />
            </View>
    )
}
