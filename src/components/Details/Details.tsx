import { View, Text, FlatList } from 'react-native'
import React from 'react'
import DetailsCard from './DetailsCard/DetailsCard'

const cards = [
    { icon: 'dolar', name: 'Ingresos', money: 415000 },
    { icon: 'arrows', name: 'Gastos', money: 100000 },
    { icon: 'chanchito', name: 'Ahorros', money: 50000 },
]

const Details = () => {


    return (
        <View>
            <Text>Details</Text>
            <FlatList 
                data={ cards }
                renderItem={({ item }) => {
                    return (
                        <DetailsCard card={ item } />
                    );
                  }}
            />
        </View>
    )
}

export default Details