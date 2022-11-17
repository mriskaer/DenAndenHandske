import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';



export default function RegisterScreen({navigation}) {
    //
    const [rightIsChecked, rightSetChecked] = useState(false);
    const [leftIsChecked, leftSetChecked] = useState(false);

    //
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFBDF1'}}>
        <View style={{flex: 1}}>
            <Text style={{fontSize: 20, margin: 5}}>
                DEN ANDEN HANDSKE
            </Text>
        </View>
        
        
        <View style={{flex:3}}>
            
            <Text style={{flex: 1, fontSize: 15}}>
                Take a picture of the glove
            </Text>
            
            <View style={{flex: 6, alignItems: 'center'}}>
                <Image 
                    style={{height: 100, width: 100, borderRadius: 20, margin: 10}}
                    source={require('../assets/cameraicon.png')} 
                />
            </View>
            
        </View>
        <View style={{flex:3}}>
            <Text style={{fontSize: 15}}>
                Which glove(s) have you found?
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{margin: 20}}>
                    <Text>
                        Left
                    </Text>
                    <Checkbox
                        style={{alignSelf: 'center'}}
                        value={rightIsChecked}
                        onValueChange={rightSetChecked}
                        color={rightIsChecked ? '#4630EB' : undefined}
                    />
                </View>
                <View style={{margin: 20}}>
                    <Text>
                        Right
                    </Text>
                    <Checkbox
                        style={{alignSelf: 'center'}}
                        value={leftIsChecked}
                        onValueChange={leftSetChecked}
                        color={leftIsChecked ? '#4630EB' : undefined}
                    />
                </View>
            </View>
            
            
        </View>
        <View style={{flex:2}}>
            <Text>
                Videre
            </Text>

        </View>
      </View>
    );
}
