import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import {Button} from 'native-base';
import SplashScreen from 'react-native-splash-screen';

export default function Landing({navigation}) {
  const login = (role) => {
    navigation.navigate('Login', {role});
  }
  React.useEffect(() => {
    SplashScreen.hide()
  }, []);
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/images/background.jpg')}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.parent}>
        <View>
          <Image source={require('../../assets/images/Logo.png')} />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionText}>
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </Text>
        </View>
        <View>
          <View>
            <Button
              style={styles.btnPrakerja}
              block
              onPress={() => login('job-seeker')}>
              <Text style={styles.pekerjaText}>Masuk sebagai pekerja</Text>
            </Button>
          </View>
          <View style={styles.atauWrapper}>
            <View style={styles.line} />
            <Text style={styles.atauText}>atau</Text>
            <View style={styles.line} />
          </View>
          <View>
            <Button
              bordered
              style={styles.btnPerekrut}
              block
              onPress={() => login('company')}>
              <Text style={styles.perekrutText}>Masuk sebagai perekrut</Text>
            </Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'rgba(94, 80, 161,0.8)',
    paddingTop: 50,
    paddingBottom: 50,
    // justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 34,
    lineHeight: 54,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  descriptionWrapper: {
    paddingHorizontal: 5,
    marginTop: '15%',
    flex: 1,
  },
  atauWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 19,
  },
  line: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: 2,
  },
  atauText: {
    marginLeft: 5,
    marginRight: 5,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  pekerjaText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#5E50A1',
  },
  btnPrakerja: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  btnPerekrut: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  perekrutText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  background: {
    flex: 1,
  },
});
