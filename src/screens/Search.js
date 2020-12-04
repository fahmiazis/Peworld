import {Button, Input, Item} from 'native-base';
import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  FlatList,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import jwtDecode from 'jwt-decode';
import companyAction from '../redux/actions/company';
import {useSelector, useDispatch} from 'react-redux';

// Import component
import CardJobSeeker from '../Components/CardJobSeeker';

const Search = ({navigation}) => {
  const dispatch = useDispatch();
  const [openModalOnSeeker, setOpenModalOnSeeker] = useState(false);
  const [openModalOnCompany, setOpenModalOnCompany] = useState(false);
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const auth = useSelector((state) => state.auth);
  const company = useSelector((state) => state.company);
  const role = jwtDecode(auth.token).roleId;
  const roleId = jwtDecode(auth.token);
  const {searchJobseeker} = company;
  console.log(company);
  console.log(searchJobseeker);

  const openModal = () => {
    if (role === 1) {
      setOpenModalOnSeeker(!openModalOnSeeker);
    } else if (role === 2) {
      setOpenModalOnCompany(!openModalOnCompany);
    }
  };

  const submitSearch = () => {
    console.log(search);
    dispatch(companyAction.searchJobSeeker(auth.token, search));
  };

  const onChangeValueSearch = (value) => {
    setSearch(value);
  };

  const seeDetail = () => {
    if (roleId === 2) {
      navigation.navigate('ProfileSeekerInfo');
    } else {
      navigation.navigate('ProfileCompany');
    }
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
              onSubmitEditing={submitSearch}
            />
          </Item>
          <Button style={styles.btn} onPress={openModal}>
            <IconFeather name="list" size={25} color="#9EA0A5" />
          </Button>
        </View>

        {searchJobseeker === undefined ? null : (
          <View>
            <Text style={styles.title}>Web Developer</Text>
            <FlatList
              contentContainerStyle={styles.listContainer}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={searchJobseeker}
              renderItem={({item, index}) => (
                <CardJobSeeker
                  dataCard={item}
                  index={index}
                  dataLength={searchJobseeker.length}
                  onPressCard={seeDetail}
                />
              )}
              keyExtractor={(item) => item.UserDetail.id.toString()}
            />
          </View>
        )}

        <Modal
          isVisible={openModalOnCompany}
          onBackdropPress={openModal}
          backdropOpacity={0.3}>
          <View style={styles.modalView}>
            <Button
              transparent
              full
              style={styles.btnOption}
              onPress={() => {
                setSort('nama');
                setOpenModalOnCompany(false);
              }}>
              <Text style={styles.txtOption}>Sortir berdasarkan nama</Text>
            </Button>
            <Button
              transparent
              full
              style={styles.btnOption}
              onPress={() => {
                setSort('skill');
                setOpenModalOnCompany(false);
              }}>
              <Text style={styles.txtOption}>Sortir berdasarkan skill</Text>
            </Button>
            <Button
              transparent
              full
              style={styles.btnOption}
              onPress={() => {
                setSort('lokasi');
                setOpenModalOnCompany(false);
              }}>
              <Text style={styles.txtOption}>Sortir berdasarkan lokasi</Text>
            </Button>
            <Button
              transparent
              full
              style={styles.btnOption}
              onPress={() => {
                setSort('freelance');
                setOpenModalOnCompany(false);
              }}>
              <Text style={styles.txtOption}>Sortir berdasarkan freelance</Text>
            </Button>
            <Button
              transparent
              full
              style={styles.btnOption}
              onPress={() => {
                setSort('fulltime');
                setOpenModalOnCompany(false);
              }}>
              <Text style={styles.txtOption}>Sortir berdasarkan fulltime</Text>
            </Button>
          </View>
        </Modal>
        <Modal
          isVisible={openModalOnSeeker}
          onBackdropPress={openModal}
          backdropOpacity={0.3}>
          <View style={styles.modalView}>
            <Button
              transparent
              full
              style={styles.btnOption}
              onPress={() => {
                setSort('nama');
                setOpenModalOnSeeker(false);
              }}>
              <Text style={styles.txtOption}>Sortir berdasarkan nama</Text>
            </Button>
            <Button
              transparent
              full
              style={styles.btnOption}
              onPress={() => {
                setSort('bidang');
                setOpenModalOnSeeker(false);
              }}>
              <Text style={styles.txtOption}>Sortir berdasarkan bidang</Text>
            </Button>
            <Button
              transparent
              full
              style={styles.btnOption}
              onPress={() => {
                setSort('lokasi');
                setOpenModalOnSeeker(false);
              }}>
              <Text style={styles.txtOption}>Sortir berdasarkan lokasi</Text>
            </Button>
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
  title: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
    marginHorizontal: 15,
    marginBottom: 18,
  },
  listContainer: {
    marginRight: 15,
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
