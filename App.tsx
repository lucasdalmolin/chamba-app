import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Hello from './Hello'


const App: React.FC = () => {

    return (
        <View style={styles.container} >
            <Hello />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default App
