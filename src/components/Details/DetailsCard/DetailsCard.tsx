import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailsCard = ({ card }: DetailsCardProps ) => {

    const { icon, name, money } = card

    return (
        <View>
            <View>
                <View>{ icon }</View>
                <View>
                    <Text>{ name }</Text>
                    <Text>$ { money }</Text>
                </View>
            </View>
            <Button /> +

        </View>
    )
}

interface DetailsCardProps {
    card:  CardProps
}

export type CardProps = {
    icon: string
    name: string
    money: number
}

export default DetailsCard