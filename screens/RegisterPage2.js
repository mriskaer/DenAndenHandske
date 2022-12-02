import { View, Text, Image, Button, SafeAreaView, TextInput, Keyboard } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';

export default function RegisterPage2 ({navigation}) {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFBDF1'}}>
        <View style={{flex: 1, marginTop: 10}}>
            <Text style={{fontSize: 25, margin: 5, fontFamily: 'InriaSans'}}>
                DEN ANDEN HANDSKE
            </Text>
        </View>
        
        <View style={{flex:2}}>
            
            <Text style={{flex: 1, fontSize: 15,}}>
                Where did you find the glove?
            </Text>
            
            <View style={{flex: 6, alignItems: 'center'}}>
                <Image 
                    style={{height: 130, width: 130, borderRadius: 20, margin: 10}}
                    source={require('../assets/mapsicon.png')} 
                />
            </View>
            
        </View>
        <View style={{flex:2, alignItems: 'center'}}>
            <Text style={{fontSize: 15}}>
                Do you want to leave a comment for the owner?
            </Text>
            <View style={{flex: 1, margin: 15}}>
              <SafeAreaView>
                <TextInput
                  style={{alignSelf: 'center', backgroundColor: 'white', borderRadius: 20, borderWidth: 1, borderColor: 'gray', padding: 10, width: 300, height: 100}}
                  onChangeText={onChangeText}
                  value={text}
                  multiline
                  placeholder="Add comment here..."
                  onSubmitEditing={Keyboard.dismiss}
                />
              </SafeAreaView>
            </View>
            
        </View>
       
        <View style={{flex:1}}>
            <View style={{borderRadius: 20, flexDirection: 'column', backgroundColor: 'lightblue', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10}}>
                <Button
                    title="POST GLOVE"
                    color='black'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
        
        <NavBar 
            navigation={navigation}
            leftTitle='HOME'
            leftNavigation="Home" 
            rightTitle='FIND GLOVE' 
            rightNavigation="Find"
            >
            
        </NavBar> 
        
      </View>
  )
}