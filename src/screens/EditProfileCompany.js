import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {Button, Input, Item, Label, Textarea} from 'native-base';
import IconFeather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import companyAction from '../redux/actions/company';
import ImagePicker from 'react-native-image-picker';

import {API_URL} from '@env';

const formSchema = yup.object({
  name: yup.string(),
  jobDesk: yup.string(),
  city: yup.string(),
  description: yup.string(),
  email: yup.string().email('must be a valid your@mail.com'),
  instagram: yup.string(),
  phone: yup.string().min(10, 'must be valid number'),
  linkedin: yup.string(),
});

const options = {
  title: 'Select Avatar',
  takePhotoButtonTitle: 'Take from camera',
  chooseFromLibraryButtonTitle: 'choose photo from libary',
};

export default function EditProfileCompany({navigation}) {
  const [modalError] = React.useState(false);
  const dispatch = useDispatch();
  const {Company: user, companyAvatar} = useSelector(
    (state) => state.user.userInfo,
  );
  const token = useSelector((state) => state.auth.token);
  const company = useSelector((state) => state.company);

  const getData = async () => {
    await dispatch(companyAction.getProfileCompany(token));
  };

  const editProfile = async (values) => {
    const {value} = await dispatch(companyAction.updateProfile(token, values));
    if (value.data.success) {
      getData();
      navigation.navigate('ProfileCompany');
    }
  };

  const chooseImage = () => {
    ImagePicker.showImagePicker(options, async (response) => {
      if (response.didCancel) {
        ToastAndroid.show('No image choseen', ToastAndroid.LONG);
      } else if (response.error) {
        ToastAndroid.show('Please try again later', ToastAndroid.LONG);
      } else {
        const form = new FormData();

        form.append('picture', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });

        const {value} = await dispatch(companyAction.updateAva(token, form));
        if (value.data.success) {
          getData();
        }
      }
    });
  };

  return (
    <ScrollView>
      <View style={styles.parent}>
        {company.isLoading ? (
          <Modal transparent visible>
            <View style={styles.modalView}>
              <View style={styles.alertBox}>
                <ActivityIndicator size="large" color="#5E50A1" />
                <Text style={styles.textAlert}>{company.alertMsg}</Text>
              </View>
            </View>
          </Modal>
        ) : company.isError ? (
          <Modal transparent visible={modalError}>
            <View style={styles.modalView}>
              <View style={styles.alertBox}>
                <IconFeather name="alert-circle" size={50} color="red" />
                <Text style={styles.textAlert}>{company.alertMsg}</Text>
              </View>
            </View>
          </Modal>
        ) : null}

        <Formik
          initialValues={{
            name: user.name,
            jobDesk: user.jobDesk,
            city: user.city,
            description: user.description,
            email: user.email,
            instagram: user.instagram,
            phone: user.phone,
            linkedin: user.linkedin,
          }}
          validationSchema={formSchema}
          onSubmit={(values) => editProfile(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.wrapperScroll}>
                <View style={styles.profileWrapper}>
                  <View style={styles.avaWrapper}>
                    <Image
                      style={styles.avatar}
                      source={
                        companyAvatar
                          ? {uri: API_URL.concat(companyAvatar.avatar)}
                          : require('../../assets/images/default-avatar1.png')
                      }
                    />
                    <TouchableOpacity
                      onPress={() => chooseImage()}
                      style={styles.rowDirection}>
                      <View>
                        <Icon name="pencil" size={20} color="#9EA0A5" />
                      </View>
                      <Text style={styles.greyText}>Edit</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.textCompany}>{user.name}</Text>
                  {user.jobDesk && (
                    <Text style={styles.textPosition}>{user.jobDesk}</Text>
                  )}
                  {user.city && (
                    <View style={styles.cityWrapper}>
                      <IconFeather
                        name="map-pin"
                        size={20}
                        color="#9EA0A5"
                        style={styles.iconMap}
                      />
                      <Text style={styles.textCity}>{user.city}</Text>
                    </View>
                  )}
                </View>

                <Button block style={styles.buttonSave} onPress={handleSubmit}>
                  <Text style={styles.textSave}>Simpan</Text>
                </Button>
                <Button
                  block
                  bordered
                  transparent
                  style={styles.buttonCancel}
                  onPress={() => navigation.goBack()}>
                  <Text style={styles.textCancel}>Batal</Text>
                </Button>

                <View style={styles.formWrapper}>
                  <Text style={styles.title}>Data diri</Text>
                  <View style={styles.hr} />
                  <View style={styles.wrapperField}>
                    <Label style={styles.label}>Nama perusahaan</Label>
                    <Item regular style={styles.itemInput}>
                      <Input
                        placeholder="Masukan bidang perusahaan"
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

                    <Label style={styles.label}>Bidang</Label>
                    <Item regular style={styles.itemInput}>
                      <Input
                        placeholder="Masukan bidang, ex: Financial"
                        placeholderTextColor="#858D96"
                        onChangeText={handleChange('jobDesk')}
                        onBlur={handleBlur('jobDesk')}
                        value={values.jobDesk}
                        style={styles.input}
                      />
                    </Item>
                    <Text style={styles.txtError}>
                      {touched.field && errors.field}
                    </Text>

                    <Label style={styles.label}>Kota</Label>
                    <Item regular style={styles.itemInput}>
                      <Input
                        placeholder="Masukan kota"
                        placeholderTextColor="#858D96"
                        onChangeText={handleChange('city')}
                        onBlur={handleBlur('city')}
                        value={values.city}
                        style={styles.input}
                      />
                    </Item>
                    <Text style={styles.txtError}>
                      {touched.city && errors.city}
                    </Text>

                    <Label style={styles.label}>Deskripsi singkat</Label>
                    <Item regular style={styles.itemAreaInput}>
                      <Textarea
                        rowSpan={5}
                        placeholder="Tuliskan deskripsi singkat"
                        placeholderTextColor="#858D96"
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.description}
                        style={styles.areaInput}
                      />
                    </Item>
                    <Text style={styles.txtError}>
                      {touched.description && errors.description}
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

                    <Label style={styles.label}>Instagram</Label>
                    <Item regular style={styles.itemInput}>
                      <Input
                        placeholder="Masukan instagram"
                        placeholderTextColor="#858D96"
                        onChangeText={handleChange('instagram')}
                        onBlur={handleBlur('instagram')}
                        value={values.instagram}
                        style={styles.input}
                      />
                    </Item>
                    <Text style={styles.txtError}>
                      {touched.instagram && errors.instagram}
                    </Text>

                    <Label style={styles.label}>Nomor telepon</Label>
                    <Item regular style={styles.itemInput}>
                      <Input
                        placeholder="Masukan nomor telepon"
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

                    <Label style={styles.label}>LinkedIn</Label>
                    <Item regular style={styles.itemInput}>
                      <Input
                        placeholder="Masukan LinkedIn"
                        placeholderTextColor="#858D96"
                        onChangeText={handleChange('linkedin')}
                        onBlur={handleBlur('linkedin')}
                        value={values.linkedin}
                        style={styles.input}
                      />
                    </Item>
                    <Text style={styles.txtError}>
                      {touched.linkedin && errors.linkedin}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    // paddingTop: '20%',
    // marginTop: '20%',
    paddingBottom: '3%',
    paddingHorizontal: '5%',
  },
  profileWrapper: {
    backgroundColor: '#FFFFFF',
    // height: 393,
    width: '100%',
    paddingTop: '20%',
    paddingHorizontal: '5%',
    borderRadius: 4,
  },
  wrapperScroll: {
    paddingTop: 20,
  },
  avaWrapper: {
    width: '100%',
    // height: 200,
    borderRadius: 50,
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  rowDirection: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
  },
  iconPencil: {
    marginRight: 3,
  },
  greyText: {
    color: 'grey',
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
  },
  textCompany: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
  },
  textPosition: {
    fontSize: 13,
    color: '#1F2A36',
    marginVertical: 5,
    fontFamily: 'OpenSans-Regular',
  },
  cityWrapper: {
    marginTop: 5,
    marginBottom: 30,
    flexDirection: 'row',
  },
  textCity: {
    fontSize: 13,
    color: '#9EA0A5',
    fontFamily: 'OpenSans-Regular',
  },
  iconMap: {
    marginRight: 15,
  },
  buttonSave: {
    backgroundColor: '#5E50A1',
    borderRadius: 4,
    marginVertical: 15,
  },
  buttonCancel: {
    borderRadius: 4,
  },
  textSave: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: 'white',
  },
  textCancel: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#5E50A1',
  },
  formWrapper: {
    backgroundColor: 'white',
    width: '100%',
    // height: 500,
    marginVertical: 15,
    borderRadius: 4,
    paddingVertical: '5%',
  },
  wrapperField: {
    paddingHorizontal: '5%',
  },
  title: {
    color: '#1F2A36',
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    marginBottom: 20,
    paddingHorizontal: '5%',
  },
  hr: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E2E5ED',
    marginBottom: 20,
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
    padding: 7,
    marginBottom: 2,
  },
  input: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    // color: '#9EA0A5',
  },
  itemAreaInput: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderColor: '#E2E5ED',
    // padding: 7,
    marginBottom: 2,
  },
  areaInput: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    // color: '#9EA0A5',
  },
  txtError: {
    fontSize: 11,
    fontFamily: 'OpenSans-Regular',
    color: 'red',
    marginBottom: 15,
  },
});
