import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({

    basicButton: {
        margin: 5,
        borderRadius: 20,
        flexDirection: 'column',
        backgroundColor: '#B0F7FF',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "black",
        alignSelf: 'center'
    },

    navbar: {
        flex: 1,
        borderRadius: 10,
        flexDirection: 'column',
        backgroundColor: '#E6ADFF',
        margin: 5,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },

    glovepostButton: {
        marginBottom: 8,
        borderRadius: 20,
        flexDirection: 'column',
        backgroundColor: '#FFF5C8',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
        margin: 5
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',  // align vertical
        backgroundColor: '#fff'
    },

    infoBox: {
        backgroundColor: 'pink',
        flex: 2
    },

    txtLine: {
        fontSize: 14,
        fontWeight: 'bold'
    },

    mapStyle: {
        flex: 6,
        width: Dimensions.get('window').width,
        margin: 24
    },

    miniMapStyle: {
        width: 130,
        height: 130,
        borderRadius: 20,
        margin: 10,
        alignSelf: 'center'
    },

    titleFrontPage: {
        fontSize: 55,
        textAlign: 'center',
        fontFamily: 'AmaticBold',
        marginTop: 80
    },

    frontPage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFBDF1'
    },

    titleAllPages: {
        fontSize: 25,
        margin: 5,
        fontFamily: 'InriaSans',
        flex: 1,
        marginTop: 10,
        position: 'absolute',
        alignSelf: 'center'
    },

    standardPage: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFBDF1'
    },

    textOnScreen: {
        flex: 2,
        fontSize: 15,
        alignSelf: 'center'
    },

    bigImageStyle: {
        width: 270,
        height: 270,
        borderRadius: 20,
        margin: 10,
        alignSelf: 'center'
    },

    descriptionOnPost: {
        flex: 2,
        fontSize: 15,
        alignSelf: 'center',
        backgroundColor: 'lightyellow',
        padding: 5,
        borderWidth: 1,
        margin: 10,
        borderColor: 'gray'
    },

    postGloveButton: {
        borderRadius: 20,
        flexDirection: 'column',
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },

    textinputfield: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        width: 300,
        height: 100
    },

    mapview: {
        flex: 6,
        alignItems: 'center'
    },

    navbutton: {
        height: 70,
        flexDirection: 'row'
    },
});

export default styles;