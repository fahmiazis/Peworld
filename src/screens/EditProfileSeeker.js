/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  Thumbnail,
  Button,
  Input,
  Label,
  Item,
  Textarea,
  Radio,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import {Formik} from 'formik';
import * as Yup from 'yup';

import userAction from '../redux/actions/user';
import experienceAction from '../redux/actions/experience';

const experienceSchema = Yup.object().shape({
  jobDesk: Yup.string().required('Harus diisi'),
  company: Yup.string().required('Harus diisi'),
  year: Yup.string().required('Harus diisi'),
  description: Yup.string().required('Harus diisi'),
});

export default function EditProfileSeeker() {
  const user = useSelector((state) => state.user.jobSeeker);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const getData = () => {
    dispatch(userAction.show(auth.token));
  };

  const addExperience = async (values) => {
    await dispatch(experienceAction.addExperience(auth.token, values));
  };

  const editProfile = async (values) => {
    const {value} = await dispatch(userAction.updateDetail(auth.token, values));
    value.data.success && getData();
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.parent}>
        <View style={styles.profileView}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarDisplay}>
              <Thumbnail
                style={styles.thubnail}
                source={require('../../assets/images/background.jpg')}
              />
            </View>
            <View style={styles.editAvatarView}>
              <View>
                <Icon name="pencil" size={20} color="#9B9B9B" />
              </View>
              <View>
                <Text style={styles.textEdit}>Edit</Text>
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.textUsername}>{user.name}</Text>
            </View>
            <View>
              <Text style={styles.skillText}>
                {user.jobTitle === null ? 'Update your profile' : user.jobTitle}
              </Text>
            </View>
            <View style={styles.locationWrapper}>
              <View>
                <IconFeather
                  name="map-pin"
                  size={20}
                  color="#9EA0A5"
                  style={styles.iconMap}
                />
              </View>
              <View>
                <Text style={styles.locationText}>
                  {user.domicile === null
                    ? 'Update your profile'
                    : user.domicile}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.jobStatus}>Freelancer</Text>
          </View>
        </View>
        <Formik
          initialValues={{
            name: user.name,
            jobTitle: user.jobTitle,
            domicile: user.domicile,
            workplace: user.workplace,
            description: user.description,
          }}
          enableReinitialize
          onSubmit={(values) => {
            editProfile(values);
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
              <View style={styles.btnSimpanWrapper}>
                <Button onPress={handleSubmit} style={styles.btnSimpan} block>
                  <Text style={styles.btnSimpanText}>Simpan</Text>
                </Button>
                <Button style={styles.btnBatal} block bordered>
                  <Text style={styles.textBatal}>Batal</Text>
                </Button>
              </View>

              <View style={styles.fromView}>
                <View style={styles.formLabel}>
                  <Text style={styles.dataDiriText}>Data diri</Text>
                </View>
                <View>
                  <View style={styles.formWrapper}>
                    <View style={styles.inputWrapper}>
                      <Label style={styles.labelInput}>Nama lengkap</Label>
                      <Item style={styles.item} regular>
                        <Input
                          placeholder={user.name}
                          placeholderTextColor="#858D96"
                          style={styles.input}
                          onChangeText={handleChange('name')}
                          onBlur={handleBlur('name')}
                          value={values.name}
                        />
                      </Item>
                    </View>
                    <View style={styles.inputWrapper}>
                      <Label style={styles.labelInput}>Job title</Label>
                      <Item style={styles.item} regular>
                        <Input
                          placeholder={
                            user.jobTitle === null ? 'Masukkan job title' : null
                          }
                          placeholderTextColor="#858D96"
                          style={styles.input}
                          onChangeText={handleChange('jobTitle')}
                          onBlur={handleBlur('jobTitle')}
                          value={values.jobTitle}
                        />
                      </Item>
                    </View>
                    <View style={styles.inputWrapper}>
                      <Label style={styles.labelInput}>Domisili</Label>
                      <Item style={styles.item} regular>
                        <Input
                          placeholder={
                            user.domicile === null ? 'Masukkan domisili' : null
                          }
                          placeholderTextColor="#858D96"
                          style={styles.input}
                          onChangeText={handleChange('domicile')}
                          onBlur={handleBlur('domisisli')}
                          value={values.domicile}
                        />
                      </Item>
                    </View>
                    <View style={styles.inputWrapper}>
                      <Label style={styles.labelInput}>Tempat kerja</Label>
                      <Item style={styles.item} regular>
                        <Input
                          placeholder={
                            user.jobTitle === null
                              ? 'Masukkan tempat kerja'
                              : null
                          }
                          placeholderTextColor="#858D96"
                          style={styles.input}
                          onChangeText={handleChange('workplace')}
                          onBlur={handleBlur('workplace')}
                          value={values.workplace}
                        />
                      </Item>
                    </View>
                    <View>
                      <Label style={styles.labelInput}>Deskripsi singkat</Label>
                      <Textarea
                        rowSpan={5}
                        placeholder={
                          user.description === null
                            ? 'Tuliskan deskripsi singkat'
                            : null
                        }
                        placeholderTextColor="#858D96"
                        bordered
                        style={styles.input}
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.description}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </>
          )}
        </Formik>
        <Formik
          initialValues={{
            skill: '',
          }}
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
              <View style={styles.fromView}>
                <View style={styles.formLabel}>
                  <Text style={styles.dataDiriText}>Skill</Text>
                </View>
                <View>
                  <View style={styles.formWrapper}>
                    <View style={styles.skillInput}>
                      <View style={styles.inputSkill}>
                        <Item style={styles.item} regular>
                          <Input
                            placeholder="Java"
                            placeholderTextColor="#858D96"
                            style={styles.input}
                            onChangeText={handleChange('skill')}
                            onBlur={handleBlur('skill')}
                            value={values.email}
                          />
                        </Item>
                      </View>
                      <View>
                        <Button onPress={handleSubmit} style={styles.btnSkill}>
                          <Text style={styles.btnTextSkill}>Simpan</Text>
                        </Button>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </>
          )}
        </Formik>
        <Formik
          initialValues={{
            jobDesk: '',
            company: '',
            year: '',
            description: '',
          }}
          validationSchema={experienceSchema}
          onSubmit={(values) => {
            addExperience(values);
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <View style={styles.fromView}>
                <View style={styles.formLabel}>
                  <Text style={styles.dataDiriText}>Pengalaman kerja</Text>
                </View>
                <View>
                  <View style={styles.formWrapper}>
                    <View style={styles.inputWrapper}>
                      <Label style={styles.labelInput}>Posisi</Label>
                      <Item style={styles.item} regular>
                        <Input
                          placeholder="web developer"
                          placeholderTextColor="#858D96"
                          style={styles.input}
                          onChangeText={handleChange('jobDesk')}
                          onBlur={handleBlur('jobDesk')}
                          value={values.jobDesk}
                        />
                      </Item>
                      {errors.jobDesk ? (
                        <Text style={styles.txtError}>{errors.jobDesk}</Text>
                      ) : null}
                    </View>
                    <View style={styles.inputWrapper}>
                      <Label style={styles.labelInput}>Nama perusahaan</Label>
                      <Item style={styles.item} regular>
                        <Input
                          placeholder="PT Harus bisa"
                          placeholderTextColor="#858D96"
                          style={styles.input}
                          onChangeText={handleChange('company')}
                          onBlur={handleBlur('company')}
                          value={values.company}
                        />
                      </Item>
                      {errors.company ? (
                        <Text style={styles.txtError}>{errors.company}</Text>
                      ) : null}
                    </View>
                    <View style={styles.inputWrapper}>
                      <Label style={styles.labelInput}>Bulan/tahun</Label>
                      <Item style={styles.item} regular>
                        <Input
                          placeholder="Januari 2018"
                          placeholderTextColor="#858D96"
                          style={styles.input}
                          onChangeText={handleChange('year')}
                          onBlur={handleBlur('year')}
                          value={values.year}
                        />
                      </Item>
                      {errors.year ? (
                        <Text style={styles.txtError}>{errors.year}</Text>
                      ) : null}
                    </View>
                    <View>
                      <Label style={styles.labelInput}>Deskripsi singkat</Label>
                      <Textarea
                        rowSpan={5}
                        placeholder="Deskripsikan pekerjaan anda"
                        placeholderTextColor="#858D96"
                        bordered
                        style={styles.input}
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.description}
                      />
                      {errors.description ? (
                        <Text style={styles.txtError}>
                          {errors.description}
                        </Text>
                      ) : null}
                    </View>
                    <View style={styles.hr} />
                    <View>
                      <Button
                        onPress={handleSubmit}
                        style={styles.btnPengalaman}
                        block
                        bordered>
                        <Text style={styles.tambahPengalaman}>
                          Tambah pengalaman kerja
                        </Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
            </>
          )}
        </Formik>
        <Formik
          initialValues={{
            name: '',
            description: '',
            link: '',
            github: '',
          }}
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
              <View style={styles.fromView}>
                <View style={styles.formLabel}>
                  <Text style={styles.dataDiriText}>Portofolio</Text>
                </View>
                <View>
                  <View style={styles.formWrapper}>
                    <View style={styles.inputWrapper}>
                      <Label style={styles.labelInput}>Nama aplikasi</Label>
                      <Item style={styles.item} regular>
                        <Input
                          placeholder="Nama aplikasi"
                          placeholderTextColor="#858D96"
                          style={styles.input}
                          onChangeText={handleChange('name')}
                          onBlur={handleBlur('name')}
                          value={values.name}
                        />
                      </Item>
                    </View>
                    <View style={styles.desWrapper}>
                      <Label style={styles.labelInput}>Deskripsi singkat</Label>
                      <Textarea
                        rowSpan={5}
                        placeholder="Deskripsikan aplikasi anda"
                        placeholderTextColor="#858D96"
                        bordered
                        style={styles.input}
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.description}
                      />
                    </View>
                    <View style={styles.inputWrapper}>
                      <Label style={styles.labelInput}>Link publikasi</Label>
                      <Item style={styles.item} regular>
                        <Input
                          placeholder="Masukan link publikasi"
                          placeholderTextColor="#858D96"
                          style={styles.input}
                          onChangeText={handleChange('link')}
                          onBlur={handleBlur('link')}
                          value={values.link}
                        />
                      </Item>
                    </View>
                    <View style={styles.inputWrapper}>
                      <Label style={styles.labelInput}>Link repository</Label>
                      <Item style={styles.item} regular>
                        <Input
                          placeholder="Masukan link repository"
                          placeholderTextColor="#858D96"
                          style={styles.input}
                          onChangeText={handleChange('github')}
                          onBlur={handleBlur('github')}
                          value={values.github}
                        />
                      </Item>
                    </View>
                    <View style={styles.inputWrapper}>
                      <Label style={styles.labelInput}>
                        Tempat kerja terkait
                      </Label>
                      <Item style={styles.item} regular>
                        <Input
                          placeholder="Masukan tempat kerja"
                          placeholderTextColor="#858D96"
                          style={styles.input}
                        />
                      </Item>
                    </View>
                    <View style={styles.radioWrapper}>
                      <View style={styles.radioView}>
                        <Radio
                          color={'#5E50A1'}
                          selectedColor={'#5E50A1'}
                          selected={true}
                        />
                        <Label style={styles.labelRadio}>Aplikasi mobile</Label>
                      </View>
                      <View style={styles.radioView2}>
                        <Radio
                          color={'#5E50A1'}
                          selectedColor={'#5E50A1'}
                          selected={false}
                        />
                        <Label style={styles.labelRadio2}>Aplikasi web</Label>
                      </View>
                    </View>
                    <View style={styles.uploadWrapper}>
                      <Label style={styles.labelInput}>Upload gambar</Label>
                      <View style={styles.imageView}>
                        <View style={styles.cloud}>
                          <View>
                            <Icon
                              name="cloud-upload"
                              size={60}
                              color="#9b9b9b"
                            />
                          </View>
                          <View>
                            <Text style={styles.uploadText}>
                              Upload file dari penyimpanan
                            </Text>
                          </View>
                        </View>
                        <View style={styles.imageFormat}>
                          <View style={styles.textss}>
                            <Icon
                              name="image-outline"
                              color="#9b9b9b"
                              size={40}
                            />
                            <View>
                              <Text style={styles.textRes}>High-Res Image</Text>
                              <Text style={styles.textRes}>
                                PNG, JPG or GIF
                              </Text>
                            </View>
                          </View>
                          <View style={styles.textss2}>
                            <Icon2
                              name="size-fullscreen"
                              color="#9b9b9b"
                              size={30}
                            />
                            <View style={styles.textd}>
                              <Text style={styles.textRes}>Size</Text>
                              <View>
                                <Text style={styles.textRes}>
                                  1080x1920 or 600x800
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.hr} />
                    <View>
                      <Button
                        onPress={handleSubmit}
                        style={styles.btnPengalaman}
                        block
                        bordered>
                        <Text style={styles.tambahPengalaman}>
                          Tambah pengalaman kerja
                        </Text>
                      </Button>
                    </View>
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
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  profileView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  thubnail: {
    height: 150,
    width: 150,
    borderRadius: 80,
  },
  avatarDisplay: {},
  editAvatarView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textEdit: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22,
    lineHeight: 56,
    color: '#9EA0A5',
  },
  avatarWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
  },
  textUsername: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22,
    lineHeight: 56,
    color: '#1F2A36',
  },
  skillText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#1F2A36',
  },
  locationText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#9EA0A5',
    marginLeft: 11,
  },
  jobStatus: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#9EA0A5',
    marginTop: 13,
  },
  btnSimpan: {
    backgroundColor: '#5E50A1',
    borderRadius: 4,
    marginBottom: 15,
  },
  btnSimpanText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  btnSimpanWrapper: {
    marginTop: 20,
    marginBottom: 20,
  },
  btnBatal: {
    borderColor: '#5E50A1',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 4,
  },
  dataDiri: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  formLabel: {
    padding: 20,
    borderBottomColor: '#E2E5ED',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  dataDiriText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    lineHeight: 20,
    color: '#1F2A36',
  },
  formWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 30,
  },
  labelInput: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: '#9EA0A5',
    marginLeft: 4,
    marginBottom: 4,
  },
  item: {
    borderRadius: 4,
    borderColor: '#E2E5ED',
    borderWidth: 1,
    paddingLeft: 8,
  },
  input: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 19,
  },
  inputWrapper: {
    marginBottom: 32,
  },
  fromView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 41,
  },
  skillInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnSkill: {
    borderRadius: 4,
    backgroundColor: '#FBB017',
    padding: 16,
    marginLeft: 10,
  },
  btnTextSkill: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  inputSkill: {
    flex: 1,
  },
  hr: {
    flex: 1,
    backgroundColor: '#E2E5ED',
    height: 1,
    marginTop: 40,
    marginBottom: 40,
  },
  textBatal: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#5E50A1',
  },
  btnPengalaman: {
    borderColor: '#FBB017',
    borderRadius: 4,
  },
  tambahPengalaman: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#FBB017',
  },
  radioView: {
    flexDirection: 'row',
    borderColor: '#E2E5ED',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 12,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelRadio: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    lineHeight: 19,
    color: '#46505C',
  },
  labelRadio2: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    lineHeight: 19,
    color: '#9EA0A5',
  },
  radioView2: {
    flexDirection: 'row',
    padding: 12,
  },
  cloud: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: '#1F2A36',
    marginTop: 24,
    marginBottom: 20,
  },
  imageView: {
    borderStyle: 'dashed',
    borderColor: '#9EA0A5',
    borderRadius: 8,
    borderWidth: 1,
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 15,
    paddingRight: 26,
  },
  uploadWrapper: {
    marginTop: 32,
  },
  imageFormat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRes: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 10,
    lineHeight: 14,
    color: '#1F2A36',
  },
  textss: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  textss2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textd: {
    marginLeft: 5,
  },
  desWrapper: {
    marginBottom: 32,
  },
  txtError: {
    fontSize: 11,
    fontFamily: 'OpenSans-Regular',
    color: 'red',
  },
});
