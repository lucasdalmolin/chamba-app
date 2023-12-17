import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Hello from './Hello'
import ToggleLanguage from './components/ToggleLanguage';


const App: React.FC = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View style={styles.container} >
            {/* <Hello /> */}
            <ToggleLanguage 
                isEnabled={isEnabled} 
                toggleSwitch={toggleSwitch} 
            />
            
            { 
                isEnabled ?
                <View style={{backgroundColor: 'blue', flex: 0.3, height: 100, width: 100}} /> 
                :
                <View style={{backgroundColor: 'red', flex: 0.5, height: 100, width: 100}} />
            }
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 100,
        width: 50,
        padding: 20,
    }
})


export default App
