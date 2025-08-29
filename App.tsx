import React from 'react';
import { NavigationContainer, DarkTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/navigation/BottomTabs';
import ActivityDetailsScreen from './src/screens/ActivityDetailsScreen';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { colors } from './src/theme/colors';

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  Tabs: undefined;
  ActivityDetails: { activityId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    card: colors.surface,
    text: colors.textPrimary,
    primary: colors.primaryBlue,
    border: colors.border,
    notification: colors.primaryGreen
  }
};

export default function App() {
  // Por ora sem arquivo de fonte. Quando adicionar o TTF, carregue aqui.
  const [fontsLoaded, fontError] = useFonts({});

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <FavoritesProvider>
      <NavigationContainer theme={AppDarkTheme}>
        <StatusBar style="light" />
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ActivityDetails"
            component={ActivityDetailsScreen}
            options={{
              title: 'Detalhes',
              headerStyle: { backgroundColor: '#111' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontFamily: 'RBrasSeagro' }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
