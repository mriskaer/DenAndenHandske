import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Checkbox from 'expo-checkbox';

export default function AddCheckBox(props) {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={{margin: 20}}>
            <Text>
                {props.hand}
            </Text>
            <Checkbox
                style={{alignSelf: 'center'}}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
            />
        </View>
    )
}
