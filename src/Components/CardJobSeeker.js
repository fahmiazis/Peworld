import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {API_URL} from '@env';

const CardJobSeeker = ({
  dataCard,
  index,
  dataLength,
  onPressCard,
  onPressViewAll,
}) => {
  let avatar = '';
  if (dataCard.User.profileAvatar) {
    avatar = dataCard.User.profileAvatar.avatar;
  } else if (dataCard.User.companyAvatar) {
    avatar = dataCard.User.companyAvatar.avatar;
  }
  console.log(dataCard.skills);
  return (
    <View style={styles.parent}>
      <TouchableOpacity onPress={onPressCard}>
        <View style={styles.card}>
          <Image
            style={styles.imgCard}
            source={
              avatar
                ? {uri: `${API_URL}${avatar}`}
                : require('../../assets/images/default-avatar1.png')
            }
          />
          <Text style={styles.nameCard}>{dataCard.name}</Text>
          <Text style={styles.titleCard}>
            {dataCard.jobTitle || dataCard.jobDesk}
          </Text>
          {dataCard.skills && dataCard.skills.length > 0 && (
            <View style={styles.wrapperSkills}>
              {dataCard.skills[0] && (
                <View style={styles.bgTxtSkill}>
                  <Text style={styles.txtSkill}>
                    {dataCard.skills[0].skill.name}
                  </Text>
                </View>
              )}
              {dataCard.skills[1] && (
                <View style={styles.bgTxtSkill}>
                  <Text style={styles.txtSkill}>
                    {dataCard.skills[1].skill.name}
                  </Text>
                </View>
              )}
              {dataCard.skills[2] && (
                <View style={styles.bgTxtSkill}>
                  <Text style={styles.txtSkill}>
                    {dataCard.skills[2].skill.name}
                  </Text>
                </View>
              )}
              {dataCard.skills.length > 3 && (
                <Text style={styles.txtMore}>
                  {dataCard.skills.length - 3}+
                </Text>
              )}
            </View>
          )}
        </View>
      </TouchableOpacity>
      {dataLength - index === 1 && (
        <TouchableOpacity onPress={onPressViewAll} style={styles.cardNext}>
          <View style={styles.wrapperIconNext}>
            <Icon name="chevron-right" size={40} color="#9EA0A5" />
          </View>
          <Text style={styles.txtViewAll}>View all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CardJobSeeker;

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
  },
  card: {
    width: 180,
    height: 250,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#ffffff40',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 5,
    marginBottom: 30,
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
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgTxtSkill: {
    backgroundColor: '#FBB017',
    borderRadius: 4,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 4,
    marginBottom: 5,
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
  cardNext: {
    width: 180,
    height: 220,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  wrapperIconNext: {
    backgroundColor: '#ffffff',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  txtViewAll: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
  },
});
