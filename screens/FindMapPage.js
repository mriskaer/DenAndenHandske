// Author: Tomasok, Oct.2021
import React, { useState, useRef, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, Dimensions, Button, Alert } from 'react-native';
import * as Location from 'expo-location';

import MapView, { Marker } from 'react-native-maps';
import styles from "../StyleSheet";
import Constants from 'expo-constants';
import { useContext } from "react";
import { PostContext } from "../appContext"
import NavigateButton from '../components/NavigateButton';


export default function App({navigation}) {
  const [location, setLocation] = useState(null);
  const [getGlovePosts, setGlovePosts, getWaitingroom, setWaitingroom] = useContext(PostContext);

  // se may consider bundling  the 4 above useState hooks together in one 'setLocationInfo' with
  // object :{location,time,marker, region}

  const [errorMsg, setErrorMsg] = useState(null); // Not really used fo now
  const locationWatchId = useRef(null); // A place for our watchPosition handle


  function CancelLocationWatch() // A function to help usstop listening for change in position 
  //when we leave the app
  {
    if (locationWatchId.current) locationWatchId.current.remove();
    console.log('cancelling');
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      else {
        // we have permission - set up contionous watching
        console.log('Good to go #1 installing callback');
        locationWatchId.current = await Location.watchPositionAsync(
          {
            accuray: Location.Accuracy.BestForNavigation, timeInterval: 5000, distanceInterval: 100,
            mayShowUserSettingsDialog: true
          },

          (currentPosition) =>    //The things we want to do when 'called back' to receive a changed position
          {
            console.log('new position arrived');
            //Do stuff with the location data
            // All we do for now is update state info on location. 
            //In turn triggering the render of our component including the map
            setLocation(currentPosition);
            
            console.log('new position consumed');
          });
      }
      console.log('Good to go #2 callback installed');
    })();

  }, []); // Only do this setting up the first time around (when component is mounted)

  useEffect(() => {
    return CancelLocationWatch();  //Cleaning up - stop watching for location changes when unmounted
  }, []);


  if (!(location)) return (  // we don't have a location object yet!
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.txtLine}>Waiting for location info</Text>
      </View>
    </SafeAreaView>
  );

  // We are on track and now have a location object and a sorted pointsOfInteretsarray to work with !
  const { coords, timestamp } = location; //unpack/destructure location object to get to coords and timestamp

  // Getting ready to render Map with Markers
  let region =  // Setting up for the mapview region 
  {
    latitude: coords.latitude,
    longitude: coords.longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  let marker = // Setting up for the mapviev marker
  {
    latitude: coords.latitude,
    longitude: coords.longitude
  }



  // Now the rendering stuff

  return (
    <SafeAreaView style={styles.container}>

      {marker && region ?   // Only render MapView if there are welldefined marker and region objects to feed as props to MapView
        <MapView style={styles.mapStyle} region={region} >
          <Marker coordinate={marker} title='Your Location' description='Your current location' pinColor='pink' />
        </MapView>
        : <View style={styles.infoBox}>
          <Text style={styles.txtLine}> Waiting for coordinates</Text>
        </View>}

      {location ? // Only render location information when there is a welldefined location object
        <View style={styles.infoBox}>
          <Text style={styles.txtLine}>You are here:</Text>
          <Text style={styles.txtLine}>{"timestamp:" + timestamp}</Text>
          <Text style={styles.txtLine}>{"longitude: " + coords.longitude + " and " + "latitude: " + coords.latitude}</Text>
        </View>
        : null}
        <View style={styles.basicButton}>
          <Button 
            title="Choose this location"
            color= "black"
            onPress={()=> {
              setWaitingroom({...getWaitingroom, location: marker})
              navigation.navigate("Register2")
              }}

          ></Button>
        </View>
       

      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
