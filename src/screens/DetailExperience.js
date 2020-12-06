import {useNavigation} from '@react-navigation/native';
import {Button} from 'native-base';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {API_URL} from '@env';
import experienceAction from '../redux/actions/experience'
import userAction from '../redux/actions/user'
import seekerAction from '../redux/actions/jobseeker'
import {useDispatch, useSelector} from 'react-redux';

const DetailExperience = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const seeker = useSelector((state) => state.jobseeker)
  const auth = useSelector((state) => state.auth)
  const isLogin = 'jobseeker';
  const {experience, index, role, id} = route.params;
  const detail = experience[index];

  const deleteExperience = async () => {
    await dispatch(experienceAction.deleteExperience(auth.token, id))
    await dispatch(seekerAction.getProfileSeeker(auth.token))
    if (seeker.successEdit) {
      const profileJobSeeker = seeker.profileJobSeeker
      dispatch(userAction.saveUser(profileJobSeeker))
      dispatch(seekerAction.clearMessage())
      navigation.navigate('BottomTabs')
    }
  }

  return (
    <ScrollView>
      {console.log(route)}
      <View style={styles.parent}>
        <View style={styles.wrapperInfo}>
          <View style={styles.icons}>
            <Icon name="building" size={80} />
          </View>
          <Text style={styles.appType}>{detail.company}</Text>
          <Text style={styles.titleUp}>Posisi</Text>
          <Text style={styles.appName}>{detail.jobDesk}</Text>
          <Text style={styles.titleUp}>Pada Tahun/Bulan</Text>
          <Text style={styles.appName}>{detail.year}</Text>
          <View style={styles.hr} />
          <Text style={styles.titleDesc}>Deskripsi</Text>
          <Text style={styles.desc}>{detail.description}</Text>
          {/* <Image style={styles.imgPortofolio} />
          <Image style={styles.imgPortofolio} /> */}
          {role === 1 ? (
            <View style={styles.button}>
            <Button
              full
              style={styles.btn}
              onPress={() => navigation.navigate('EditExperience', { id: id })}>
              <Text style={styles.txt}>Edit pengalaman kerja</Text>
            </Button>
            <Button
              full
              style={styles.btn2}
              onPress={deleteExperience}>
              <Text style={styles.txt}>Hapus pengalaman kerja</Text>
            </Button>
            </View>
          ) : (
            <Text></Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailExperience;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  icons: {
    width: "100%",
    alignItems: "center",
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
    marginBottom: 20,
    textTransform: "capitalize"
  },
  appType: {
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
    marginBottom: 10,
    textAlign: "center",
    marginBottom: 40,
    textTransform: "uppercase"
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
    width: "48%"
  },
  txt: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: '#ffffff',
  },
  titleUp: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
    marginBottom: 5,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"    
  },
  btn2: {
    height: 50,
    backgroundColor: 'red',
    borderRadius: 4,
    marginTop: 30,
    width: "50%"
  }
});
