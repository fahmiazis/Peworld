import {Button, Input, Item, Label} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';

const formSchema = yup.object({
  email: yup
    .string()
    .email('must be a valid your@mail.com')
    .required('email required'),
});

export default function ResetPassword() {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.parent}>
        <Image
          source={require('../../assets/images/logo-sm.png')}
          style={styles.img}
        />
        <Text style={styles.titleLogin}>Reset password</Text>
        <Text style={styles.subTitle}>
          Enter your password user account’s verified email and we will send you
          a password reset link.
        </Text>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate('ConfirmPassword');
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
              <Button full style={styles.btnSubmit} onPress={handleSubmit}>
                <Text style={styles.txtBtnSubmit}>
                  Send password reset email
                </Text>
              </Button>
            </View>
          )}
        </Formik>
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
    color: '#858D96',
    fontFamily: 'OpenSans-Regular',
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
    marginBottom: 60,
  },
  btnSubmit: {
    backgroundColor: '#FBB017',
    borderRadius: 4,
    marginBottom: 28,
  },
  txtBtnSubmit: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: '#ffffff',
  },
});
