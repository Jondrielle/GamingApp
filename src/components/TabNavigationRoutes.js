import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SavedGamesScreen from "../screens/SavedGamesScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons, Entypo, Octicons } from '@expo/vector-icons';


const TabNavigationRoutes = createBottomTabNavigator({
    SavedGames: {
        screen: SavedGamesScreen,
        navigationOptions: {
            tabBarIcon: () => {
                const iconName= "game-controller"
                return <Ionicons name={iconName} size={30}/>
            }
        }
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            tabBarIcon: () => {
                const iconName= "magnifying-glass"
                return <Entypo name={iconName} size={30}/>
            }
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: () => {
                const iconName= "person"
                return <Ionicons name={iconName} size={30}/>
            }
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarIcon: () => {
                const iconName= "gear"
                return <Octicons name={iconName} size={30}/>
            }
        }
    },
},
{
//TAB NAVIGATION COLOR SCHEME 
tabBarOptions: {
    activeTintColor: "#2f4f4f",
    activeBackgroundColor: "#8fbc8f",
    inactiveTintColor: "#808080",
    inactiveBackgroundColor: "#f5fffa",
}	
});

export default TabNavigationRoutes;