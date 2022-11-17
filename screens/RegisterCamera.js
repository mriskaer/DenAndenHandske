import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function RegisterCamera() {
    const albumName = 'Glove_cache';
    const [hasCameraPermission, setHasCameraPermission] = useState(false); // Permission to use camera on phone
    const [hasCameraRollPermission, setHasCameraRollPermission] = useState(false); // Permission to use cameraRoll on phone

    const [type, setType] = useState(Camera.Constants.Type.back); // Front or Back camera type. Initially set to Back.
    const cameraRef = useRef(null); // Holding on to our cameara instance to give access to methods

    useEffect(() => {
        (async () => {
            //const { status } = await Camera.requestPermissionsAsync();
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(status === 'granted');  // Check if permission was granted (true  or false) and change status accordingly
        })(); // Final parentheses () to make the immediate actual call of the anonymous async function
    }, []); // This will work like the oldstyle lifecycle method 'componentdidmount'
    //  Passing an empty array as the second argument to use effect ensures that the effect only is called once after first render

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            setHasCameraRollPermission(status === 'granted');  // Check if permission was granted (true  or false) and change status accordingly
        })(); // Final parentheses () to make the actual call of the anonymous async function
    }, []); // This will work like the oldstyle lifecycle method 'componentdidmount'
    //  Passing an empty array as the second argument to use effect ensures that the effect only is called once

    async function snapAndSaveThePicture() {
        try {
            console.log('Snap!');
            const { uri } = await cameraRef.current.takePictureAsync();

            console.log('Creating asset');

            const asset = await MediaLibrary.createAssetAsync(uri);
            console.log('Saving the picture to album: ' + albumName);

            // This is where we save the picture to our medialibrary !
            // create album (if not there already) and store picture 
            let albumRef = await MediaLibrary.getAlbumAsync(albumName); // Go get our album if it is there. If not then create the album
            if (!albumRef) {
                console.log('Album not found. Initializing...');
                await MediaLibrary.createAlbumAsync(albumName, asset);
            }
            else {
                console.log('Album found. Saving Asset');
                await MediaLibrary.addAssetsToAlbumAsync(asset, albumRef);
            }

            //await MediaLibrary.saveToLibraryAsync(uri);  Alternative one stop way to save picture to main roll without possibility to specify album


            console.log('Asset Saved');
        }
        catch (error) {
            console.log('Error', error);
        }
    }
    // Escape hatch - in case we didn't get permissions yet!
    //Checking permissions
    if (!(hasCameraPermission && hasCameraRollPermission)) {
        console.log("Permissions not granted yet!" + " CameraPermission: " + hasCameraPermission + ", CameraRollPermission: " + hasCameraRollPermission);
        return <Text style={{ marginTop: 50 }}>No access to Camera and/or Media </Text>;
    }
    console.log("Permissions granted!" + " CameraPermission: " + hasCameraPermission + " CameraRollPermission: " + hasCameraRollPermission);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row'

                    }}>
                    {/*  <TouchableOpacity  // Flipping camera between back and front
                        style={{
                            flex: 1,
                            alignSelf: 'flex-end'

                        }}
                        onPress={() => {
                            flipTheCamera();
                        }}>
                        <Text style={{ fontSize: 18, marginBottom: 18, color: 'white' }}> Flip </Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity // Taking a picture/snap
                        style={{
                            flex: 1,
                            alignSelf: 'flex-end'
                        }}
                        onPress={() => {
                            snapAndSaveThePicture();
                        }}>
                        <Text style={{ fontSize: 18, marginBottom: 18, color: 'white', textAlign: 'center' }}>Capture</Text>
                    </TouchableOpacity>

                </View>
            </Camera>
            <StatusBar style='auto' />
        </SafeAreaView>
    );
}