import {Button, Input, Item, Label} from 'native-base';
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
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const formSchema = yup.object({
  name: yup.string().required('type your complete name'),
  email: yup
    .string()
    .email('must be a valid your@mail.com')
    .required('email required'),
  phone: yup.string().min(10).required('input your phone number'),
  password: yup.string().min(3).required('password required'),
  passwordConfirm: yup
    .string()
    .min(3)
    .required('password confirmation required'),
});

export default function SignupPekerja({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.parent}>
        <Image
          source={require('../../assets/images/logo-sm.png')}
          style={styles.img}
          onPress={()=>navigation.navigate('Notification')}
        />
        <Text style={styles.titleLogin}>Signup</Text>
        <Text style={styles.subTitle}>
          Lorom ipsum dolor si amet uegas anet.
        </Text>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirm: '',
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            console.log(values);
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
              <Text style={styles.txtError}>{touched.name && errors.name}</Text>
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
                  onChangeText={handleChange('passwordConfirm')}
                  onBlur={handleBlur('passwordConfirm')}
                  value={values.passwordConfirm}
                  style={styles.input}
                />
              </Item>
              <Text style={styles.txtError}>
                {touched.passwordConfirm && errors.passwordConfirm}
              </Text>
              <Button full style={styles.btnSubmit} onPress={handleSubmit}>
                <Text style={styles.txtBtnSubmit}>Daftar</Text>
              </Button>
            </View>
          )}
        </Formik>
        <View style={styles.wrapperTxtBottom}>
          <Text style={styles.txtBottom}>Anda sudah punya akun?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignupPerekrut')}>
            <Text style={styles.txtSignup}> Masuk disini</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 60}}></View>
      </ScrollView>
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
    height: 30,
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
});
