import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {Image, StyleSheet, View} from 'react-native';

// Import Component Bottom Tabs
import HomeStacks from './HomeStacks';
import SearchStacks from './SearchStacks';
import ProfileStacks from './ProfileStacks';
import MessageStack from './MessageStack'

const Bottom = createBottomTabNavigator();

export class BottomTabs extends Component {
  render() {
    return (
      <Bottom.Navigator
        tabBarOptions={{
          activeTintColor: '#5E50A1',
          inactiveTintColor: '#9EA0A5',
          showLabel: false,
          keyboardHidesTabBar: true,
          style: {
            height: 70,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <Bottom.Screen
          options={{
            tabBarIcon: ({size, color, focused}) => (
              <Icon name="grid" size={size} color={color} />
            ),
          }}
          name="HomeStacks"
          component={HomeStacks}
        />
        <Bottom.Screen
          options={{
            tabBarIcon: ({size, color, focused}) => (
              <Icon name="search" size={size} color={color} />
            ),
          }}
          name="SearchStacks"
          component={SearchStacks}
        />
        <Bottom.Screen
          options={{
            tabBarIcon: ({size, color, focused}) => (
              <Icon name="message-circle" size={size} color={color} />
            ),
          }}
          name="Inbox"
          component={MessageStack}
        />
        <Bottom.Screen
          options={{
            tabBarIcon: ({size, color, focused}) => (
              <View style={focused && styles.wrapperIconProfile}>
                <Image style={styles.imgProfile} />
              </View>
            ),
          }}
          name="ProfileStacks"
          component={ProfileStacks}
        />
      </Bottom.Navigator>
    );
  }
}

export default BottomTabs;

const styles = StyleSheet.create({
  wrapperIconProfile: {
    borderColor: '#5E50A1',
    borderWidth: 1.5,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgProfile: {
    backgroundColor: 'powderblue',
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
  },
});
