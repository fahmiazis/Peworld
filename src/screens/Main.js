import React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Component
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomTabs"
          component={BottomTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
