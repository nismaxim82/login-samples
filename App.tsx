import React from 'react'
import { Text, View } from 'react-native'
import styles from './App.css'

console.log(styles)

const App = () => {
  return <View className="container">
    <Text>Test css-modules!</Text>
  </View>
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

export default App
