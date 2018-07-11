import Expo from 'expo'

import React, { Component, Fragment } from 'react'
// import { StyleSheet, Text, View, Image } from 'react-native'

import ImageFullScreen from './components/ImageFullScreen'
import Props from './components/Props'
import FlexAndMapArray from './components/FlexAndMapArray'
import TextBlink from './components/TextBlink'
import BasicForm from './components/BasicForm'
import Buttons from './components/Buttons'
import Touchables from './components/Touchables'
import VerticalScrollView from './components/VerticalScrollView'
import HorizontalScrollView from './components/HorizontalScrollView'
import BasicFlatList from './components/BasicFlatList'
import HorizontalFlatList from './components/HorizontalFlatList'
import AppOfDay from './components/AppOfDay'

class App extends Component {
  render() {

    return (
      <Fragment>
        {/* //// comment out as needed to preview \\\\ */}

        <AppOfDay />

        {/* <HorizontalFlatList/> */}

        {/* <BasicFlatList /> */}

        {/* <HorizontalScrollView /> */}

        {/* <VerticalScrollView /> */}

        {/* <Touchables /> */}

        {/* <Buttons /> */}

        {/* <BasicForm /> */}

        {/* <ImageFullScreen /> */}

        {/* <Props msg="Fred" /> */}

        {/* <FlexAndMapArray /> */}

        {/* <TextBlink />  */}

      </Fragment>
    )
  }
}


export default Expo.registerRootComponent(App) 