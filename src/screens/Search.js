import {Button, Input, Item} from 'native-base';
import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';

const Search = () => {
  const [openModalOnSeeker, setOpenModalOnSeeker] = useState(false);
  const [openModalOnCompany, setOpenModalOnCompany] = useState(false);
  const [search, setSearch] = useState('');

  const openModal = () => {
    const isLogin = 'jobseeker';
    if (isLogin === 'jobseeker') {
      setOpenModalOnSeeker(!openModalOnSeeker);
    } else if (isLogin === 'company') {
      setOpenModalOnCompany(!openModalOnCompany);
    }
  };

  const onChangeValueSearch = (value) => {
    setSearch(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.parent}>
        <View style={styles.wrapperInput}>
          <Item regular style={styles.itemInput}>
            <IconFeather
              name="search"
              size={25}
              color="#9EA0A5"
              style={styles.iconSearch}
            />
            <Input
              placeholder="Search"
              placeholderTextColor="#9EA0A5"
              value={search}
              onChangeText={onChangeValueSearch}
              style={styles.inputSearch}
            />
          </Item>
          <Button style={styles.btn} onPress={openModal}>
            <IconFeather name="list" size={25} color="#9EA0A5" />
          </Button>
        </View>
        <Modal
          isVisible={openModalOnCompany}
          onBackdropPress={openModal}
          backdropOpacity={0.3}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.btnOption}>
              <Text style={styles.txtOption}>Sortir berdasarkan nama</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOption}>
              <Text style={styles.txtOption}>Sortir berdasarkan skill</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOption}>
              <Text style={styles.txtOption}>Sortir berdasarkan lokasi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOption}>
              <Text style={styles.txtOption}>Sortir berdasarkan freelance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOption}>
              <Text style={styles.txtOption}>Sortir berdasarkan fulltime</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          isVisible={openModalOnSeeker}
          onBackdropPress={openModal}
          backdropOpacity={0.3}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.btnOption}>
              <Text style={styles.txtOption}>Sortir berdasarkan nama</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOption}>
              <Text style={styles.txtOption}>Sortir berdasarkan bidang</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOption}>
              <Text style={styles.txtOption}>Sortir berdasarkan lokasi</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Search;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
  },
  wrapperInput: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  itemInput: {
    flexGrow: 1,
    height: 50,
    backgroundColor: '#ffffff',
    marginRight: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    shadowColor: '#ffffff40',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  inputSearch: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
  },
  btn: {
    backgroundColor: '#ffffff',
    height: 50,
    width: 50,
    alignSelf: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    shadowColor: '#ffffff40',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    marginHorizontal: 40,
  },
  btnOption: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F3F4',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  txtOption: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#1F2A36',
  },
});
