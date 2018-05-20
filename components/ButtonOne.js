

import React from 'react'
import { View, Button, Alert } from 'react-native'


export default class ButtonOne extends React.Component{
    render() {
        
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button 
                    onPress={()=> Alert.alert("Button pressed!")}
                    title="This is a button"    
                    color="#333"
                />
            </View>
        )
    }
}




