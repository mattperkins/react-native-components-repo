import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


export default class Props extends React.Component{
    render() {
        let msg = `Hello ${this.props.msg}`
        return (
            <Text>{msg}</Text>
        )
    }
}