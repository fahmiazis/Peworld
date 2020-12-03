import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import jwtDecode from 'jwt-decode'

// Import Screen
import ProfileCompany from './ProfileCompany';
import ProfileSeekerInfo from './ProfileSeekerInfo';
import EditProfileCompany from './EditProfileCompany';
import EditProfileSeeker from './EditProfileSeeker';

const Stack = createStackNavigator();

export default function ProfileStacks() {
  const token = useSelector((state) => state.auth.token);

  const isLogin = 'jobseeker';
  return (
    <Stack.Navigator>
      {isLogin === 'jobseeker' && (
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
      {isLogin === 'company' && (
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
