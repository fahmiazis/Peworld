import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {View, StyleSheet, Image} from 'react-native';
import {Container, Input, Item, Label, Button, Text} from 'native-base';

import Logo from '../assets/images/logo.png';

const schemaValidation = yup.object({
  NewPassword: yup.string().trim().min(8).required(),

  ConfirmPassword: yup.string().trim().min(8).required(),
});

export default function ConfirmReset() {
  return (
    <Container style={styles.container}>
      <Image style={styles.image} source={Logo} />
      <View style={styles.header}>
        <View style={styles.textHeader}>
          <Text style={styles.title}>Reset password</Text>
        </View>
        <View>
          <Text style={styles.textSub}>
            You need to change your password to activate your account.
          </Text>
        </View>
      </View>
      <View>
        <Formik
          initialValues={{NewPassword: '', ConfirmPassword: ''}}
          onSubmit={(values) => console.log(values)}
          validationSchema={schemaValidation}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.form}>
                <Label style={styles.label}>Kata sandi baru</Label>
                <Item style={styles.input} regular>
                  <Input
                    style={styles.textInput}
                    placeholder="Masukan kata sandi baru"
                    secureTextEntry
                    onChangeText={handleChange('NewPassword')}
                    onBlur={handleBlur('NewPassword')}
                    value={values.NewPassword}
                  />
                </Item>
                <View style={styles.body}>
                  {errors.NewPassword && touched.NewPassword && (
                    <>
                      <Text style={styles.textError}>{errors.NewPassword}</Text>
                    </>
                  )}
                </View>
              </View>
              <View>
                <Label style={styles.label}>Konfirmasi kata sandi baru</Label>
                <Item style={styles.input} regular>
                  <Input
                    style={styles.textInput}
                    placeholder="Masukan konfirmasi kata sandi baru"
                    secureTextEntry
                    onChangeText={handleChange('ConfirmPassword')}
                    onBlur={handleBlur('ConfirmPassword')}
                    value={values.ConfirmPassword}
                  />
                </Item>
                <View style={styles.textErrorWrapper}>
                  {errors.ConfirmPassword && touched.ConfirmPassword && (
                    <>
                      <Text style={styles.textError}>
                        {errors.ConfirmPassword}
                      </Text>
                    </>
                  )}
                </View>
              </View>
              <View style={styles.button}>
                <Button onPress={handleSubmit} style={styles.btn} block>
                  <Text style={styles.btnText}>Reset password</Text>
                </Button>
              </View>
            </>
          )}
        </Formik>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#E5E5E5',
  },
  image: {
    marginTop: 30,
  },
  header: {
    marginBottom: 50,
  },
  textHeader: {
    marginTop: 35,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 44,
    color: '#46505C',
    fontFamily: 'Open Sans',
  },
  textSub: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    color: '#858D96',
    fontFamily: 'Open Sans',
  },
  textErrorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  form: {
    marginBottom: 32,
  },
  label: {
    color: '#9EA0A5',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 4,
    marginLeft: 10,
    fontFamily: 'Open Sans',
  },
  input: {
    borderColor: '#E2E5ED',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingLeft: 10,
  },
  textInput: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 19,
    fontFamily: 'Open Sans',
  },
  button: {
    marginTop: 70,
  },
  btn: {
    backgroundColor: '#FBB017',
    borderRadius: 4,
  },
  btnText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
    fontFamily: 'Open Sans',
  },
  textError: {
    color: 'red',
    fontSize: 12,
    marginLeft: 5,
  },
});
