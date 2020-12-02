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
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import {Formik} from 'formik';
import * as yup from 'yup';
import authAction from '../redux/actions/auth';

const formSchema = yup.object({
  name: yup.string().required('input your complete name'),
  email: yup
    .string()
    .email('must be a valid your@mail.com')
    .required('email required'),
  company: yup.string().required('company name required'),
  jobDesk: yup.string().required('position required'),
  phone: yup.string().min(10).required('input your phone number'),
  password: yup.string().min(3).required('password required'),
  confirmPassword: yup
    .string()
    .min(3)
    .required('password confirmation required'),
});
export default function SignupPerekrut({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [modal, setModal] = React.useState(true);

  const login = () => {
    navigation.navigate('Login');
  };
  
  if (auth.alertMsg === 'Signup success') {
    login;
  }
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.parent}>
          {auth.isLoading ? (
            <Modal transparent visible>
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
          ) : auth.alertMsg === 'Signup success' ? (
            () => navigation.navigate('Login')
          ) : null}
          <Image
            source={require('../../assets/images/logo-sm.png')}
            style={styles.img}
          />
          <Text style={styles.titleLogin}>Signup</Text>
          <Text style={styles.subTitle}>
            Lorom ipsum dolor si amet uegas anet.
          </Text>
          <Formik
            initialValues={{
              name: '',
              email: '',
              company: '',
              jobDesk: '',
              phone: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={formSchema}
            onSubmit={(values) => {
              console.log(values);
              dispatch(authAction.signup(values, 'company'));
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <Label style={styles.label}>Nama</Label>
                <Item regular style={styles.itemInput}>
                  <Input
                    placeholder="Masukan nama panjang"
                    placeholderTextColor="#858D96"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={styles.input}
                  />
                </Item>
                <Text style={styles.txtError}>
                  {touched.name && errors.name}
                </Text>
                <Label style={styles.label}>Email</Label>
                <Item regular style={styles.itemInput}>
                  <Input
                    placeholder="Masukan email"
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
                <Label style={styles.label}>Perusahaan</Label>
                <Item regular style={styles.itemInput}>
                  <Input
                    placeholder="Masukan nama perusahaan"
                    placeholderTextColor="#858D96"
                    onChangeText={handleChange('company')}
                    onBlur={handleBlur('company')}
                    value={values.company}
                    style={styles.input}
                  />
                </Item>
                <Text style={styles.txtError}>
                  {touched.company && errors.company}
                </Text>
                <Label style={styles.label}>Jabatan</Label>
                <Item regular style={styles.itemInput}>
                  <Input
                    placeholder="Jabatan di perusahaan anda"
                    placeholderTextColor="#858D96"
                    onChangeText={handleChange('jobDesk')}
                    onBlur={handleBlur('jobDesk')}
                    value={values.jobDesk}
                    style={styles.input}
                  />
                </Item>
                <Text style={styles.txtError}>
                  {touched.jobDesk && errors.jobDesk}
                </Text>
                <Label style={styles.label}>No. handphone</Label>
                <Item regular style={styles.itemInput}>
                  <Input
                    placeholder="Masukan no handphone"
                    placeholderTextColor="#858D96"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    style={styles.input}
                  />
                </Item>
                <Text style={styles.txtError}>
                  {touched.phone && errors.phone}
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
                <Label style={styles.label}>Konfirmasi kata Sandi</Label>
                <Item regular style={styles.itemInput}>
                  <Input
                    placeholder="Masukan konfirmasi kata sandi"
                    placeholderTextColor="#858D96"
                    secureTextEntry
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    style={styles.input}
                  />
                </Item>
                <Text style={styles.txtError}>
                  {touched.confirmPassword && errors.confirmPassword}
                </Text>
                <Button full style={styles.btnSubmit} onPress={handleSubmit}>
                  <Text style={styles.txtBtnSubmit}>Daftar</Text>
                </Button>
              </View>
            )}
          </Formik>
          <View style={styles.wrapperTxtBottom}>
            <Text style={styles.txtBottom}>Anda sudah punya akun?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.txtSignup}> Masuk disini</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    paddingHorizontal: 15,
    paddingVertical: 40,
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
    height: 30,
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
