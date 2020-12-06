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
  // const seeker = useSelector((state) => state.jobseeker);
  const user = useSelector((state) => state.user.userInfo);
  const [modal, setModal] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    profileCompany,
    listMobileJobSeeker,
    listFullStackJobSeeker,
    listWebJobSeeker,
    listJobSeeker,
  } = company;
  // const {profileJobSeeker} = seeker;
  useEffect(() => {
    try {
      SplashScreen.hide();
      if (decode.roleId === 2) {
        dispatch(companyAction.getListJobSeeker(auth.token)).catch((e) =>
          console.log(e.message),
        );
        dispatch(
          companyAction.getListFullStackJobSeeker(auth.token),
        ).catch((e) => console.log(e.message));
        dispatch(companyAction.getListMobileJobSeeker(auth.token)).catch((e) =>
          console.log(e.message),
        );
        dispatch(companyAction.getListWebJobSeeker(auth.token)).catch((e) =>
          console.log(e.message),
        );
      }
      if (!Object.keys(user).length > 0) {
        setLoading(true);
      }
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  if (company.isSuccessGetProfileCompany) {
    dispatch(saveUserAction.saveUser(profileCompany));
    dispatch(companyAction.clearMessage());
    setLoading(false);
  }

  // button function
  const seeDetail = async (id) => {
    if (decode.roleId === 2) {
      console.log(id);
      await dispatch(companyAction.getDetailJobSeeker(auth.token, id));
      navigation.navigate('ProfileSeekerInfo', {id});
    } else {
      navigation.navigate('ProfileCompany', {id: id});
    }
  };

  const onViewAll = (search = '') => {
    if (search.length > 0) {
      navigation.navigate('ResultSearchScreen', {search});
    } else {
      navigation.navigate('ResultSearchScreen');
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.parent}>
      {company.isLoading || loading ? (
        <Modal
          transparent
          visible={modal}
          onRequestClose={() => setModal(false)}>
          <View style={styles.modalView}>
            <View style={styles.alertBox}>
              <ActivityIndicator size="large" color="#5E50A1" />
              <Text style={styles.textAlert}>Loading ...</Text>
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
            {user.Company && (
              <Text style={styles.txtName}>Hai, {user.Company.name} !</Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.wrapperIconBell}
            onPress={() => navigation.navigate('Notification')}>
            <Icon name="bell-outline" size={35} color="#ffffff" />
            <View danger style={styles.badge} />
          </TouchableOpacity>
        </View>
      </View>
      {company.listFullStackJobSeeker !== undefined &&
        listFullStackJobSeeker &&
        listFullStackJobSeeker.length > 0 && (
          <View>
            <Text style={styles.title}>Fullstack Developer</Text>
            <FlatList
              contentContainerStyle={styles.listContainer}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={listFullStackJobSeeker}
              renderItem={({item, index}) => (
                <CardJobSeeker
                  dataCard={item}
                  index={index}
                  dataLength={listFullStackJobSeeker.length}
                  onPressCard={() => seeDetail(item.id)}
                  onPressViewAll={() => onViewAll('fullstack')}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        )}
      {company.listMobileJobSeeker &&
        listMobileJobSeeker &&
        listMobileJobSeeker.length > 0 && (
          <View>
            <Text style={styles.title}>Mobile Developer</Text>
            <FlatList
              contentContainerStyle={styles.listContainer}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={listMobileJobSeeker}
              renderItem={({item, index}) => (
                <CardJobSeeker
                  dataCard={item}
                  index={index}
                  dataLength={listMobileJobSeeker.length}
                  onPressCard={() => seeDetail(item.id)}
                  onPressViewAll={() => onViewAll('mobile')}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        )}
      {company.listWebJobSeeker !== undefined &&
        listWebJobSeeker &&
        listWebJobSeeker.length > 0 && (
          <View>
            <Text style={styles.title}>Web Developer</Text>
            {console.log('get')}
            <FlatList
              contentContainerStyle={styles.listContainer}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={listWebJobSeeker}
              renderItem={({item, index}) => (
                <CardJobSeeker
                  dataCard={item}
                  index={index}
                  dataLength={listWebJobSeeker.length}
                  onPressCard={() => seeDetail(item.id)}
                  onPressViewAll={() => onViewAll('web')}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        )}
      {company.listJobSeeker !== undefined &&
        listJobSeeker &&
        listJobSeeker.length > 0 && (
          <View>
            <Text style={styles.title}>All Seeker</Text>
            <View style={styles.listContainerAll}>
              {listJobSeeker.map((element, index) => (
                <View key={element.id.toString()}>
                  <CardJobSeeker
                    dataCard={element}
                    dataLength={listJobSeeker.length}
                    index={index}
                    onPressCard={() => seeDetail(element.id)}
                    keyId={element.id}
                    onPressViewAll={onViewAll}
                  />
                </View>
              ))}
            </View>
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
    paddingLeft: 10,
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
  listContainerAll: {
    paddingLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
