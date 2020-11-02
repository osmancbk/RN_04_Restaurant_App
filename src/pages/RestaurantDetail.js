import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';


const RestaurantDetail = (props) => {
    // console.log(props)
    const { selectedRestaurant } = props.route.params

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.name}>{selectedRestaurant.name}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: selectedRestaurant.image_url }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.postal_code}</Text>
                    <Text style={styles.infoText}>{selectedRestaurant.phone}</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        Linking.openURL(selectedRestaurant.mobile_reserve_url)
                    }>
                    <Text style={styles.reservText}>Go for reservation</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}
export { RestaurantDetail };

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    name: { fontWeight: '300', fontSize: 30 },
    image: { height: Dimensions.get('window').height / 3 },
    infoContainer: {
        backgroundColor: '#29b6f6',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    infoText: { color: 'white', fontWeight: 'bold' },
    button: {
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#1565c0',
        borderRadius: 10,
      },
    reservText: {
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        color: '#FFF',
      },
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