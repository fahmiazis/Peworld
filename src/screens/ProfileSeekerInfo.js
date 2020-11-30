import {Button} from 'native-base';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

const skills = [
  {
    id: 1,
    name: 'Phyton',
  },
  {
    id: 2,
    name: 'Laravel',
  },
  {
    id: 3,
    name: 'Golang',
  },
  {
    id: 4,
    name: 'JavaScript',
  },
  {
    id: 5,
    name: 'PHP',
  },
  {
    id: 6,
    name: 'C++',
  },
  {
    id: 7,
    name: 'Kotlin',
  },
  {
    id: 8,
    name: 'Swift',
  },
];

const ProfileSeekerInfo = () => {
  return (
    <ScrollView>
      <View style={styles.parent}>
        <View style={styles.profileInfo}>
          <Image style={styles.imgProfile} />
          <Text style={styles.name}>Louis Tomlinson</Text>
          <Text style={styles.title}>Web Developer</Text>
          <View style={styles.wrapperLocation}>
            <Ionicons
              name="location-outline"
              size={20}
              color="#9EA0A5"
              style={styles.iconLocation}
            />
            <Text style={styles.txtLocation}>Purwokerto, Jawa Tengah</Text>
          </View>
          <Text style={styles.subtitle}>Talent</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </Text>
          <Button full style={styles.btnHire}>
            <Text style={styles.txtHire}>Hire</Text>
          </Button>
          <Text style={styles.subtitleSkills}>Skill</Text>
          <View style={styles.wrapperSkills}>
            {skills.length &&
              skills.map((e) => (
                <View style={styles.bgSkill} key={e.id.toString()}>
                  <Text style={styles.skill}>{e.name}</Text>
                </View>
              ))}
          </View>
          <View style={styles.wrapperIcons}>
            <IconMCI
              name="email-outline"
              size={20}
              color="#9EA0A5"
              style={styles.icons}
            />
            <Text style={styles.titleIcons}>Louistommo@gmail.com</Text>
          </View>
          <View style={styles.wrapperIcons}>
            <IconMCI
              name="instagram"
              size={20}
              color="#9EA0A5"
              style={styles.icons}
            />
            <Text style={styles.titleIcons}>@Louist91</Text>
          </View>
          <View style={styles.wrapperIcons}>
            <IconFeather
              name="github"
              size={20}
              color="#9EA0A5"
              style={styles.icons}
            />
            <Text style={styles.titleIcons}>@Louistommo</Text>
          </View>
          <View style={styles.wrapperIcons}>
            <IconFeather
              name="gitlab"
              size={20}
              color="#9EA0A5"
              style={styles.icons}
            />
            <Text style={styles.titleIcons}>@Louistommo91</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileSeekerInfo;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    paddingHorizontal: 15,
    paddingVertical: 70,
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
  btnHire: {
    height: 50,
    backgroundColor: '#5E50A1',
    borderRadius: 4,
    marginBottom: 36,
  },
  txtHire: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: '#ffffff',
  },
  subtitleSkills: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
    marginBottom: 20,
  },
  wrapperSkills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 40,
  },
  bgSkill: {
    backgroundColor: '#FBB01780',
    borderColor: '#FBB017',
    borderWidth: 1.5,
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 20,
  },
  skill: {
    fontSize: 12,
    fontFamily: 'OpenSans-SemiBold',
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
