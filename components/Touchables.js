import React from 'react'
import { Alert, Image, Text, View, 
    TouchableHighlight, 
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

        <TouchableOpacity
            style={{
                marginTop: 20,
                width: 200,
                height: 100,
                backgroundColor: '#f33'
            }}
            onPress={()=> Alert.alert('Touchable Opacity')}
        >
            <Text 
                style={{
                    fontSize: 20,
                    color: 'white',
                    textAlign: 'center',
                    lineHeight: 100
                }}>TouchableOpacity
            </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

