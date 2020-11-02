import React from 'react';
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from 'react-native';


const CityItem = (props) => {

    return (
        <TouchableOpacity style={styles.container} onPress={props.onSelect}>
            <Text style={styles.text}>{props.city}</Text>
        </TouchableOpacity>

    )
}
export { CityItem };

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
       
    },
    text: {
        fontSize: 20,
        fontWeight: '300',
        color: '#01579b'
    }

}) 