import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import jwtDecode from 'jwt-decode';

// Import Screen
import ProfileCompany from './ProfileCompany';
import ProfileSeekerInfo from './ProfileSeekerInfo';
import EditProfileCompany from './EditProfileCompany';
import EditProfileSeeker from './EditProfileSeeker';

const Stack = createStackNavigator();

export default function ProfileStacks() {
  const auth = useSelector((state) => state.auth);
  const role = jwtDecode(auth.token).roleId;

  return (
    <Stack.Navigator>
      {role === 1 && (
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
      {role === 2 && (
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
