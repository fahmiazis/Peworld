import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// import screen
import SignupPekerja from './SignupPekerja';
import SignupPerekrut from './SignupPerekrut';
import Notification from './Notification';

export default function Main() {
  return (
    // <View>
    //   <Text>Main</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerTransparent: true, headerTitleAlign: 'center'}}
          name="Notification"
          component={Notification}
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
