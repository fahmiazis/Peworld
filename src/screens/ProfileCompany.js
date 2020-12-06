/* eslint-disable react-hooks/exhaustive-deps */
import {Button} from 'native-base';
import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import jwtDecode from 'jwt-decode';
import {API_URL} from '@env';

// import action
import authAction from '../redux/actions/auth';
import companyAction from '../redux/actions/company';
import skillAction from '../redux/actions/getSkill';
import jobseekerAction from '../redux/actions/jobseeker';
import messageAction from '../redux/actions/message';
import userAction from '../redux/actions/user';

const ProfileCompany = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userSeeker = useSelector((state) => state.user.userInfo);
  const {Company: user, companyAvatar} = useSelector(
    (state) => state.user.userInfo,
  );
  const auth = useSelector((state) => state.auth);
  const seeker = useSelector((state) => state.jobseeker);
  const {detailCompany} = seeker;
  const decode = jwtDecode(auth.token);
  const logout = () => {
    dispatch(authAction.logout());
    dispatch(companyAction.logout());
    dispatch(skillAction.logout());
    dispatch(jobseekerAction.logout());
    dispatch(messageAction.logout());
    dispatch(userAction.logout());
  };

  useEffect(() => {
    if (decode.roleId === 1) {
      dispatch(
        jobseekerAction.getDetailCompany(auth.token, route.params.id),
      ).catch((e) => console.log(e.message));
    }
  }, []);

  const onApply = () => {
    const templateMsg = {
      content: `Halo, ${detailCompany.name}. Saya ${userSeeker.UserDetail.name} berminat untuk bekerja diperusahaan Anda. Bila Anda berkenan silahkan melihat Profile saya. Terimakasih.`,
    };
    dispatch(
      messageAction.sendMessageSeeker(
        auth.token,
        detailCompany.id,
        templateMsg,
      ),
    );
    navigation.navigate('ChatRoom', {
      id: detailCompany.id,
      name: detailCompany.name,
    });
  };

  const stillLogin = useSelector((state) => state.auth.isLogin);
  return (
    <ScrollView>
      <View style={styles.parent}>
        {decode.roleId === 2 && stillLogin && (
          <View style={styles.profileInfo}>
            <Image
              source={
                companyAvatar
                  ? {uri: API_URL.concat(companyAvatar.avatar)}
                  : require('../../assets/images/default-avatar1.png')
              }
              style={styles.imgProfile}
            />
            {user && (
              <>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.title}>{user.jobDesk}</Text>
              </>
            )}
            {user && user.city && (
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
            {user && user.description ? (
              <Text style={styles.content}>{user.description}</Text>
            ) : (
              <Text />
            )}

            {decode.roleId === 2 && (
              <Button
                full
                style={styles.btn}
                onPress={() => navigation.navigate('EditProfileCompany')}>
                <Text style={styles.txt}>Edit profile</Text>
              </Button>
            )}
            {user && user.email && (
              <View style={styles.wrapperIcons}>
                <IconMCI
                  name="email-outline"
                  size={20}
                  color="#9EA0A5"
                  style={styles.icons}
                />
                <Text style={styles.titleIcons}>{user.email}</Text>
              </View>
            )}
            {user && user.instagram && (
              <View style={styles.wrapperIcons}>
                <IconMCI
                  name="instagram"
                  size={20}
                  color="#9EA0A5"
                  style={styles.icons}
                />
                <Text style={styles.titleIcons}>{user.instagram}</Text>
              </View>
            )}
            {user && user.linkedin && (
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
            <View style={styles.wrapperIcons}>
              {user && user.phone ? (
                <>
                  <IconFeather
                    name="phone"
                    size={20}
                    color="#9EA0A5"
                    style={styles.icons}
                  />
                  <Text style={styles.titleIcons}>{user.phone}</Text>
                </>
              ) : (
                []
              )}
            </View>
            <Button block style={styles.btn} onPress={logout}>
              <Text style={styles.txt}>Logout</Text>
            </Button>
          </View>
        )}

        {decode.roleId === 1 && (
          <View style={styles.profileInfo}>
            <Image
              source={
                detailCompany.User.companyAvatar
                  ? {
                      uri: API_URL.concat(
                        detailCompany.User.companyAvatar.avatar,
                      ),
                    }
                  : require('../../assets/images/default-avatar1.png')
              }
              style={styles.imgProfile}
            />
            <View>
              {detailCompany.name ? (
                <Text style={styles.name}>{detailCompany.name}</Text>
              ) : (
                []
              )}
            </View>
            <View>
              {detailCompany.jobDesk ? (
                <Text style={styles.title}>{detailCompany.jobDesk}</Text>
              ) : (
                []
              )}
            </View>
            <View style={styles.wrapperLocation}>
              {detailCompany.city || detailCompany.address ? (
                <>
                  <Ionicons
                    name="location-outline"
                    size={20}
                    color="#9EA0A5"
                    style={styles.iconLocation}
                  />
                  <Text style={styles.txtLocation}>{detailCompany.city}</Text>
                </>
              ) : (
                []
              )}
            </View>
            <View>
              {detailCompany.description ? (
                <Text style={styles.content}>{detailCompany.description}</Text>
              ) : (
                []
              )}
            </View>
            <View style={styles.wrapperIcons}>
              {detailCompany.email ? (
                <>
                  <IconMCI
                    name="email-outline"
                    size={20}
                    color="#9EA0A5"
                    style={styles.icons}
                  />
                  <Text style={styles.titleIcons}>{detailCompany.email}</Text>
                </>
              ) : (
                []
              )}
            </View>
            <View style={styles.wrapperIcons}>
              {detailCompany.instagram ? (
                <>
                  <IconMCI
                    name="instagram"
                    size={20}
                    color="#9EA0A5"
                    style={styles.icons}
                  />
                  <Text style={styles.titleIcons}>
                    {detailCompany.instagram}
                  </Text>
                </>
              ) : (
                []
              )}
            </View>
            <View style={styles.wrapperIcons}>
              {detailCompany.linkedin ? (
                <>
                  <IconMCI
                    name="linkedin"
                    size={20}
                    color="#9EA0A5"
                    style={styles.icons}
                  />
                  <Text style={styles.titleIcons}>
                    {detailCompany.linkedin}
                  </Text>
                </>
              ) : (
                []
              )}
            </View>
            <View style={styles.wrapperIcons}>
              {detailCompany.phone ? (
                <>
                  <IconFeather
                    name="phone"
                    size={20}
                    color="#9EA0A5"
                    style={styles.icons}
                  />
                  <Text style={styles.titleIcons}>{detailCompany.phone}</Text>
                </>
              ) : (
                []
              )}
            </View>
            <Button full style={styles.btnApply} onPress={onApply}>
              <Text style={styles.txtApply}>Apply</Text>
            </Button>
          </View>
        )}
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
  btnApply: {
    height: 50,
    backgroundColor: '#5E50A1',
    borderRadius: 4,
    marginBottom: 20,
  },
  txtApply: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: '#ffffff',
  },
});
