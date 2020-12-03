/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import jwtDecode from 'jwt-decode';
import SplashScreen from 'react-native-splash-screen';

// import action
import companyAction from '../redux/actions/company';
import saveUserAction from '../redux/actions/user';

// Import component
import CardJobSeeker from '../Components/CardJobSeeker';

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const company = useSelector((state) => state.company);
  const {token} = auth;
  const decode = jwtDecode(token);
  console.log(decode);
  const seeker = useSelector((state) => state.jobseeker);
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const {profileCompany, listJobSeeker} = company;
  const {profileJobSeeker} = seeker;
  useEffect(() => {
    SplashScreen.hide();
    dispatch(companyAction.getProfileCompany(token));
    dispatch(companyAction.getListOfJobSeeker(token));
    if (Object.keys(profileCompany).length) {
      dispatch(saveUserAction.saveUser(profileCompany));
    } else {
      dispatch(saveUserAction.saveUser(profileJobSeeker));
    }
  }, []);

  const navigation = useNavigation();
  const seeDetail = () => {
    const isLogin = 'company';
    if (isLogin === 'jobseeker') {
      navigation.navigate('ProfileCompany');
    } else if (isLogin === 'company') {
      navigation.navigate('ProfileSeekerInfo');
    }
  };
  const onViewAll = () => {
    navigation.navigate('PencarianScreen');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.parent}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/dots.png')}
          style={styles.imgDots}
        />
        <Image
          source={require('../../assets/images/img-curve.png')}
          style={styles.imgCurve}
        />
        <View style={styles.wrapperTitleHeader}>
          <View>
            <Text style={styles.txtDate}>
              {moment.utc().local().format('ddd, DD MMMM YYYY')}
            </Text>
            <Text style={styles.txtName}>Hai, {user.name} !</Text>
          </View>
          <TouchableOpacity
            style={styles.wrapperIconBell}
            onPress={() => navigation.navigate('Notification')}>
            <Icon name="bell-outline" size={35} color="#ffffff" />
            <View danger style={styles.badge} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Web Developer</Text>
        <FlatList
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={listJobSeeker}
          renderItem={({item, index}) => (
            <CardJobSeeker
              dataLength={listJobSeeker.length}
              dataCard={item}
              index={index}
              onPressCard={seeDetail}
              onPressViewAll={onViewAll}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View>
        <Text style={styles.title}>Android Developer</Text>
        <FlatList
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={listJobSeeker}
          renderItem={({item, index}) => (
            <CardJobSeeker
              dataLength={listJobSeeker.length}
              dataCard={item}
              index={index}
              onPressCard={seeDetail}
              onPressViewAll={onViewAll}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
  },
  header: {
    height: 175,
    backgroundColor: '#5E50A1',
    borderBottomRightRadius: 20,
    marginBottom: 40,
  },
  imgDots: {
    position: 'absolute',
  },
  imgCurve: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  wrapperTitleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: '25%',
    paddingHorizontal: 15,
  },
  txtDate: {
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffffff',
    marginBottom: 10,
  },
  txtName: {
    fontSize: 26,
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffffff',
  },
  wrapperIconBell: {
    alignSelf: 'flex-start',
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    right: '20%',
    top: '7%',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
    marginHorizontal: 15,
    marginBottom: 18,
  },
  listContainer: {
    marginRight: 15,
  },
});
