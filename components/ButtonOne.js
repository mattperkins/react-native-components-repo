// use react-native-button library to resolve Android styling weirdness

import React from 'react'
import { View, Button, Alert } from 'react-native'


export default class ButtonOne extends React.Component{
    BtnTwoPress = ()=> Alert.alert("Button Two pressed!")
    render() {
        
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                
                <View
                    style={{backgroundColor: 'green', borderRadius: 6, padding: 6}}>
                <Button 
                    onPress={()=> Alert.alert("Button One pressed!")}
                    title="ButtonOne"    
                    // 'color' on Android refers to the background not text color (yeah, ridiculous init) 
                    color="white"
                />
                </View>

                <View
                    style={{marginTop: 50, backgroundColor: 'skyblue', borderRadius: 6, padding: 6}}>
                <Button 
                    onPress={this.BtnTwoPress}
                    title="ButtonTwo"    
                    // 'color' on Android refers to the background not text color (yeah, ridiculous init)
                    color="#333"
                />
                </View>
            </View>
        )
    }
}

/*
// instructions for cross platform button
$ yarn add react-native-button
import Button from 'react-native-button'
<Button
    style={{fontSize: 25,
    color: 'white',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 20}}
    onPress={()=> Alert.alert('This button will work (correctly style) on both IOS and Android')}
>Cross Platform Button Solution</Button>
*/