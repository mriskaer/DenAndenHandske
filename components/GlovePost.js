import React from 'react'
import { View, Text, Image, Button } from 'react-native'

export default function GlovePost(props) {
    return (
        <View>
            <Image 
                style={{height: 130, width: 130, borderRadius: 20, margin: 10}}
                source={(props.glove_image)} 
            />
            <View style={{margin: 5, borderRadius: 20, flexDirection: 'column', backgroundColor: 'lightblue', justifyContent: 'center', borderColor: 'black', borderWidth: 1}}>
                <Button
                    title="SEE GLOVE"
                    color='black'
                    onPress={() => props.navigation.navigate('FindEndScreen', {glove_id: props.glove_id})}
                />
            </View>
        </View>
    )
}
