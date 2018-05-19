import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class FlexAndMapArray extends React.Component {
  render() {
    const boxes = [1,2,3,4,5,6,7,8]
    return (
      // master container
      <View style={{flex:1}}>
      
      {/* top band */}
        <View 
          style={{backgroundColor: '#fff', height: '10%'}}>
        </View>

      {/* boxes */}
        <View 
          style={[styles.container, {flex: 1}, ]}>
          {boxes.map(box => <View key={box} style={styles.boxContainer}>
            <View style={styles.box}></View>
          </View>)}
          
        </View>
    
      {/* bottom band */}
        <View 
          style={{backgroundColor: '#ffc600', height: '5%'}}>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  boxContainer: {
    width: '50%',
    height: '25%',
    padding: 5,
  },
  box: {
    flex:1,
    backgroundColor: '#292929'
  }
})
