

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Msg = ({user, style}) => <Text style={style}>{user}</Text>


export default class Props extends React.Component{
    render() {
        let name = `Hello ${this.props.msg}`
        return (
            <Msg 
                style={{marginTop: 200, textAlign: 'center'}}
                user={name}
            />
        )
    }
}




