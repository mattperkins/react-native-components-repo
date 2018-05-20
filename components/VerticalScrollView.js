

import React from 'react'
import { Text, View, ScrollView, Dimensions, Image, TextInput } from 'react-native'

export default class VerticalScrollView extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width
    return (

      <ScrollView 
        keyboardDismissMode='on-drag'
        maximumZoomScale={3}
        minimumZoomScale={0.2}
        // contentContainerStyle={{paddingLeft: 20}}
      >
        <Text 
          style={{
            marginTop: 50,
            fontSize: 30
        }}>ScrollViewer</Text>
        <TextInput
          style={{
            backgroundColor: '#f22', padding:10, marginTop: 20, borderWidth: 1
          }}
            placeholder='Scroll to dismiss keyboard'
            placeholderTextColor='white'
        >
        </TextInput>
        <Image 
          source={{uri: 'http://srrc.com/stub/500'}}
          style={{width: screenWidth, height: screenWidth * 500 / 500, marginTop: 20}}
        />
      </ScrollView>
    )
  }
}
