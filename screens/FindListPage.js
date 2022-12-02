import { View, Text, Image, Button, FlatList } from 'react-native'
import React from 'react'
import GlovePost from "../components/GlovePost"
import { useContext } from "react";
import { PostContext } from "../appContext"
import NavBar from '../components/NavBar';
import AddButton from '../components/AddButton';

export default function FindScreen({navigation}) {
  const [getGlovePosts] = useContext(PostContext);

  function make_post(post_data) {
    return (
        <GlovePost 
            navigation={navigation}
            glove_id={post_data.glove_id}
            //location={post_data.location}
            glove_image={post_data.glove_image}
            //description={post_data.description}
            
        ></GlovePost>
    )
}

    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFBDF1'}}>
        <View style={{flex: 1, marginTop: 10}}>
            <Text style={{fontSize: 25, margin: 5, fontFamily: 'InriaSans'}}>
                DEN ANDEN HANDSKE
            </Text>
        </View>
        
        <View style={{flex:2, alignItems: 'center'}}>
            
            <Text style={{flex: 1, fontSize: 15,}}>
                Single gloves in your area
            </Text>
            
            <AddButton 
                title="MAP"
                navigation={navigation}
                navigateTo="Home">
            </AddButton>
            
        </View>
          
        <View style={{flex: 7, justifyContent: 'center'}}>
            <FlatList
                contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}

                data={getGlovePosts}

                renderItem={({item}) => make_post(item)}

                keyExtractor={item => item.glove_id}
            />
        </View>
        
        <NavBar 
          navigation={navigation} 
          leftTitle='HOME' 
          leftNavigation="Home" 
          rightTitle='REGISTER GLOVE' 
          rightNavigation="Register">
        </NavBar> 
      </View>
    );
  }
  