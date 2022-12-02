import { StyleSheet } from "react-native";

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
        paddingHorizontal: 10
    }, 

    navbar:{
        flex: 1, 
        borderRadius: 25, 
        flexDirection: 'column', 
        backgroundColor: '#E6ADFF', 
        margin: 0, 
        justifyContent: 'center', 
        borderWidth: 1, 
        borderColor: 'black'
    },

    glovepostButton:{
        marginBottom: 8, 
        borderRadius: 20, 
        flexDirection: 'column', 
        backgroundColor: '#FFF5C8', 
        justifyContent: 'center', 
        borderColor: 'black',
        borderWidth: 1, 
        paddingHorizontal: 10
    }



  });

export default styles;