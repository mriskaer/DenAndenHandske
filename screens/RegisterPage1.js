import { View, Text, Image, Button } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';



export default function RegisterScreen({navigation}) {

    const [rightIsChecked, rightSetChecked] = useState(false);
    const [leftIsChecked, leftSetChecked] = useState(false);

    

    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFBDF1'}}>
        <View style={{flex: 1, marginTop: 10}}>
            <Text style={{fontSize: 25, margin: 5, fontFamily: 'InriaSans'}}>
                DEN ANDEN HANDSKE
            </Text>
        </View>
        
        <View style={{flex:3}}>
            
            <Text style={{flex: 2, fontSize: 15,}}>
                Take a picture of the glove
            </Text>
            
            <View style={{flex: 6, alignItems: 'center'}}>
                <Image 
                    style={{height: 130, width: 130, borderRadius: 20, margin: 10}}
                    source={require('../assets/cameraicon.png')} 
                />
                <Button
                        title='open camera'
                        onPress={() => navigation.navigate('Camera')}
                    />
            </View>
            
        </View>
        <View style={{flex:2}}>
            <Text style={{fontSize: 15}}>
                Which glove(s) have you found?
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
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
            <View style={{borderRadius: 20, flexDirection: 'column', backgroundColor: 'lightblue', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10}}>
                <Button
                    title="NEXT"
                    color='black'
                    onPress={() => navigation.navigate('Register2')}
                />
            </View>
        </View>
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
    );
}
