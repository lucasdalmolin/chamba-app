import { View, Text } from 'react-native'
import React from 'react'

const Title = ({ title }: { title: string }) => {
  return (
    <Text>{ title }</Text>
  )
}

export default Title