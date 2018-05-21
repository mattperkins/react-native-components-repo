import React from 'react'
import { StyleSheet, Image, Text, View, FlatList, Dimensions } from 'react-native'
import flatListData from '../darta/flatListData'

class FlatListItem extends React.Component {
  render() {
    return (
      <View>

      <View
        style={{
          flex: 1,
          // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato',
          backgroundColor: 'mediumseagreen', 
          flexDirection: 'row'
        }}
      >

      <Image style={{width: 100, height: 120, margin: 5}} source={{uri: this.props.item.imageUrl}} />

      <View style={{flex: 1, flexDirection: 'column', marginVertical: 20}}>
        <Text style={ styles.flatListItem }>{this.props.item.name}</Text>
        <Text style={ styles.flatListItem }>{this.props.item.foodDescription}</Text>
      </View>  

      </View>

      <View style={{height: 1, backgroundColor: 'white'}}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 20,
    flex: 1
  }
})

export default class BasicFlatList extends React.Component {
  render() {
    
    return (
   
      <View style={{flex:1, marginTop:100}}>
      
        <FlatList
          data={flatListData}
          renderItem={({item, index})=>{
            // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`)
            return (
              <FlatListItem item={item} index={index} />
            )
          }}

      
        />
        

      </View>
    )
  }
}

