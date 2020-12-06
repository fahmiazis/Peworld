import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardSeeker = ({
  dataCard,
  index,
  dataLength,
  onPressCard,
  onPressViewAll,
}) => {
  return (
    <View style={styles.parent}>
      {dataCard && (
        <TouchableOpacity onPress={onPressCard}>
          <View style={styles.card}>
            <Image
              style={styles.imgCard}
              source={
                dataCard.profileAvatar
                  ? {uri: dataCard.profileAvatar}
                  : require('../../assets/images/default-avatar1.png')
              }
            />
            <Text style={styles.nameCard}>{dataCard.name}</Text>
            <Text style={styles.titleCard}>{dataCard.jobDesk}</Text>
            {dataCard.email && (
              <View style={styles.wrapperSkills}>
                {dataCard.email && (
                  <View style={styles.bgTxtSkill}>
                    <Text style={styles.txtSkill}>{dataCard.email}</Text>
                  </View>
                )}
                {dataCard.instagram && (
                  <View style={styles.bgTxtSkill}>
                    <Text style={styles.txtSkill}>{dataCard.instagram}</Text>
                  </View>
                )}
                {dataCard.linkedin && (
                  <View style={styles.bgTxtSkill}>
                    <Text style={styles.txtSkill}>{dataCard.linkedin}</Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}
      {dataLength - index === 1 && (
        <TouchableOpacity onPress={onPressViewAll} style={styles.cardNext}>
          <View style={styles.wrapperIconNext}>
            <Icon name="chevron-right" size={40} color="#9EA0A5" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CardSeeker;

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
    marginLeft: 15,
    paddingHorizontal: 15,
    shadowColor: '#ffffff40',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
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
    backgroundColor: '#ffffff50',
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
  },
});
