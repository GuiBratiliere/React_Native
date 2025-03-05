import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuth } from '../Contexts/Auth';


const Stack = createNativeStackNavigator();



export function Router() {
    const {authData} = useAuth();
  return (
    <NavigationContainer>
        {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
