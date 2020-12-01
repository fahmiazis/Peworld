import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screen
import Search from './Search';

const Stack = createStackNavigator();

export default function SearchStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
  );
}
