import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button, Input, Item, Label, Textarea} from 'native-base';
import IconFeather from 'react-native-vector-icons/Feather';
import {Formik} from 'formik';
import * as yup from 'yup';

const formSchema = yup.object({
  companyName: yup.string(),
  field: yup.string(),
  city: yup.string(),
  description: yup.string(),
  email: yup.string().email('must be a valid your@mail.com'),
  instagram: yup.string(),
  phone: yup.string().min(10, 'must be valid number'),
  linkedin: yup.string(),
});

export default function EditProfileCompany() {
  return (
    <ScrollView>
      <View style={styles.parent}>
        <Formik
          initialValues={{
            companyName: '',
            field: '',
            city: '',
            description: '',
            email: '',
            instagram: '',
            phone: '',
            linkedin: '',
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
            <>
              <View style={styles.wrapperScroll}>
                <View style={styles.profileWrapper}>
                  <View style={styles.avaWrapper}>
                    <Image
                      style={styles.avatar}
                      source={require('../../assets/images/avatar.jpg')}
                    />
                    <TouchableOpacity style={styles.rowDirection}>
                      <IconFeather
                        name="edit-2"
                        size={20}
                        color="#9EA0A5"
                        style={styles.iconPencil}
                      />
                      <Text style={styles.greyText}>Edit</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.textCompany}>PT Martabat Jaya Abadi</Text>
                  <Text style={styles.textPosition}>Finansial</Text>
                  <View style={styles.cityWrapper}>
                    <IconFeather
                      name="map-pin"
                      size={20}
                      color="#9EA0A5"
                      style={styles.iconMap}
                    />
                    <Text style={styles.textCity}>Purwokerto, Jawa Tengah</Text>
                  </View>
                </View>

                <View style={styles.formWrapper}>
                  <Text style={styles.title}>Data diri</Text>
                  <View style={styles.hr} />
                  <View style={styles.wrapperField}>
                    <Label style={styles.label}>Nama perusahaan</Label>
                    <Item regular style={styles.itemInput}>
                      <Input
                        placeholder="Masukan bidang perusahaan, ex: Financial"
                        placeholderTextColor="#858D96"
                        onChangeText={handleChange('companyName')}
                        onBlur={handleBlur('companyName')}
                        value={values.companyName}
                        style={styles.input}
                      />
                    </Item>
                    <Text style={styles.txtError}>
                      {touched.companyName && errors.companyName}
                    </Text>

                    <Label style={styles.label}>Bidang</Label>
                    <Item regular style={styles.itemInput}>
                      <Input
                        placeholder="Masukan job desc"
                        placeholderTextColor="#858D96"
                        onChangeText={handleChange('field')}
                        onBlur={handleBlur('field')}
                        value={values.field}
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
                      {/* <Input
                    placeholder="Tuliskan deskripsi singkat"
                    placeholderTextColor="#858D96"
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                    style={styles.input}
                  /> */}
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
                        placeholder="Masukan job desc"
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

              <Button block style={styles.buttonSave} onPress={handleSubmit}>
                <Text style={styles.textSave}>Simpan</Text>
              </Button>
              <Button block bordered transparent style={styles.buttonCancel}>
                <Text style={styles.textCancel}>Batal</Text>
              </Button>
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
    color: '#9EA0A5',
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
    color: '#9EA0A5',
  },
  txtError: {
    fontSize: 11,
    fontFamily: 'OpenSans-Regular',
    color: 'red',
    marginBottom: 15,
  },
});
