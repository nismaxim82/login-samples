import React from 'react'
import { Text, View } from 'react-native'
// import * as styles from './App.css'
// tslint:disable-next-line:no-var-requires
const styles = require('./App.css')

console.log(styles)

const App = () => {
  return <View className={styles.container} >
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
