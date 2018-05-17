import Expo from 'expo' 

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import ImageFullScreen from './ImageFullScreen'
import Props from './Props'

class App extends React.Component {
  render() {

    return (
      <View style={{flex:1}}>
        
        <ImageFullScreen />

        {/* <Props msg="Fred" /> */}
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#f7f7f7',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
})

export default Expo.registerRootComponent(App) 