import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Square from './component/page/square';
import Register from './screens/Register';
import Login from './screens/Login';
import FromLogin from './screens/FromLogin';
export default function App() {
  return (
    <View style={styles.container}>
      <FromLogin />
      <Register />
      <Login />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

});
