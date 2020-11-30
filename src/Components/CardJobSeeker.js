import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CardJobSeeker = ({dataJobSeeker}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.imgCard} source={{uri: dataJobSeeker.image}} />
      <Text style={styles.nameCard}>{dataJobSeeker.name}</Text>
      <Text style={styles.titleCard}>{dataJobSeeker.title}</Text>
      <View style={styles.wrapperSkills}>
        <View style={styles.bgTxtSkill}>
          <Text style={styles.txtSkill}>{dataJobSeeker.skills[0]}</Text>
        </View>
        <View style={styles.bgTxtSkill}>
          <Text style={styles.txtSkill}>{dataJobSeeker.skills[1]}</Text>
        </View>
        <View style={styles.bgTxtSkill}>
          <Text style={styles.txtSkill}>{dataJobSeeker.skills[2]}</Text>
        </View>
        <Text style={styles.txtMore}>{dataJobSeeker.skills.length - 3}+</Text>
      </View>
    </View>
  );
};

export default CardJobSeeker;

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 220,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 15,
    marginEnd: 15,
    paddingHorizontal: 15,
  },
  imgCard: {
    backgroundColor: 'powderblue',
    height: 72,
    width: 72,
    borderRadius: 4,
    marginBottom: 12,
  },
  nameCard: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
  },
  titleCard: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
    marginBottom: 40,
  },
  wrapperSkills: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bgTxtSkill: {
    backgroundColor: '#FBB017',
    borderRadius: 4,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 4,
  },
  txtSkill: {
    fontSize: 10,
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffffff',
  },
  txtMore: {
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
  },
});
