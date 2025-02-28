import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SiginScreen } from '../screens/SiginScreen';


const Stack = createNativeStackNavigator();

export function AuthStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Sigin" component={SiginScreen} />
        </Stack.Navigator>
    );
}
