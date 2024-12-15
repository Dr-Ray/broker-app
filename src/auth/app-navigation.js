import * as React from 'react';
import LandingScreen from '../screens/dashboard/landing';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/dashboard/profile';
// import { Icon } from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator(); 

const AppNavigator = () => {
    return (
        <Tab.Navigator 
            initialRouteName='Dashboard' 
            
            screenOptions={{
                animation: 'fade',
                headerShown:false
              }}
        >
            <Tab.Screen 
                name="Dashboard" 
                component={LandingScreen} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" />
                      )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                tabBarLabel: 'profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" />
                  ),
                  tabBarBadge: 3,
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator