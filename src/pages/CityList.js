import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, ActivityIndicator } from 'react-native';

import { CityItem, SearchBar } from '../components'

let originalList = [];

const CityList = (props) => {
    const [cities, setCities] = useState([])
    const [isLoading, setLoading] = useState(true);

    const getApi = async () => {
        const response = await axios.get('http://opentable.herokuapp.com/api/cities'); // const {data}
        // console.log(response.data)
        setCities(response.data.cities)
        // console.log(cities)
        originalList = [...response.data.cities]
        // console.log(originalList)
        setLoading(false);
    }

    useEffect(() => {
        getApi();
    }, [])

    const renderCityList = ({ item }) => {
        return (
            <CityItem
                city={item}
                onSelect={() => props.navigation.navigate('Restaurants', { selectedCity: item })}

            />
        )
    }

    const renderSeperator = () => <View style={{ borderWidth: 1, borderColor: '#01579b' }} />

    function searchCity(search) {
        const filteredCities = originalList.filter(city => {
            const text = search.toUpperCase();
            const cityName = city.toUpperCase();

            return cityName.indexOf(text) > -1;
        })

        setCities(filteredCities);
    }

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#81d4fa' }} >
            <View style={{ flex: 1 }} >

                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#01579b', padding: 10 }}>
                    Cities
                </Text>

                <SearchBar
                    placeholder='Search a city...'
                    onSearch={(value) => searchCity(value)}
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
                            data={cities}
                            renderItem={renderCityList}
                            ItemSeparatorComponent={renderSeperator}
                        />
                }

            </View>
        </SafeAreaView>

    )
}
export { CityList };