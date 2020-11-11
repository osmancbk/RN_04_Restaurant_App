<h1 align="center">RN_04 Restaurant App</h1>


<div align="center">
  <h3>
    <a href="https://github.com/osmancbk/RN_04_Restaurant_App">
      Project Source
    </a>
 
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

<img src="src/assets/rest.gif" height="500">

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React-native](https://reactnative.dev/)


## Features

This app comprises use of Stack Navigation and RESTFUL Web APIs

- Source is pulled API from 'https://opentable.herokuapp.com/'

## How To Use

```
npm install @react-navigation/native
```
```
For expo :
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

For bare React-native:
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
```
For IOS:
npx pod-install ios
```

```
npm install @react-navigation/stack
```

```
npm install axios
```


<hr/>
<br/>


## Piece of Code
```
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
```

```
    const getApi = async () => {
        const response = await axios.get('http://opentable.herokuapp.com/api/cities');
        setCities(response.data.cities)
        originalList = [...response.data.cities]
        setLoading(false);
    }

    useEffect(() => {
        getApi();
    }, [])
```

```
    const getApi = () => {
        axios.get('http://opentable.herokuapp.com/api/restaurants', { params: { city: selectedCity } })
            .then((response) => {
                setRestaurants(response.data.restaurants)
                originalList = [...response.data.restaurants]
                setLoading(false);
            })
    }

    useEffect(() => {
        getApi()
    }, [])
```

```
    function searchRestaurant(search) {
        const filteredRestaurant = originalList.filter(rest => {
            const text = search.toUpperCase();
            const restName = rest.name.toUpperCase();

            return restName.indexOf(text) > -1;
        })
        setRestaurants(filteredRestaurant);
    }
```

```
    <TouchableOpacity
        style={styles.button}
        onPress={() =>
            Linking.openURL(selectedRestauranmobile_reserve_url)
        }>
        <Text style={styles.reservText}>Go foreservation</Text>
    </TouchableOpacity>
```

```
    <Text style={styles.price}>
        {'🤑'.repeat(props.restaurant.price)}
    </Text>
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->

- [Source of APIs](https://opentable.herokuapp.com/)

## Contact

- GitHub [osmancbk](https://github.com/osmancbk)
- Linkedin 
