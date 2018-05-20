

import React from 'react'
import { Text, View, ScrollView, Dimensions, Alert } from 'react-native'

export default class HorizontalScrollView extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width
    let screenHeight = Dimensions.get('window').height
    return (

      <ScrollView
        horizontal={true}
        pagingEnabled={true} // forces snap scroll to next view/component
        showsHorizontalScrollIndicator={true}
        scrollIndicatorInsets={{top: 10, bottom: 10, left: 10, right: 10}} // cosmetic for showsHorizontalScrollIndicator
        
    // comment in to see behaviour :
        // onMomentumScrollBegin={()=> Alert.alert('Begin Scroll')}
        // onMomentumScrollEnd={()=> Alert.alert('End Scroll')}
        onScroll={(event)=> {
            let logData = `Scrolled to 
            x = ${event.nativeEvent.contentOffset.x}, 
            y = ${event.nativeEvent.contentOffset.y}`
            console.log(logData)
        }}
        scrollEventThrottle={10} // milliseconds
    >
        
        <View
            style={{
                backgroundColor: '#5f9ea0',
                flex:1,
                marginTop: 20,
                width: screenWidth,
                justifyContent: 'center',
                alignItems: 'center'    
            }}>
         <Text
            style={{
                fontSize: 30,
                padding: 15,
                color: 'white',
                textAlign: 'center'
            }}>Screen One</Text>       
        </View>

        <View
            style={{
                backgroundColor: '#0ae9f5',
                flex:1,
                marginTop: 20,
                width: screenWidth,
                justifyContent: 'center',
                alignItems: 'center'    
            }}>
         <Text
            style={{
                fontSize: 30,
                padding: 15,
                color: 'white',
                textAlign: 'center'
            }}>Screen Two</Text>       
        </View>


      </ScrollView>
    )
  }
}
