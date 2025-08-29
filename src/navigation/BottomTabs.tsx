import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TalksScreen from '../screens/TalksScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import InfoScreen from '../screens/InfoScreen';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const name = route.name === 'Palestras'
            ? (focused ? 'time' : 'time-outline')
            : route.name === 'Favoritos'
            ? (focused ? 'star' : 'star-outline')
            : (focused ? 'information-circle' : 'information-circle-outline');
          return <Ionicons name={name as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primaryBlue,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.textPrimary,
        headerTitleStyle: { fontFamily: 'RBrasSeagro' }
      })}
    >
      <Tab.Screen name="Palestras" component={TalksScreen} />
      <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      <Tab.Screen name="Informações" component={InfoScreen} />
    </Tab.Navigator>
  );
}


