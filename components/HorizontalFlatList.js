import React, { Component, Fragment } from 'react'
import { FlatList, StyleSheet, Text, View, Image, ImageBackground, Alert, Platform, TouchableHighlight, TouchableOpacity, ScrollView, Button, TextInput } from 'react-native'

class HorizontalFlatListItem {
    render() {
        return (
            <View style={{
                flex:1,
                flexDirection:'column',
                alignItems:'center',
                width:90,
                borderRadius:10,
                borderWidth:1,
                borderColor:'grey',
                margin:4
            }}>

            </View>
        )
    }
}

export default class HorizontalFlatList extends Component {
 
  render() {
 
   return (
    <View style={{flex:1, flexDirection:'column', marginTop: Platform.OS === "ios" ? 34 : 0}}>

      <View style={{height:150}}>
        <FlatList 
            style={{backgroundColor: 'black', opacity: 0.5}}
            horizontal={true}
            renderItem={({ item, index}) => {
                return (
                    <HorizontalFlatList item={item} index={index} parentFlatList={this}>

                    </HorizontalFlatList>)
            }}
        >
            
        </FlatList>
      </View>
 
      </View>
)
}
}


