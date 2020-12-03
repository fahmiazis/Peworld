import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import jwt_decode from 'jwt-decode';
import {useSelector} from 'react-redux';

// Import Screen
import ProfileCompany from './ProfileCompany';
import ProfileSeekerInfo from './ProfileSeekerInfo';
import EditProfileCompany from './EditProfileCompany';
import EditProfileSeeker from './EditProfileSeeker';

const Stack = createStackNavigator();

export default function ProfileStacks() {
  const auth = useSelector((state) => state.auth);
  const decoded = jwt_decode(auth.token);
  return (
    <Stack.Navigator>
      {decoded.roleId === 1 && (
        <>
          <Stack.Screen
            options={{headerShown: false}}
            name="ProfileSeekerInfo"
            component={ProfileSeekerInfo}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="EditProfileSeeker"
            component={EditProfileSeeker}
          />
        </>
      )}
      {decoded.roleId === 2 && (
        <>
          <Stack.Screen
            options={{headerShown: false}}
            name="ProfileCompany"
            component={ProfileCompany}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="EditProfileCompany"
            component={EditProfileCompany}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
