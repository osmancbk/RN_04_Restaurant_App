import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, ActivityIndicator } from 'react-native';

import { RestaurantItem, SearchBar } from '../components';

let originalList = [];

const RestaurantList = (props) => {
    // console.log(props)
    const { selectedCity } = props.route.params
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setLoading] = useState(true);

    const getApi = () => {
        axios.get('http://opentable.herokuapp.com/api/restaurants', { params: { city: selectedCity } })
            .then((response) => {
                setRestaurants(response.data.restaurants)
                originalList = [...response.data.restaurants]
                setLoading(false);
            }) //clg(response)
    }

    useEffect(() => {
        getApi()
    }, [])

    const renderRestaurantList = ({ item }) => {
        return (
            <RestaurantItem
                restaurant={item}
                onSelect={() => props.navigation.navigate('Details', { selectedRestaurant: item })}

            />
        )
    }

    function searchRestaurant(search) {
        const filteredRestaurant = originalList.filter(rest => {
            const text = search.toUpperCase();
            const restName = rest.name.toUpperCase();

            return restName.indexOf(text) > -1;
        })
        setRestaurants(filteredRestaurant);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#81d4fa' }}>
            <View style={{ flex: 1 }}>

                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#01579b', padding: 10 }}>
                    {selectedCity} City Restaurants
                </Text>

                <SearchBar
                    placeholder='Search a restaurant...'
                    onSearch={(value) => searchRestaurant(value)}
                />
                {/*----ACTIVITYINDICATOR--- */}
                {
                    isLoading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color="#311b92" />
                        </View>
                        :
                        <FlatList
                            keyExtractor={(_, index) => index.toString()}
                            data={restaurants}
                            renderItem={renderRestaurantList}
                        />
                }

            </View>
        </SafeAreaView>

    )
}
export { RestaurantList };