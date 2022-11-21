import React from 'react'
import { View, Text } from 'react-native'

export default function BottomButtons() {
    return (
        <View>
            <View style={{height: 100, flexDirection: 'row'}}>
                <View style={{flex: 1, borderRadius: 10, flexDirection: 'column', backgroundColor: '#DA90FC', margin: 2, justifyContent: 'center'}}>
                    <Button 
                        title="HOME SCREEN"
                        color={'black'}
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
                <View style={{flex: 1, borderRadius: 10, flexDirection: 'column', backgroundColor: '#DA90FC', margin: 2, justifyContent: 'center'}}>
                    <Button
                        fontFamily="InriaSans"
                        title="FIND GLOVE"
                        color='black'
                        onPress={() => navigation.navigate('Find')}
                    />
                </View>
            </View>
        </View>
    )
}
