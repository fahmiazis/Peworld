/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
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
  const decode = jwtDecode(auth.token);
  const seeker = useSelector((state) => state.jobseeker);
  const user = useSelector((state) => state.user.userInfo);
  const [modal, setModal] = React.useState(true);
  const dispatch = useDispatch();
  const {profileCompany, listJobSeeker} = company;
  const {profileJobSeeker} = seeker;
  useEffect(() => {
    SplashScreen.hide();
    dispatch(companyAction.getListOfJobSeeker(auth.token));
    if (Object.keys(profileCompany).length) {
      dispatch(saveUserAction.saveUser(profileCompany));
      dispatch(companyAction.getListOfJobSeeker(auth.token));
    } else {
      if (Object.keys(profileCompany).length) {
        dispatch(saveUserAction.saveUser(profileCompany));
        dispatch(companyAction.getListOfJobSeeker(token));
      } else {
        dispatch(saveUserAction.saveUser(profileJobSeeker));
      }
    }
  }, []);

  const navigation = useNavigation();
  const seeDetail = () => {
    if (decode.roleId === 2) {
      navigation.navigate('ProfileSeekerInfo');
    } else {
      navigation.navigate('ProfileCompany');
    }
  };
  const onViewAll = () => {
    navigation.navigate('PencarianScreen');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.parent}>
      {company.isLoading ? (
        <Modal
          transparent
          visible={modal}
          onRequestClose={() => setModal(false)}>
          <View style={styles.modalView}>
            <View style={styles.alertBox}>
              <ActivityIndicator size="large" color="#5E50A1" />
              <Text style={styles.textAlert}>{company.alertMsg}</Text>
            </View>
          </View>
        </Modal>
      ) : company.isError ? (
        <Modal
          transparent
          visible={modal}
          onRequestClose={() => setModal(false)}>
          <View style={styles.modalView}>
            <View style={styles.alertBox}>
              <IconFeather name="alert-circle" size={50} color="red" />
              <Text style={styles.textAlert}>{company.alertMsg}</Text>
            </View>
          </View>
        </Modal>
      ) : null}
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
      {listJobSeeker && listJobSeeker.length > 0 && (
        <View>
          <Text style={styles.title}>Web Developer</Text>
          <FlatList
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={listJobSeeker}
            renderItem={({item, index}) => (
              <CardJobSeeker
                dataCard={item}
                index={index}
                dataLength={listJobSeeker.length}
                onPressCard={seeDetail}
                onPressViewAll={onViewAll}
              />
            )}
            keyExtractor={(item) => item.UserDetail.id.toString()}
          />
        </View>
      )}
      {listJobSeeker && listJobSeeker.length > 0 && (
        <View>
          <Text style={styles.title}>Android Developer</Text>
          <FlatList
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={listJobSeeker}
            renderItem={({item, index}) => (
              <CardJobSeeker
                dataCard={item}
                index={index}
                dataLength={listJobSeeker.length}
                onPressCard={seeDetail}
                onPressViewAll={onViewAll}
              />
            )}
            keyExtractor={(item) => item.UserDetail.id.toString()}
          />
        </View>
      )}
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
  modalView: {
    backgroundColor: 'grey',
    opacity: 0.8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAlert: {
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
});
