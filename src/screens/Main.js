import React from 'react';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Import Component
import BottomTabs from './BottomTabs';

// import screen
import Landing from './Landing';
import Login from './Login';
import SignupPekerja from './SignupPekerja';
import SignupCompany from './SignupCompany';
import ResetPassword from './ResetPassword';
import ConfirmPassword from './ConfirmPassword';
import Notification from './Notification';
import ResultSearchScreen from './ResultSearchScreen';
import DetailPortofolio from './DetailPortofolio';
import EditPortofolio from './EditPortofolio';
import ChatRoom from './ChatRoom';
import DetailExperience from './DetailExperience';
import EditExperience from './EditExperience';
import ProfileSeekerInfo from './ProfileSeekerInfo';

export default function Main() {
  const auth = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#F6F7F8" barStyle="dark-content" />
      {!auth.isLogin ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Landing"
            component={Landing}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="SignupPekerja"
            component={SignupPekerja}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="SignupCompany"
            component={SignupCompany}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ResetPassword"
            component={ResetPassword}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ConfirmPassword"
            component={ConfirmPassword}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomTabs"
            component={BottomTabs}
          />
          <Stack.Screen
            options={{
              headerStyle: {backgroundColor: '#F6F7F8', elevation: 0},
              headerTitleStyle: {
                fontSize: 18,
                fontFamily: 'OpenSans-SemiBold',
                color: '#1F2A36',
              },
              headerTitleAlign: 'center',
            }}
            name="Notification"
            component={Notification}
          />
          <Stack.Screen
            options={{
              headerStyle: {backgroundColor: '#F6F7F8', elevation: 0},
              headerTitle: 'Result Search',
              headerTitleAlign: 'center',
            }}
            name="ResultSearchScreen"
            component={ResultSearchScreen}
          />
          <Stack.Screen
            options={{
              headerStyle: {backgroundColor: '#F6F7F8', elevation: 0},
              headerTitle: false,
            }}
            name="DetailPortofolio"
            component={DetailPortofolio}
          />
          <Stack.Screen
            options={{
              headerStyle: {backgroundColor: '#F6F7F8', elevation: 0},
              headerTitle: false,
            }}
            name="EditPortofolio"
            component={EditPortofolio}
          />
          <Stack.Screen
            options={({route}) => ({
              headerTitle:
                route.params.name ||
                route.params.senderName ||
                route.params.recipientName,
            })}
            name="ChatRoom"
            component={ChatRoom}
          />
          <Stack.Screen
            options={{
              headerStyle: {backgroundColor: '#F6F7F8', elevation: 0},
              headerTitle: false,
            }}
            name="DetailExperience"
            component={DetailExperience}
          />
          <Stack.Screen
            options={{
              headerStyle: {backgroundColor: '#F6F7F8', elevation: 0},
              headerTitle: false,
            }}
            name="EditExperience"
            component={EditExperience}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
