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
        color: "black"
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
      }

  });

export default styles;