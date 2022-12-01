import React from 'react'
import { View, Text, Button } from 'react-native'
import AddButton from '../components/AddButton';

export default function BottomButtons(props, {navigation}) {
    return (
            <View style={{height: 100, flexDirection: 'row'}}>
                {/* <View style={{flex: 1, borderRadius: 25, flexDirection: 'column', backgroundColor: '#DA90FC', margin: 0, justifyContent: 'center', borderWidth: 1, borderColor: 'black'}}>
                    <Button 
                        title={props.leftTitle}
                        color={'black'}
                        onPress={() => props.navigation.navigate(props.leftNavigation)}
                    />
                </View> */}

               {/*  <AddButton 
                    title={props.title} 
                    navigateTo = {"Find"}
                    //onPress={() => props.navigation.navigate(props.navigateTo)}
                    >
                    </AddButton> */}
                    {/* <View style={{flex: 1}}>
            <AddButton 
                title={props.title} 
                navigation={props.navigation} 
                navigateTo={props.navigateTo}>
            </AddButton>
        </View> */}
            <AddButton 
                title={props.title} 
                navigation={props.navigation} 
                navigateTo={props.navigateTo}>
            </AddButton>
            <AddButton 
                title={props.title} 
                navigation={props.navigation} 
                navigateTo={props.navigateTo}>
            </AddButton>

                {/* <View style={{flex: 1, borderRadius: 25, flexDirection: 'column', backgroundColor: '#DA90FC', margin: 0, justifyContent: 'center', borderWidth: 1, borderColor: 'black'}}>
                    <Button
                        title={props.rightTitle}
                        color='black'
                        onPress={() => props.navigation.navigate(props.rightNavigation)}
                    />
                </View> */}
            </View>
    )
}
