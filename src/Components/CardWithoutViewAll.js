import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {API_URL} from '@env';

const CardWithoutViewAll = ({dataCard, onPressCard}) => {
  const {UserDetail} = dataCard;
  return (
    <View style={styles.parent}>
      {UserDetail && (
        <TouchableOpacity onPress={onPressCard}>
          <View style={styles.card}>
            <Image
              style={styles.imgCard}
              source={
                UserDetail.profileAvatar
                  ? {uri: `${API_URL}${UserDetail.profileAvatar.avatar}`}
                  : require('../../assets/images/default-avatar1.png')
              }
            />
            <Text style={styles.nameCard}>{UserDetail.name}</Text>
            <Text style={styles.titleCard}>{UserDetail.jobTitle}</Text>
            {UserDetail.skills && UserDetail.skills.length > 0 && (
              <View style={styles.wrapperSkills}>
                {UserDetail.skills[0] && (
                  <View style={styles.bgTxtSkill}>
                    <Text style={styles.txtSkill}>{UserDetail.skills[0]}</Text>
                  </View>
                )}
                {UserDetail.skills[1] && (
                  <View style={styles.bgTxtSkill}>
                    <Text style={styles.txtSkill}>{UserDetail.skills[1]}</Text>
                  </View>
                )}
                {UserDetail.skills[2] && (
                  <View style={styles.bgTxtSkill}>
                    <Text style={styles.txtSkill}>{UserDetail.skills[2]}</Text>
                  </View>
                )}
                {UserDetail.skills.length > 3 && (
                  <Text style={styles.txtMore}>
                    {UserDetail.skills.length - 3}+
                  </Text>
                )}
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CardWithoutViewAll;

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
  },
  card: {
    width: 180,
    height: 220,
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
