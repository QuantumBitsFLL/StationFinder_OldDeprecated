import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StationScreen from './StationScreen';
import styles from './Styles.css';
import Stations from './StationComponent';
import AppRoutes from './navigation/routes';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <AppRoutes />

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //     name = 'StationScreen'
    //     component = { StationScreen }
    //     options = {{ 
    //       title: "Station list | StationFinder", 
    //       headerShown: false
    //     }}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
