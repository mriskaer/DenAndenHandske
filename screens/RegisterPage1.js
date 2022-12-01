import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import AddCheckBox from "../components/AddCheckBox"
import BottomButtons from '../components/BottomButtons';
import AddButton from '../components/AddButton';


export default function RegisterScreen({navigation}) {

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
                <TouchableOpacity onPress={()=>navigation.navigate('Camera')}>
                    <Image 
                        style={{height: 130, width: 130, borderRadius: 20, margin: 10}}
                        source={require('../assets/cameraicon.png')} 
                    />
                </TouchableOpacity>
            </View>
            
        </View>
        <View style={{flex:2}}>
            <Text style={{fontSize: 15}}>
                Which glove(s) have you found?
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <AddCheckBox hand="left"></AddCheckBox>
                <AddCheckBox hand="right"></AddCheckBox>
            </View>
            
            
        </View>
        
        
        <View style={{flex: 1}}>
            <AddButton 
                title='Next' 
                navigation={navigation} 
                navigateTo='Register2'>
            </AddButton>
        </View>

    
        <BottomButtons 
            leftTitle='HOME' 
            title="lort"
            navigateTo="Find"
            navigation={navigation} 
            leftNavigation="Home" 
            rightTitle='FIND GLOVE' 
            rightNavigation="Find">
        </BottomButtons> 
        
      </View>
    );
}
