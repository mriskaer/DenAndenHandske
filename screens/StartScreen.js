import { View, Image, Text } from "react-native";
import { useFonts } from 'expo-font';
import NavBar from "../components/NavBar"
import styles from "../StyleSheet";


export default function HomeScreen({ navigation }) {

    // CUSTOM FONT
    const [fontsLoaded] = useFonts({
        'InriaSans': require("./../assets/fonts/InriaSans-Regular.ttf"),
        'JosefinSans': require("../assets/fonts/JosefinSans.ttf"),
        'AmaticBold': require("./../assets/fonts/AmaticSC-Bold.ttf")
    })

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.frontPage}>

            {!fontsLoaded ? (
                <Text> Loading...</Text>
            ) : (
                    <Text style={styles.titleFrontPage}>
                        DEN ANDEN HANDSKE
                    </Text>
                )}

            <View style={{ flex: 2 }}>
                <Image source={require('../assets/frontpage.png')} />
            </View>

            <NavBar
                navigation={navigation}
                leftTitle='REGISTER GLOVE'
                leftNavigation="Register"
                rightTitle='FIND GLOVE'
                rightNavigation="Find"
            >
            </NavBar>
        </View>
    );
}