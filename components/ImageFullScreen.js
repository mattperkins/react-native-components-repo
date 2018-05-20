import React, {Fragment} from 'react'
import { View, Image, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    const img = { 
      uri: "http://srrc.com/stub/500",
    }
    let screenWidth = Dimensions.get('window').width
    return (
      
      <Fragment>
      <Image 
          style={{resizeMode: 'cover', flex:1, height: null, width: null}}
          source={img} 
      />

      {/* !!! Issue with full screen image inside View/ScrollView or adding additional components */}

      {/* <Image 
          source={require('../assets/imgs/stub.png')}
          style={{width: screenWidth, height: screenWidth * 118 / 184, marginTop: 20}}
      /> */}
      
      </Fragment>
    )
  }
}

