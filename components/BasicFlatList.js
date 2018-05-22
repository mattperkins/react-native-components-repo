import React from 'react'
import { StyleSheet, Image, Text, View, FlatList, Dimensions, Alert } from 'react-native'
import flatListData from '../darta/flatListData'
import Swipeout from 'react-native-swipeout'

class FlatListItem extends React.Component {
  constructor(props) {
  super(props)
    this.state = {
      activeRowKey: null
    }
  }

  render() {

    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if(this.state.activeRowKey != null) {
          this.setState({
              activeRowKey: null
            })
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({
              activeRowKey: this.props.item.key
            })
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey
            Alert.alert(
              'Alert',
              'Are you sure you want to delete ?',
              [
                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Yes', onPress: () => {
                  flatListData.splice(this.props.index, 1)
                  // Refresh FlatList on delete
                  this.props.parentFlatList.refreshFlatList(deletingRow)
                }}
              ],
              { cancelable: true }
            )      
          },
          text: 'Delete', type: 'delete'
        } 
      ],
      rowId: this.props.index,
      sectionId: 1
    }

    return (
      
      <Swipeout {...swipeSettings}>

        <View>

      <View
        style={{
          flex: 1,
          // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato',
          backgroundColor: 'mediumseagreen', 
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >

      <Image style={{width: 100, height: 100, margin: 5}} source={{uri: this.props.item.imageUrl}} />

      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={ styles.flatListItem }>{this.props.item.name}</Text>
        <Text style={ styles.flatListItem }>{this.props.item.foodDescription}</Text>
      </View>  

      </View>

      <View style={{height: 1, backgroundColor: 'white'}}></View>
      </View>

      </Swipeout>
      
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
  constructor(props) {
  super(props)
  this.state = ({
   deletedRowkey: null
  })
  }
  refreshFlatList = (deletedKey)=>{
    this.setState((prevState) => {
      deletedRowkey: deletedKey
    })
  }

  render() {
    
    return (
   
      <View style={{flex:1, marginTop:100}}>
      
        <FlatList
          data={flatListData}
          renderItem={({item, index})=>{
            // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`)
            return (
              <FlatListItem item={item} index={index} parentFlatList={this}/> // this = make FlatList props of flatListItem
            )
          }}

      
        />
        

      </View>
    )
  }
}

