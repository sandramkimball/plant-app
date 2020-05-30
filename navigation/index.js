import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';


import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Explore from '../screens/Explore'
import Browse from '../screens/Browse'
import Product from '../screens/Product'
import Settings from '../screens/Settings'

import { theme } from '../constants'

const screens = createStackNavigator({
    Welcome,
    Login, 
    Signup,
    Explore, 
    Browse, 
    Product, 
    Settings
}, {
    defaultNavigationOptions: {
        headerStyle: {
            height: theme.sizes.base = 4,
            backgroundColor: theme.colors.white,
            borderBottomColor: 'transparent',
            elevation: 0, // for android
        },
        headerBackImage: <Image source={ require('../assets/icons/back.png')} />,
        headerBackTitle: null,
        headerLeftContainerStyle: {
            alignItems: 'center',
            marginLeft: theme.sizes.padding * 1.2,
            paddingRight: theme.sizes.base
        },
        headerRightContainerStyle: {
            alignItems: 'center',
            paddingRight: theme.sizes.base}
    }
});

export default createAppContainer(screens)