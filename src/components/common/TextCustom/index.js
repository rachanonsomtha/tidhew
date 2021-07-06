import React from 'react'
import { Text } from 'react-native'

const MyTextCustomFont = (props) => {
    return (
         <Text style={{fontFamily:'Kanit'}} {...props} >{props.children}</Text>
    )
 }

export default MyTextCustomFont
