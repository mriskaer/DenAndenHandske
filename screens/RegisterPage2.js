import { View, Text, Image, Button, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

export default function RegisterPage2(navigation) {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFBDF1'}}>
        <View style={{flex: 1, marginTop: 10}}>
            <Text style={{fontSize: 25, margin: 5, fontFamily: 'InriaSans'}}>
                DEN ANDEN HANDSKE
            </Text>
        </View>
        
        <View style={{flex:3}}>
            
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
        <View style={{flex:3}}>
            <Text style={{fontSize: 15}}>
                Add a comment for the owner
            </Text>
          <SafeAreaView>
            <TextInput
              style={{alignSelf: 'center', marginTop: 5}}
              onChangeText={onChangeText}
              value={text}
              placeholder="Comment here"
            />
          </SafeAreaView>
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
        
      </View>
  )
}