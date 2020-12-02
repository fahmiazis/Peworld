import React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Import Component
import BottomTabs from './BottomTabs';

// import screen
import SignupPekerja from './SignupPekerja';
import SignupPerekrut from './SignupPerekrut';
import Notification from './Notification';
import EditProfileCompany from './EditProfileCompany';
import ChatRoom from './ChatRoom';

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomTabs"
          component={BottomTabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditProfileCompany"
          component={EditProfileCompany}
        />
        <Stack.Screen
          options={{headerTransparent: true, headerTitleAlign: 'center'}}
          name="Notification"
          component={Notification}
        />
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerTitleAlign: 'center',
            title: 'Sender',
          }}
          name="ChatRoom"
          component={ChatRoom}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignupPekerja"
          component={SignupPekerja}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignupPerekrut"
          component={SignupPerekrut}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
