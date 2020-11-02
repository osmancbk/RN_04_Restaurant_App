import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const RestaurantItem = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onSelect}>
            <Image
                style={styles.image}
                source={{ uri: props.restaurant.image_url }}

            />
            <View style={styles.textContainer} >
                <Text style={styles.name}>{props.restaurant.name}</Text>
                <Text style={styles.price}>
                    {'🤑'.repeat(props.restaurant.price)}
                </Text>
            </View>
        </TouchableOpacity>

    )
}
export { RestaurantItem };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#039be5',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        flex: 1,

    },

    image: {
        height: Dimensions.get('window').height / 3,
        margin: 5,
        borderRadius: 5
    },
    textContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10

    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e1f5fe'
    },

    price: {
        fontSize: 22,
    }
})


// address: "416 Great Rd"
// area: "Boston / New England"
// city: "Acton"
// country: "US"
// id: 90817
// image_url: "https://www.opentable.com/img/restimages/90817.jpg"
// lat: 42.509747
// lng: -71.421144
// mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=90817"
// name: "Le Lyonnais Restaurant"
// phone: "9782639068"
// postal_code: "01720"
// price: 3
// reserve_url: "http://www.opentable.com/single.aspx?rid=90817"
// state: "MA"