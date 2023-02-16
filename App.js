import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StationScreen from './StationScreen';
import styles from './Styles.css';


const Stack = createNativeStackNavigator();

export default function App() {
<<<<<<< HEAD
  return ( 
    <View style={styles.container}>
      <Text style = { styles.text }>Some cool text</Text>
      <StatusBar style="auto" />
    </View>
=======
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = 'StationScreen'
        component = { StationScreen }
        options = {{ 
          title: "Station list | StationFinder", 
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
>>>>>>> e13668f5070e0cd3f6e0132e961fc7c18cdf36fa
  );
}
