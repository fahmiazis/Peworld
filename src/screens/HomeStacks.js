import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screen
import Home from './Home';
import ProfileSeekerInfo from './ProfileSeekerInfo';
import ProfileCompany from './ProfileCompany';

const Stack = createStackNavigator();

export default function HomeStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileSeekerInfo"
        component={ProfileSeekerInfo}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileCompany"
        component={ProfileCompany}
      />
    </Stack.Navigator>
  );
}
