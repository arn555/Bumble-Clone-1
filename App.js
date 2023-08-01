import { View } from 'react-native'
import React from 'react'
import styles from './src/styling/AllStyles'
import Main from './src/navigation/main/MainNavigation'
import MainTwo from './src/navigation/main/MainNavigation2'

export default function App() {

  // MainRoute
  return (
    <View style={styles.flexContainer}>
      <MainTwo />
    </View>
  )
}

// List of Installed dependencies/library of this project

// Linear Gradient 
// npm install react-native-linear-gradient --save (No need to change anything it will automatically link)
// LINK: https://github.com/react-native-linear-gradient/react-native-linear-gradient#installation

// React Navigation (v. 6) - Note: Before installing this library please follow updated versions to prevent errors.
// npm install @react-navigation/native (No need to change anything it will automatically link)
// npm install react-native-screens react-native-safe-area-context (No need to change anything it will automatically link)
// npm install @react-navigation/native-stack (No need to change anything it will automatically link)
// LINK: https://reactnavigation.org/docs/getting-started

// React Native Video
// npm install --save react-native-video@alpha (No need to change anything it will automatically link)
// LINK: https://github.com/react-native-video/react-native-video
