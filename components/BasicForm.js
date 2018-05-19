

import React from 'react'
import { Text, View, TextInput } from 'react-native'


export default class Props extends React.Component{
    constructor(props) {
    super(props)
        this.state = {
           email: ' ',
           password: ' ' 
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
                                return { email: text }
                            })}   
                    }
                />
                <Text style={{marginVertical: 50}}>{this.state.email}</Text>


                <TextInput 
                    style={{
                        width: '50%',
                        height:40,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    keyboardType='default'
                    placeholder='Enter your password'
                    placeholderTextColor='mediumaquamarine'
                    secureTextEntry={true}
                    onChangeText={ (text) => {
                            this.setState((previousState) => {
                                return { password: text }
                            })}   
                    }
                />
                <Text style={{marginVertical: 50}}>{this.state.password}</Text>
            </View>
       
        )
    }
}




