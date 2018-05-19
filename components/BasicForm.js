

import React from 'react'
import { Text, View, TextInput } from 'react-native'


export default class Props extends React.Component{
    constructor(props) {
    super(props)
        this.state = {
           typedText: 'Please add text' 
        }
    }
    render() {            
        return (
            
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput 
                    style={{
                        width: '50%',
                        height:40,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    placeholderTextColor='mediumaquamarine'
                    onChangeText={ (text) => {
                            this.setState((previousState) => {
                                return { typedText: text }
                            })}   
                    }
                />
                <Text style={{marginTop: 50}}>{this.state.typedText}</Text>
            </View>
       
        )
    }
}




