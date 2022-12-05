import React from 'react'
import { View, Text, Button } from 'react-native'
import NavigateButton from './NavigateButton';
import styles from '../StyleSheet'

export default function NavBar(props, {navigation}) {
    return ( 
            <View style={{height: 120, flexDirection: 'row'}}>
                {/* <View style={{}}>
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
            <NavigateButton 
                style={styles.navbar}
                title={props.leftTitle} 
                navigation={props.navigation} 
                navigateTo={props.leftNavigation}>
            </NavigateButton>
            <NavigateButton 
                style={styles.navbar}
                title={props.rightTitle} 
                navigation={props.navigation} 
                navigateTo={props.rightNavigation}>
            </NavigateButton>

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
