import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native'

export const ToggleLanguage = ({ isEnabled, toggleSwitch }) => {

    return (
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default ToggleLanguage