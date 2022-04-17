import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ClipScreen from '../screens/ClipScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

const Stack = new createNativeStackNavigator();
const Tab = new createBottomTabNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Article" component={ArticleScreen} />
        </Stack.Navigator>
    );
};
const ClipStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Clip"
                component={ClipScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Article" component={ArticleScreen} />
        </Stack.Navigator>
    );
};

const screenOption = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
            iconName = 'home';
        } else if (route.name === 'クリップ一覧') {
            iconName = 'bookmark';
        }
        return <FontAwesome name={iconName} size={size} color={color} />;
    },
});

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOption}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="クリップ一覧" component={ClipStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
