import React from 'react'
import { Alert, Image, Text, View, 
    TouchableHighlight, 
    TouchableNativeFeedback, 
    TouchableOpacity, 
    TouchableWithoutFeedback } from 'react-native'

export default class Touchables extends React.Component {
  render() {

    return (

      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>

        <TouchableHighlight
            onPress={()=> Alert.alert("Touchable Highlight")}
            underlayColor='red'
            onShowUnderlay={()=> alert("onShowUnderlay button!")}
        >
        <View style={{backgroundColor: 'white'}}>
        <Image
            style={{
                width: 100, height: 100 
            }}
            source={{uri: 'http://srrc.com/stub/100'}}
        />
        {/* <Text
            style={{
                color: '#333',
                padding:20,
                fontSize: 18
            }}    
        >Touchable Highlight</Text> */}
        </View>

        </TouchableHighlight>

      </View>
    )
  }
}

