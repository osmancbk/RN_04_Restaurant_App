import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const SearchBar = (props) => {
    return (
        <View  style={styles.container} >

            <TextInput
            placeholder={props.placeholder}
            onChangeText={(v)=>props.onSearch(v)}
            style={styles.text}
          />
           <Text style={styles.magn}>🔎</Text>
        </View>
    )
}
export { SearchBar };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1f5fe',
        margin: 8,
        padding: 8,
        borderRadius: 5

    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#01579b',
      },
    magn: {
        position: 'absolute',
        left: 10,
        top: 8,
        fontSize: 26,
      },
})