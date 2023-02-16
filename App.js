import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./Styles.css"

export default function App() {
  return ( 
    <View style={styles.container}>
      <Text style = { styles.text }>Some cool text</Text>
      <StatusBar style="auto" />
    </View>
  );
}
