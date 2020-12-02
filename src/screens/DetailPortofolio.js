import {useNavigation} from '@react-navigation/native';
import {Button} from 'native-base';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const DetailPortofolio = () => {
  const navigation = useNavigation();
  const isLogin = 'jobseeker';
  return (
    <ScrollView>
      <View style={styles.parent}>
        <View style={styles.wrapperInfo}>
          <Text style={styles.appName}>
            Aplikasi MyChat Clone WhatsApp Chat
          </Text>
          <Text style={styles.appType}>Aplikasi Mobile</Text>
          <Text style={styles.companyName}>PT Google</Text>
          <View style={styles.wrapperRepoLink}>
            <Icon name="github" size={25} color="#9EA0A5" style={styles.icon} />
            <Text style={styles.linkRepo}>link repo</Text>
          </View>
          <View style={styles.wrapperRepoLink}>
            <Icon name="globe" size={25} color="#9EA0A5" style={styles.icon} />
            <Text style={styles.linkRepo}>link website</Text>
          </View>
          <View style={styles.hr} />
          <Text style={styles.titleDesc}>Deskripsi</Text>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </Text>

          <Image style={styles.imgPortofolio} />
          <Image style={styles.imgPortofolio} />
          <Image style={styles.imgPortofolio} />
          {isLogin === 'jobseeker' && (
            <Button
              full
              style={styles.btn}
              onPress={() => navigation.navigate('EditPortofolio')}>
              <Text style={styles.txt}>Edit portofolio</Text>
            </Button>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailPortofolio;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  wrapperInfo: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  imgPortofolio: {
    height: 204,
    width: '100%',
    backgroundColor: 'powderblue',
    borderRadius: 4,
    marginTop: 20,
  },
  appName: {
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
    marginBottom: 5,
  },
  appType: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
    marginBottom: 10,
  },
  companyName: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
    marginBottom: 10,
  },
  wrapperRepoLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  linkRepo: {
    color: '#9EA0A5',
  },
  hr: {
    width: '100%',
    borderColor: '#E2E5ED',
    borderWidth: 1,
    marginVertical: 10,
  },
  titleDesc: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
    marginVertical: 10,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'justify',
    lineHeight: 22,
    color: '#9EA0A5',
  },
  btn: {
    height: 50,
    backgroundColor: '#5E50A1',
    borderRadius: 4,
    marginTop: 30,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: '#ffffff',
  },
});
