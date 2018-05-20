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
            onShowUnderlay={()=> alert("Image Based Button with onShowUnderlay button!")}
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
                marginTop: 50,
                width: 200,
                height: 100,
                backgroundColor: '#f33',
            }}
            onPress={()=> Alert.alert('Touchable Opacity')}
            activeOpacity={0.7}
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

        {/* Triple functionality: press down, then push and release */}
        <TouchableWithoutFeedback
            // comment out where required
            
            // onPress={()=> Alert.alert('Touchable Without Feedback')}
            
            // onPressIn={()=> Alert.alert('On Press In')}
            
            // onPressOut={()=> Alert.alert('On Press Out')}
            
            // disabled={false}
            
            onLongPress={()=> Alert.alert('On Long Press')}
        >
            <View style={{
                marginTop: 50,
                width: 300,
                height: 100,
                backgroundColor: '#f6f5',
            }}>
                <Text 
                    style={{
                        fontSize: 20,
                        color: '#333',
                        textAlign: 'center',
                        lineHeight: 100
                    }}>TouchableWithoutFeedback
                </Text>
            </View>
        </TouchableWithoutFeedback>

      </View>
    )
  }
}

