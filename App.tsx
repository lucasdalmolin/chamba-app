import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Hello from './Hello'
import ToggleLanguage from './src/components/ToggleLanguage';
import MainStack from './src/navigation/MainStack';
import UserProvider from './src/context/UserProvider';


const App: React.FC = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <UserProvider>
            <View style={styles.container} >
                <MainStack />
            </View>
        </UserProvider>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        padding: 20,
    }
})


export default App
