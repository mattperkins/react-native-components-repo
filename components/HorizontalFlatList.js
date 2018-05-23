import React, { Component, Fragment } from 'react'
import { FlatList, StyleSheet, Text, View, Image, ImageBackground, Alert, Platform, TouchableHighlight, TouchableOpacity, ScrollView, Button, TextInput } from 
'react-native'

import { horizontalStatus } from '../darta/horizontalFlatListData'
import { horizontalFlatListData } from '../darta/horizontalFlatListData'

class HorizontalFlatListItem extends Component {
    render() {
        return (
            <View style={{
                flex:1,
                flexDirection:'column',
                alignItems:'center',
                width:100,
                borderRadius:10,
                borderWidth:1,
                borderColor:'grey',
                margin:4
            }}>
                <Text style={{
                    fontSize:22,
                    fontWeight:'bold',
                    color:'white',
                    margin:20
                }}>{this.props.item.hour}</Text>                
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
            data={horizontalFlatListData}
            renderItem={({ item, index}) => {
                return (
                    <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>
                        
                    </HorizontalFlatListItem>)
            }}
            keyExtractor={(item, index)=> item.hour}
        >
            
        </FlatList>
      </View>
 
      </View>
)
}
}


