import React from 'react';
// import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screen
import Home from './Home';
import ProfileSeekerInfo from './ProfileSeekerInfo';

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
        options={{title: 'Profile'}}
        name="ProfileSeekerInfo"
        component={ProfileSeekerInfo}
      />
    </Stack.Navigator>
  );
}
