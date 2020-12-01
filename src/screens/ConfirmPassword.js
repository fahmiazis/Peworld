import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Form, Input, Item, Label, Button} from 'native-base';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const resetValidation = yup.object().shape({
  newPassword: yup
    .string()
    .trim()
    .min(8, ({min}) => `New password must be at least ${min} characters`)
    .required(),

  confirmPassword: yup
    .string()
    .trim()
    .min(8, ({min}) => `New password must be at least ${min} characters`)
    .required(),
});

export default function ConfirmPassword() {
  return (
    <View style={styles.parent}>
      <View>
        <Image source={require('../assets/img/Logo2.png')} />
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
          initialValues={{newPassword: '', confirmPassword: ''}}
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
                <Label style={styles.labelInput}>Kata sandi baru</Label>
                <Item style={styles.itemInput} regular>
                  <Input
                    placeholder="Masukan kata sandi baru"
                    placeholderTextColor="#858D96"
                    style={styles.input}
                    secureTextEntry
                    onChangeText={handleChange('newPassword')}
                    onBlur={handleBlur('newPassword')}
                    value={values.newPassword}
                  />
                </Item>
                <View style={styles.textErrorWrapper}>
                  {errors.newPassword && touched.newPassword && (
                    <>
                      <Icon name="alert" color="red" />
                      <Text style={styles.textError}>{errors.newPassword}</Text>
                    </>
                  )}
                </View>
              </View>
              <View>
                <Label style={styles.labelInput}>
                  Konfirmasi kata sandi baru
                </Label>
                <Item style={styles.itemInput} regular>
                  <Input
                    placeholder="Masukan kata sandi baru"
                    placeholderTextColor="#858D96"
                    style={styles.input}
                    secureTextEntry
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                </Item>
                <View style={styles.textErrorWrapper}>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <>
                      <Icon name="alert" color="red" />
                      <Text style={styles.textError}>
                        {errors.confirmPassword}
                      </Text>
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
    backgroundColor: '#E5E5E5',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  resetPasswordText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 44,
    color: '#46505C',
  },
  resetTextView: {
    marginTop: 35,
  },
  resetDescription: {
    fontStyle: 'normal',
    fontWeight: 'normal',
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
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 4,
    marginLeft: 10,
  },
  input: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
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
    fontStyle: 'normal',
    fontWeight: 'bold',
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
