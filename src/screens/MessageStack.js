import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screen
import Inbox from './Inbox';

const Stack = createStackNavigator();

export default function SearchStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Inbox"
        component={Inbox}
      />
    </Stack.Navigator>
  );
}
