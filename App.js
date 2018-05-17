import Expo from 'expo' 

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import ImageFullScreen from './ImageFullScreen'
import Props from './Props'
import FlexAndMapArray from './FlexAndMapArray'
import TextBlink from './TextBlink'

class App extends React.Component {
  render() {

    return (
      <View style={{flex:1}}>
        {/* //// comment out as needed to preview \\\\ */}

        {/* <ImageFullScreen /> */}

        {/* <Props msg="Fred" /> */}

        {/* <FlexAndMapArray /> */}

        <TextBlink /> 

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