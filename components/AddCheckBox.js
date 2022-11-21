import React from 'react'
import { View, Text } from 'react-native'

export default function AddCheckBox(props) {
    return (
        <View style={{margin: 20}}>
            <Text>
                hand={props.hand}
            </Text>
            <Checkbox
                style={{alignSelf: 'center'}}
                value={leftIsChecked}
                onValueChange={leftSetChecked}
                color={leftIsChecked ? '#4630EB' : undefined}
            />
        </View>
    )
}
