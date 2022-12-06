import React from 'react'
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native'
import { useContext } from "react";
import { PostContext } from "../appContext";
import styles from "../StyleSheet";
import NavigateButton from "../components/NavigateButton";
import NavBar from "../components/NavBar";
import MapView, { Marker } from 'react-native-maps';

export default function FindEndPage({ navigation, route }) {
    const [getGlovePosts, setGlovePosts, getWaitingroom, setWaitingroom] = useContext(PostContext);
    var current_post = getGlovePosts.filter((ele) => (ele["id"] == route.params.id))[0]
    //console.log(current_post)
    //console.log(getGlovePosts)

    var region = {
        ...current_post["location"], latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    }

    return (
        <View style={styles.standardPage}>

            <SafeAreaView>
                <View style={{ height: 50 }}>
                    <Text style={styles.titleAllPages}>
                        DEN ANDEN HANDSKE
                    </Text>
                </View>
                <ScrollView>
                    <Image
                        style={styles.bigImageStyle} source={current_post["source"]}>
                    </Image>
                    <Text style={styles.descriptionOnPost}>
                        {current_post["description"]}
                    </Text>
                    <MapView style={styles.miniMapStyle} region={region} zoomEnabled={false} scrollEnabled={false}>
                        <Marker coordinate={current_post["location"]} title='Your Location' description='Your current location' pinColor='pink' />
                    </MapView>

                    <Text style={styles.textOnScreen}>
                        {current_post['location']['latitude']}, {current_post['location']['longitude']}
                    </Text>




                    <View style={{ flex: 1 }}>
                        <NavigateButton
                            title='Pick up'
                            navigation={navigation}
                            navigateTo='Home'>
                        </NavigateButton>
                    </View>

                </ScrollView>
                <NavBar
                    navigation={navigation}
                    leftTitle='HOME'
                    leftNavigation="Home"
                    rightTitle='FIND GLOVE'
                    rightNavigation="Find">
                </NavBar>
            </SafeAreaView>



            {/* <Text>{current_post["id"]}</Text>
            <Image 
                style={styles.miniMapStyle} source={current_post["source"]}>
            </Image>  */}
        </View>
    )
}
