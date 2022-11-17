import { View, Text, Image, Button } from 'react-native'
import React from 'react'

export default function RegisterScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFBDF1' }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20, margin: 5 }}>
                    DEN ANDEN HANDSKE
                </Text>
            </View>
            <View style={{ flex: 3 }}>
                <Text>
                    Take a picture of the glove
                </Text>
                <View style={{ alignContent: 'center' }}>
                    <Image
                        style={{ height: 100, width: 100, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10 }}
                        source={require('../assets/cameraicon.png')}
                    />
                    <Button
                        title='open camera'
                        onPress={() => navigation.navigate('Camera')}
                    />
                </View>


            </View>
            <View style={{ flex: 1 }}>
                <Text>
                    hej
                </Text>

            </View>
            <View style={{ flex: 1 }}>
                <Text>
                    hej
                </Text>

            </View>
        </View>
    );
}