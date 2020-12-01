import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Input, Item, Label, Button} from 'native-base';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const resetValidation = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email()
    .required(),

  password: yup
    .string()
    .trim()
    .min(8, ({min}) => `password must be at least ${min} characters`)
    .required(),
});

export default function ConfirmPassword() {
  return (
    <View style={styles.parent}>
      <View>
        <Image source={require('../../assets/images/Logo2.png')} />
      </View>
      <View style={styles.resetTextWrapper}>
        <View style={styles.resetTextView}>
          <Text style={styles.resetPasswordText}>Reset password</Text>
        </View>
        <View>
          <Text style={styles.resetDescription}>
            You need to change your password to activate your account.
          </Text>
        </View>
      </View>
      <View>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => console.log(values)}
          validationSchema={resetValidation}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <View style={styles.inputWrapper}>
                <Label style={styles.labelInput}>Email</Label>
                <Item style={styles.itemInput} regular>
                  <Input
                    placeholder="Masukan Email"
                    placeholderTextColor="#858D96"
                    style={styles.input}
                    textContentType="emailAddress"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </Item>
                <View style={styles.textErrorWrapper}>
                  {errors.email && touched.email && (
                    <>
                      <Icon name="alert" color="red" />
                      <Text style={styles.textError}>{errors.email}</Text>
                    </>
                  )}
                </View>
              </View>
              <View>
                <Label style={styles.labelInput}>Password</Label>
                <Item style={styles.itemInput} regular>
                  <Input
                    placeholder="Masukan Password"
                    placeholderTextColor="#858D96"
                    style={styles.input}
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </Item>
                <View style={styles.textErrorWrapper}>
                  {errors.password && touched.password && (
                    <>
                      <Icon name="alert" color="red" />
                      <Text style={styles.textError}>{errors.password}</Text>
                    </>
                  )}
                </View>
              </View>
              <View style={styles.btnWrapper}>
                <Button onPress={handleSubmit} style={styles.btnReset} block>
                  <Text style={styles.btnText}>Reset password</Text>
                </Button>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F6F7F8',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 40,
  },
  resetPasswordText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 32,
    lineHeight: 44,
    color: '#46505C',
  },
  resetTextView: {
    marginTop: 35,
  },
  resetDescription: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 19,
    color: '#858D96',
  },
  itemInput: {
    borderColor: '#E2E5ED',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingLeft: 10,
  },
  labelInput: {
    color: '#9EA0A5',
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 4,
    marginLeft: 10,
  },
  input: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    lineHeight: 19,
  },
  resetTextWrapper: {
    marginBottom: 50,
  },
  inputWrapper: {
    marginBottom: 32,
  },
  btnWrapper: {
    marginTop: 70,
  },
  btnReset: {
    backgroundColor: '#FBB017',
    borderRadius: 4,
  },
  btnText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  textError: {
    color: 'red',
    fontSize: 12,
    marginLeft: 5,
  },
  textErrorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});
