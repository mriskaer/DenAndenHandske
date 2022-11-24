import { View, Text, Image, Button, FlatList } from 'react-native'
import React from 'react'
import GlovePost from "../components/GlovePost"
import { useContext } from "react";
import { PostContext } from "../appContext"

export default function FindScreen({navigation}) {
  const [getGlovePosts, setGlovePosts] = useContext(PostContext);

  function make_post(post_data) {
    return (
        <GlovePost 
            glove_id={post_data.glove_id}
            //location={post_data.location}
            glove_image={post_data.glove_image}
            //description={post_data.description}
            navigation={navigation}
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
            
            <View style={{flex: 1, borderRadius: 15, backgroundColor: '#DA90FC', margin: 15, justifyContent: 'center', borderColor: 'black', borderWidth: 1, width: 100, alignSelf: 'center'}}>
                <Button
                    fontFamily="InriaSans"
                    title="MAP"
                    color='black'
                    onPress={() => navigation.navigate('FindMap')}
                />
            </View> 
        </View>
          
        <View style={{flex: 7, justifyContent: 'center'}}>
        <FlatList
                  contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}

                  data={getGlovePosts}

                  renderItem={({item}) => make_post(item)}

                  keyExtractor={item => item.glove_id}
              />
              {/* <GlovePost 
                glove_image={require('../assets/glove1.jpg')}
                navigation={navigation}
              ></GlovePost>
              <GlovePost 
                glove_image={require('../assets/glove2.jpg')}
                navigation={navigation}
              ></GlovePost>
              <GlovePost 
                glove_image={require('../assets/glove3.jpg')}
                navigation={navigation}
              ></GlovePost>
              <GlovePost 
                glove_image={require('../assets/glove4.jpg')}
                navigation={navigation}
              ></GlovePost> */}
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
  