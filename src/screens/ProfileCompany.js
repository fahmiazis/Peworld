import {Button} from 'native-base';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import authAction from '../redux/actions/auth';
import companyAction from '../redux/actions/company';
import skillAction from '../redux/actions/getSkill';
import jobseekerAction from '../redux/actions/jobseeker';
import messageAction from '../redux/actions/message';
import userAction from '../redux/actions/user';
import {useSelector, useDispatch} from 'react-redux';

import {API_URL} from '@env';

const ProfileCompany = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {Company: user, companyAvatar} = useSelector(
    (state) => state.user.userInfo,
  );
  const isLogin = 'company';
  const logout = () => {
    dispatch(authAction.logout());
    dispatch(companyAction.logout());
    dispatch(skillAction.logout());
    dispatch(jobseekerAction.logout());
    dispatch(messageAction.logout());
    dispatch(userAction.logout());
  };
  const stillLogin = useSelector((state) => state.auth.isLogin);
  return (
    <ScrollView>
      {console.log(user)}
      <View style={styles.parent}>
        {stillLogin && (
          <View style={styles.profileInfo}>
            <Image
              source={
                companyAvatar
                  ? {uri: API_URL.concat(companyAvatar.avatar)}
                  : require('../../assets/images/default-avatar1.png')
              }
              style={styles.imgProfile}
            />
            <Text style={styles.name}>{user.name}</Text>
            {user.jobDesk ? (
              <Text style={styles.title}>{user.jobDesk}</Text>
            ) : (
              <Text style={styles.title}>Silahkan lengkapi profile Anda</Text>
            )}
            {user.city && (
              <View style={styles.wrapperLocation}>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color="#9EA0A5"
                  style={styles.iconLocation}
                />
                <Text style={styles.txtLocation}>{user.city}</Text>
              </View>
            )}
            {user.description ? (
              <Text style={styles.content}>{user.description}</Text>
            ) : (
              <Text />
            )}

            {isLogin === 'company' && (
              <Button
                full
                style={styles.btn}
                onPress={() => navigation.navigate('EditProfileCompany')}>
                <Text style={styles.txt}>Edit profile</Text>
              </Button>
            )}
            <View style={styles.wrapperIcons}>
              <IconMCI
                name="email-outline"
                size={20}
                color="#9EA0A5"
                style={styles.icons}
              />
              <Text style={styles.titleIcons}>{user.email}</Text>
            </View>
            {user.instagram && (
              <View style={styles.wrapperIcons}>
                <IconMCI
                  name="instagram"
                  size={20}
                  color="#9EA0A5"
                  style={styles.icons}
                />
                <Text style={styles.titleIcons}> {user.instagram} </Text>
              </View>
            )}
            {user.linkedin && (
              <View style={styles.wrapperIcons}>
                <IconFeather
                  name="linkedin"
                  size={20}
                  color="#9EA0A5"
                  style={styles.icons}
                />
                <Text style={styles.titleIcons}>{user.linkedin}</Text>
              </View>
            )}
          </View>
        )}

        <Button block style={styles.btn} onPress={logout}>
          <Text style={styles.txt}>Logout</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default ProfileCompany;

const styles = StyleSheet.create({
  buttonSave: {
    backgroundColor: '#5E50A1',
    borderRadius: 4,
    marginVertical: 15,
  },
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  profileInfo: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginBottom: 20,
    borderRadius: 10,
  },
  imgProfile: {
    backgroundColor: 'powderblue',
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    alignSelf: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#1F2A36',
    marginBottom: 15,
  },
  wrapperLocation: {
    flexDirection: 'row',
  },
  iconLocation: {
    marginRight: 15,
  },
  txtLocation: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
    marginBottom: 18,
  },
  content: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 40,
  },
  btn: {
    height: 50,
    backgroundColor: '#5E50A1',
    borderRadius: 4,
    marginBottom: 36,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: '#ffffff',
  },
  wrapperIcons: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  icons: {
    marginRight: 22,
  },
  titleIcons: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
  },
});
