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

const Data = [
  {
    id: 1,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F115-1150152_default-profile-picture-avatar-png-green.png&f=1&nofb=1',
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 2,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F115-1150152_default-profile-picture-avatar-png-green.png&f=1&nofb=1',
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 3,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F115-1150152_default-profile-picture-avatar-png-green.png&f=1&nofb=1',
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 4,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F115-1150152_default-profile-picture-avatar-png-green.png&f=1&nofb=1',
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 5,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F115-1150152_default-profile-picture-avatar-png-green.png&f=1&nofb=1',
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 6,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F115-1150152_default-profile-picture-avatar-png-green.png&f=1&nofb=1',
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 7,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F115-1150152_default-profile-picture-avatar-png-green.png&f=1&nofb=1',
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 8,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F115-1150152_default-profile-picture-avatar-png-green.png&f=1&nofb=1',
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 9,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F115-1150152_default-profile-picture-avatar-png-green.png&f=1&nofb=1',
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 10,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F115-1150152_default-profile-picture-avatar-png-green.png&f=1&nofb=1',
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
];

// import action
import companyAction from '../redux/actions/company';

// Import component
import CardJobSeeker from '../Components/CardJobSeeker';

const Home = () => {
  const company = useSelector((state) => state.company);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      companyAction.getProfileCompany(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZUlkIjoyLCJpYXQiOjE2MDY5MDQzNzcsImV4cCI6MTYwNzc2ODM3N30.5Nfl-VK9RSJHL41w8hHDuldned-PiK8YSkswZIXaoRU',
      ),
    );
  }, []);
  const {profileCompany} = company;
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
            <Text style={styles.txtName}>Hai, {profileCompany.name}!</Text>
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
          data={Data}
          renderItem={({item, index}) => (
            <CardJobSeeker
              dataLength={Data.length}
              dataJobSeeker={item}
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
          data={Data}
          renderItem={({item, index}) => (
            <CardJobSeeker
              dataLength={Data.length}
              dataJobSeeker={item}
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
