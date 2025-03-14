import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import {Router} from './src/routes/router';
import { AuthProvider } from './src/Contexts/Auth';

export default function App() {
  return (<AuthProvider><Router /></AuthProvider>)  ;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
