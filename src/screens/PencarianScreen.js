import React from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Icon, Container } from 'native-base'

import user from '../assets/images/user.jpg'

// Import component
import CardJobSeeker from '../component/CardJob';

const Data = [
  {
    id: 1,
    image: user,
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 2,
    image: user,
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 3,
    image: user,
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 4,
    image: user,
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 5,
    image: user,
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 6,
    image: user,
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 7,
    image: user,
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 8,
    image: user,
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 9,
    image: user,
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
  {
    id: 10,
    image: user,
    name: 'Louis Tomlinson',
    title: 'Web Developer',
    skills: ['PHP', 'JavaScript', 'ReactJs', 'Java', 'C++'],
  },
];

export default function Pencarian() {
  return (
    <Container style={styles.parent}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.wrapperTitleHeader}>
          <TouchableOpacity style={styles.wrapperIconBell}>
            <Icon style={styles.icon} name="angle-left" type="FontAwesome5" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
      <Text style={styles.title}>Android Developer</Text>
        <FlatList
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={Data}
          renderItem={({item}) => (
            <CardJobSeeker
              dataJobSeeker={item}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <View>
        <FlatList
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={Data}
          renderItem={({item}) => (
            <CardJobSeeker
              dataJobSeeker={item}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
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
    </ScrollView>
    </Container>
   
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
  },
  header: {
    height: 140,
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
    marginTop: 25,
    marginLeft: 15,
  },
  icon: {
    fontSize: 40,
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