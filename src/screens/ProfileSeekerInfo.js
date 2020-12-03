import {Button} from 'native-base';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import authAction from '../redux/actions/auth';
import jwtDecode from 'jwt-decode';

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
  const [buttonPortofolio, setButtonPortofolio] = useState(true);
  const [buttonExperience, setButtonExperience] = useState(false);
  const user = useSelector((state) => state.user.userInfo);
  const token = useSelector((state) => state.auth.token);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const role = jwtDecode(token).roleId;

  const onChangeToPortofolio = () => {
    setButtonPortofolio(true);
    setButtonExperience(false);
  };
  const onChangeToExperience = () => {
    setButtonExperience(true);
    setButtonPortofolio(false);
  };

  const isLogin = 'company';

  const logout = () => {
    dispatch(authAction.logout());
  };

  return (
    <ScrollView>
      {console.log(user)}
      <View style={styles.parent}>
        <View style={styles.profileInfo}>
          <Image style={styles.imgProfile} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.title}>{user.jobTitle}</Text>
          <View style={styles.wrapperLocation}>
            <Ionicons
              name="location-outline"
              size={20}
              color="#9EA0A5"
              style={styles.iconLocation}
            />
            <Text style={styles.txtLocation}>{user.workplace}</Text>
          </View>
          <Text style={styles.subtitle}>Talent</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </Text>
          {role === 1 && (
            <Button
              full
              style={styles.btnHire}
              onPress={() => navigation.navigate('EditProfileSeeker')}>
              <Text style={styles.txtHire}>Edit Profile</Text>
            </Button>
          )}
          {role === 2 && (
            <Button full style={styles.btnHire}>
              <Text s tyle={styles.txtHire}>
                Hire
              </Text>
            </Button>
          )}
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
        <Button block style={styles.buttonSave} onPress={logout}>
          <Text style={styles.textSave}>Logout</Text>
        </Button>
        <View style={styles.bottomComponent}>
          <View style={styles.wrapperBtnBottom}>
            <Button
              transparent
              active={buttonPortofolio}
              onPress={onChangeToPortofolio}
              style={
                buttonPortofolio ? styles.activeBtnStyles : styles.btnStyles
              }>
              <Text
                style={
                  buttonPortofolio ? styles.activeTextStyles : styles.textStyles
                }>
                Portofolio
              </Text>
            </Button>
            <Button
              transparent
              active={buttonExperience}
              onPress={onChangeToExperience}
              style={
                buttonExperience ? styles.activeBtnStyles : styles.btnStyles
              }>
              <Text
                style={
                  buttonExperience ? styles.activeTextStyles : styles.textStyles
                }>
                Pengalaman kerja
              </Text>
            </Button>
          </View>
          {buttonPortofolio && !buttonExperience && (
            <View style={styles.wrapperImgPortofolio}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailPortofolio')}>
                <Image style={styles.imgPortofolio} />
              </TouchableOpacity>
            </View>
          )}
          {buttonExperience && !buttonPortofolio && (
            <View>
              <View style={styles.wrapperExperience}>
                <Image style={styles.imgIconPT} />
                <View style={styles.detailExperience}>
                  <Text style={styles.workAs}>Engineer</Text>
                  <Text style={styles.company}>Tokopedia</Text>
                  <Text style={styles.dateFromTo}>
                    July 2019 - Januari 2020
                  </Text>
                  <Text style={styles.howLong}>6 months</Text>
                  <Text style={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </Text>
                </View>
              </View>
              <View style={styles.hr} />
              <View style={styles.wrapperExperience}>
                <Image style={styles.imgIconPT} />
                <View style={styles.detailExperience}>
                  <Text style={styles.workAs}>Engineer</Text>
                  <Text style={styles.company}>Tokopedia</Text>
                  <Text style={styles.dateFromTo}>
                    July 2019 - Januari 2020
                  </Text>
                  <Text style={styles.howLong}>6 months</Text>
                  <Text style={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileSeekerInfo;

const styles = StyleSheet.create({
  buttonSave: {
    backgroundColor: '#5E50A1',
    borderRadius: 4,
    marginVertical: 15,
  },
  textSave: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: 'white',
  },
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    paddingHorizontal: 15,
    paddingVertical: 20,
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
  bottomComponent: {
    backgroundColor: '#ffffff',
    paddingTop: 10,
    borderRadius: 10,
  },
  wrapperBtnBottom: {
    flexDirection: 'row',
  },
  activeBtnStyles: {
    borderBottomColor: '#5E50A1',
    borderBottomWidth: 4,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyles: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTextStyles: {
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
  },
  textStyles: {
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    color: '#9EA0A5',
  },
  wrapperImgPortofolio: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  imgPortofolio: {
    height: 204,
    width: '100%',
    backgroundColor: 'powderblue',
    borderRadius: 4,
    marginBottom: 20,
  },
  wrapperExperience: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  imgIconPT: {
    height: 38,
    width: 38,
    borderRadius: 8,
    backgroundColor: 'powderblue',
    marginRight: 20,
  },
  detailExperience: {
    flexGrow: 1,
    width: '80%',
  },
  workAs: {
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
  },
  company: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    color: '#46505C',
  },
  dateFromTo: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
    marginBottom: 5,
  },
  howLong: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
    marginBottom: 15,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#1F2A36',
    lineHeight: 24,
  },
  hr: {
    borderWidth: 1,
    borderColor: '#E2E5ED',
  },
});
