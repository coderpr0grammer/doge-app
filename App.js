import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Navigation } from './src/infrastructure/navigation'

export default function App() {
  return (

    <View style={{ flex: 1, backgroundColor: '#0D1117' }}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}
