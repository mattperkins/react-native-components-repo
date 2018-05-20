

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
                    color="white"
                />
                </View>

                <View
                    style={{marginTop: 50, backgroundColor: 'skyblue', borderRadius: 6, padding: 6}}>
                <Button 
                    onPress={this.BtnTwoPress}
                    title="ButtonTwo"    
                    color="#333"
                />
                </View>
            </View>
        )
    }
}




