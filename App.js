import Expo from 'expo' // add if this component is app entry point
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import ImageFullScreen from './ImageFullScreen'
import Props from './Props'

export default class App extends React.Component {
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

