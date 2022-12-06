import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useContext } from "react";
import { PostContext } from "../appContext"


export default function AddCheckBox(props) {
    const [isChecked, setChecked] = useState(false);
    const [getGlovePosts, setGlovePosts, getWaitingroom, setWaitingroom] = useContext(PostContext);

    function handleChange(checked) {
        if (props.hand == "left") {
            setWaitingroom({ ...getWaitingroom, leftChecked: checked })
        } else {
            setWaitingroom({ ...getWaitingroom, rightChecked: checked })
        }
        setChecked(checked)
    }

    console.log(getWaitingroom["leftChecked"], getWaitingroom["rightChecked"])

    return (
        <View style={{ margin: 20 }}>
            <Text>
                {props.hand}
            </Text>
            <Checkbox
                style={{ alignSelf: 'center' }}
                value={isChecked}
                onValueChange={handleChange}
                color={isChecked ? '#4630EB' : undefined}
            />
        </View>
    )
}
