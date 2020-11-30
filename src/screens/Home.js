import React from 'react';
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

// Import component
import CardJobSeeker from '../Components/CardJobSeeker';
const Home = () => {
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
            <Text style={styles.txtDate}>Sen, 21 April 2020</Text>
            <Text style={styles.txtName}>Hai, Mohammad!</Text>
          </View>
          <TouchableOpacity style={styles.wrapperIconBell}>
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
          renderItem={({item}) => <CardJobSeeker dataJobSeeker={item} />}
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
          renderItem={({item}) => <CardJobSeeker dataJobSeeker={item} />}
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
    marginBottom: 30,
  },
});
