/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import jwtDecode from 'jwt-decode';
import {useNavigation} from '@react-navigation/native';

// Import component
import CardWithoutViewAll from '../Components/CardWithoutViewAll';

// Import action
import companyAction from '../redux/actions/company';
import {useDispatch, useSelector} from 'react-redux';

export default function Pencarian({route}) {
  const auth = useSelector((state) => state.auth);
  const company = useSelector((state) => state.company);
  const decode = jwtDecode(auth.token);
  const {resultSearch} = company;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(companyAction.getListJobSeeker(auth.token));
    if (route.params && route.params.search) {
      dispatch(companyAction.searchJobSeeker(auth.token, route.params.search));
    } else {
      dispatch(companyAction.searchJobSeeker(auth.token));
    }
  }, []);
  const seeDetail = (id) => {
    if (decode.roleId === 2) {
      navigation.navigate('ProfileSeekerInfo', {id});
    } else {
      navigation.navigate('ProfileCompany', {id: id});
    }
  };
  return (
    <Container style={styles.parent}>
      <View>
        <FlatList
          contentContainerStyle={styles.listContainer}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={resultSearch}
          renderItem={({item}) => (
            <CardWithoutViewAll
              dataCard={item}
              onPressCard={() => seeDetail(item.UserDetail.id)}
            />
          )}
          keyExtractor={(item) => item.UserDetail.id.toString()}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
  },
  header: {
    height: 140,
  },
  wrapperTitleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: '25%',
    paddingHorizontal: 15,
  },
  txtDate: {
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffffff',
    marginBottom: 10,
  },
  txtName: {
    fontSize: 26,
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffffff',
  },
  wrapperIconBell: {
    alignSelf: 'flex-start',
    marginTop: 25,
    marginLeft: 15,
  },
  icon: {
    fontSize: 40,
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    right: '20%',
    top: '7%',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: '#1F2A36',
    marginHorizontal: 15,
    marginBottom: 18,
  },
  listContainer: {
    paddingLeft: 10,
  },
});
