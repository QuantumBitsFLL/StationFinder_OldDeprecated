import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StationScreen from './StationScreen';
import styles from './Styles.css';


const Stack = createNativeStackNavigator();

export default function App() {
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
  );
}
