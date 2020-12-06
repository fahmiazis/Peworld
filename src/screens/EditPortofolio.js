import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import {Formik} from 'formik';
import {Button, Input, Label, Item, Textarea, Radio} from 'native-base';
import {API_URL} from '@env';
import portAction from '../redux/actions/portofolio';
import userAction from '../redux/actions/user';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';

export class EditPortofolio extends Component {
  state = {
    picture: '',
    values: {},
  };

  getData = () => {
    this.props.getUseInfo(this.props.auth.token);
  };

  handleChangePhoto = (id) => {
    const options = {
      mediaType: 'photo',
      maxWidth: 1000,
      maxHeight: 1000,
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log(response);
      if (response.uri) {
        this.setState({picture: response.uri});
        const form = new FormData();
        form.append('picture', {
          uri: String('file://'.concat(response.path)),
          type: response.type,
          name: response.fileName,
        });
        this.props.editPortofolioImage(this.props.auth.token, form, id);
        this.getData();
      }
    });
  };

  render() {
    const {portofolio, index, role} = this.props.route.params;
    const detail = portofolio[index];
    // console.log(this.props);
    // console.log(detail);
    return (
      <ScrollView>
        <View style={styles.parent}>
          <Formik
            initialValues={{
              name: detail.name,
              description: detail.description,
              linkApp: detail.linkApp,
              github: detail.github,
              workplace: detail.workplace,
            }}
            onSubmit={(values) => {
              this.props.editPortofolio(
                this.props.auth.token,
                values,
                detail.id,
              );
              this.getData();
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
                    <Text style={styles.dataDiriText}>Edit Portofolio</Text>
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
                        <Label style={styles.labelInput}>
                          Deskripsi singkat
                        </Label>
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
                            onChangeText={handleChange('linkApp')}
                            onBlur={handleBlur('linkApp')}
                            value={values.linkApp}
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
                            onChangeText={handleChange('workplace')}
                            onBlur={handleBlur('workplace')}
                            value={values.workplace}
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
                          <Label style={styles.labelRadio}>
                            Aplikasi mobile
                          </Label>
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
                        <TouchableOpacity
                          onPress={() => this.handleChangePhoto(detail.id)}>
                          <Image
                            source={{
                              uri: API_URL.concat(detail.picture.picture),
                            }}
                            style={styles.imgPortofolio}
                          />
                        </TouchableOpacity>
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
const mapStateToProps = (state) => ({
  // portofolio: state.portofolio,
  auth: state.auth,
  jobseeker: state.jobseeker,
});

const mapDispatchToProps = {
  editPortofolio: portAction.editPortofolio,
  editPortofolioImage: portAction.editPortofolioImage,
  getUseInfo: userAction.show,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPortofolio);

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
  imgPortofolio: {
    height: 204,
    width: '100%',
    backgroundColor: 'powderblue',
    borderRadius: 4,
    marginTop: 20,
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
});
