import React from 'react'
import { View, Image } from 'react-native'

export default class App extends React.Component {
  render() {
    const img = { 
      uri: "http://srrc.com/stub/500",
    }
    return (
      
      <Image 
          style={{resizeMode: 'cover', flex:1, height: null, width: null}}
          source={img} 
      />
      
    )
  }
}

