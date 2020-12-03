import {Button, Input, Item, Label} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Modal,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import authAction from '../redux/actions/auth';
import companyAction from '../redux/actions/company';
import jobSeekerAction from '../redux/actions/jobseeker';

const formSchema = yup.object({
  email: yup
    .string()
    .email('must be a valid your@mail.com')
    .required('email required'),
  password: yup.string().min(3).required('password required'),
});

export default function Login({route}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const auth = useSelector((state) => state.auth);
  const [modal, setModal] = React.useState(true);
  const [submit, setSubmit] = React.useState(false);

  const {role} = route.params;

  const goToSignup = () => {
    if (role === 'job-seeker') {
      navigation.navigate('SignupPekerja');
    } else if (role === 'company') {
      navigation.navigate('SignupPerekrut');
    }
  };

  React.useEffect(() => {
    if (auth.token.length) {
      if (role === 'company') {
        dispatch(companyAction.getProfileCompany(auth.token));
      } else if (role === 'job-seeker') {
        dispatch(jobSeekerAction.getProfileJobSeeker(auth.token));
      }
    }
  }, [submit]);

  const login = async (values) => {
    await dispatch(authAction.doLogin(values, role));
    setSubmit(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.parent}>
        {auth.isLoading ? (
          <Modal
            transparent
            visible={modal}
            onRequestClose={() => setModal(false)}>
            <View style={styles.modalView}>
              <View style={styles.alertBox}>
                <ActivityIndicator size="large" color="#5E50A1" />
                <Text style={styles.textAlert}>{auth.alertMsg}</Text>
              </View>
            </View>
          </Modal>
        ) : auth.isError ? (
          <Modal
            transparent
            visible={modal}
            onRequestClose={() => setModal(false)}>
            <View style={styles.modalView}>
              <View style={styles.alertBox}>
                <IconFeather name="alert-circle" size={50} color="red" />
                <Text style={styles.textAlert}>{auth.alertMsg}</Text>
              </View>
            </View>
          </Modal>
        ) : null}
        <Image
          source={require('../../assets/images/logo-sm.png')}
          style={styles.img}
        />
        <Text style={styles.titleLogin}>Login</Text>
        <Text style={styles.subTitle}>
          Lorom ipsum dolor si amet uegas anet.
        </Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={formSchema}
          onSubmit={(values) => login(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <Label style={styles.label}>Email</Label>
              <Item regular style={styles.itemInput}>
                <Input
                  placeholder="Masukan alamat email"
                  placeholderTextColor="#858D96"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={styles.input}
                />
              </Item>
              <Text style={styles.txtError}>
                {touched.email && errors.email}
              </Text>
              <Label style={styles.label}>Kata Sandi</Label>
              <Item regular style={styles.itemInput}>
                <Input
                  placeholder="Masukan kata sandi"
                  placeholderTextColor="#858D96"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={styles.input}
                />
              </Item>
              <Text style={styles.txtError}>
                {touched.password && errors.password}
              </Text>
              <TouchableOpacity
                style={styles.wrapperForgot}
                onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.txtForgot}>Lupa kata sandi?</Text>
              </TouchableOpacity>
              <Button full style={styles.btnSubmit} onPress={handleSubmit}>
                <Text style={styles.txtBtnSubmit}>Masuk</Text>
              </Button>
            </View>
          )}
        </Formik>
        <View style={styles.wrapperTxtBottom}>
          <Text style={styles.txtBottom}>Anda belum punya akun?</Text>
          <TouchableOpacity onPress={goToSignup}>
            <Text style={styles.txtSignup}> Daftar disini</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  img: {
    marginBottom: 35,
  },
  titleLogin: {
    fontSize: 32,
    fontFamily: 'OpenSans-Bold',
    color: '#46505C',
    marginBottom: 7,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#858D96',
    marginBottom: 50,
  },
  label: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#9EA0A5',
    marginBottom: 5,
  },
  itemInput: {
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderColor: '#E2E5ED',
    padding: 15,
    marginBottom: 2,
  },
  input: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  txtError: {
    fontSize: 11,
    fontFamily: 'OpenSans-Regular',
    color: 'red',
    marginBottom: 15,
  },
  wrapperForgot: {
    alignSelf: 'flex-end',
  },
  txtForgot: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#1F2A36',
    marginBottom: 25,
  },
  btnSubmit: {
    backgroundColor: '#FBB017',
    borderRadius: 4,
    marginBottom: 28,
  },
  txtBtnSubmit: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  wrapperTxtBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtBottom: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#1F2A36',
  },
  txtSignup: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#FBB017',
  },
  modalView: {
    backgroundColor: 'grey',
    opacity: 0.8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAlert: {
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
});
