import Expo from 'expo' 

import React, {Component, Fragment} from 'react'
// import { StyleSheet, Text, View, Image } from 'react-native'

import ImageFullScreen from './components/ImageFullScreen'
import Props from './components/Props'
import FlexAndMapArray from './components/FlexAndMapArray'
import TextBlink from './components/TextBlink'
import BasicForm from './components/BasicForm'

class App extends Component {
  render() {

    return (
      <Fragment>
        {/* //// comment out as needed to preview \\\\ */}

        <BasicForm />

        {/* <ImageFullScreen /> */}

        {/* <Props msg="Fred" /> */}

        {/* <FlexAndMapArray /> */}

        {/* <TextBlink />  */}

      </Fragment>
    )
  }
}


export default Expo.registerRootComponent(App) 