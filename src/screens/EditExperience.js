import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import {Formik} from 'formik';
import {Button, Input, Label, Item, Textarea, Radio} from 'native-base';
import * as Yup from 'yup';
import experienceAction from '../redux/actions/experience'
import userAction from '../redux/actions/user'
import seekerAction from '../redux/actions/jobseeker'
import {connect} from 'react-redux'

const experienceSchema = Yup.object().shape({
  jobDesk: Yup.string().required('Harus diisi'),
  company: Yup.string().required('Harus diisi'),
  year: Yup.string().required('Harus diisi'),
  description: Yup.string().required('Harus diisi'),
});

class EditExperience extends Component {

  saveExperience = async (values) => {
    const {id} = this.props.route.params
    await this.props.editExperience(this.props.auth.token, values, id)
    await this.props.getProfileSeeker(this.props.auth.token)
    const {successEdit} = this.props.jobseeker
    if (successEdit) {
      const {profileJobSeeker} = this.props.jobseeker
      this.props.saveUser(profileJobSeeker)
      this.props.clearMessage()
      this.props.navigation.navigate('BottomTabs')
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.parent}>
          <Formik
            initialValues={{
              jobDesk: '',
              company: '',
              year: '',
              description: '',
            }}
            validationSchema={experienceSchema}
            onSubmit={(values) => {
              this.saveExperience(values)
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
                    <Text style={styles.dataDiriText}>Edit Pengalaman Kerja</Text>
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
                            placeholder="pt maju mundur"
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
                        <Label style={styles.labelInput}>
                          Bulan/tahun
                        </Label>
                        <Item style={styles.item} regular>
                          <Input
                            placeholder="januari 2018"
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
                      <View style={styles.desWrapper}>
                        <Label style={styles.labelInput}>
                          Deskripsi singkat
                        </Label>
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
                        <Text style={styles.txtError}>{errors.description}</Text>
                      ) : null}
                      </View>
                      <View style={styles.hr} />
                      <View>
                        <Button
                          onPress={handleSubmit}
                          style={styles.btnPengalaman}
                          block
                          bordered>
                          <Text style={styles.tambahPengalaman}>Save</Text>
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
}

const mapStateToProps = state => ({
  auth: state.auth,
  experience: state.experience,
  user: state.user,
  jobseeker: state.jobseeker
})

const mapDispatchToProps = {
  editExperience: experienceAction.editExperience,
  getProfileSeeker: seekerAction.getProfileSeeker,
  saveUser: userAction.saveUser,
  clearMessage: seekerAction.clearMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExperience);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    paddingHorizontal: 15,
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
    marginLeft: 10,
    fontSize: 13,
    fontFamily: 'OpenSans-Regular',
    color: 'red',
  },
});
