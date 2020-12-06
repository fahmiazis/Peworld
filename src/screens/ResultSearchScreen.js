/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import jwtDecode from 'jwt-decode';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

// Import component
import CardWithoutViewAll from '../Components/CardWithoutViewAll';

// Import action
import companyAction from '../redux/actions/company';
import seekerAction from '../redux/actions/jobseeker';

export default function Pencarian({route}) {
  const auth = useSelector((state) => state.auth);
  const company = useSelector((state) => state.company);
  const seeker = useSelector((state) => state.jobseeker);
  const [loading, setLoading] = useState(false);
  const decode = jwtDecode(auth.token);
  const {resultSearch} = company;
  const {resultSearchCompany} = seeker;
  const pageInfo = company.pageInfo || seeker.pageInfo;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (decode.roleId === 2) {
      dispatch(companyAction.getListJobSeeker(auth.token)).catch((e) =>
        console.log(e.message),
      );
      if (route.params && route.params.search) {
        dispatch(
          companyAction.searchJobSeeker(auth.token, route.params.search),
        ).catch((e) => console.log(e.message));
      } else {
        dispatch(companyAction.searchJobSeeker(auth.token)).catch((e) =>
          console.log(e.message),
        );
      }
    } else if (decode.roleId === 1) {
      if (route.params && route.params.search) {
        dispatch(
          seekerAction.searchCompany(auth.token, route.params.search),
        ).catch((e) => console.log(e.message));
      } else {
        dispatch(seekerAction.searchCompany(auth.token)).catch((e) =>
          console.log(e.message),
        );
      }
    }
  };

  const reloadData = () => {
    setLoading(true);
    getData();
    setLoading(false);
  };

  const seeDetail = async (id) => {
    if (decode.roleId === 2) {
      await dispatch(companyAction.getDetailJobSeeker(auth.token, id));
      navigation.navigate('ProfileSeekerInfo', {id});
    } else {
      navigation.navigate('ProfileCompany', {id: id});
    }
  };

  const onNextPage = () => {
    const {nextLink} = pageInfo;
    if (decode.roleId === 1) {
      if (nextLink) {
        dispatch(seekerAction.getNextCompany(auth.token, nextLink)).catch((e) =>
          console.log(e.message),
        );
      }
    } else {
      if (nextLink) {
        dispatch(companyAction.getNextSeeker(auth.token, nextLink)).catch((e) =>
          console.log(e.message),
        );
      }
    }
  };
  return (
    <Container style={styles.parent}>
      <View>
        {decode.roleId === 2 && (
          <FlatList
            contentContainerStyle={styles.listContainer}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={resultSearch}
            refreshing={loading}
            onRefresh={reloadData}
            onEndReached={onNextPage}
            onEndReachedThreshold={0.2}
            renderItem={({item}) => (
              <CardWithoutViewAll
                dataCard={item}
                onPressCard={() => seeDetail(item.id)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        {decode.roleId === 1 && (
          <FlatList
            contentContainerStyle={styles.listContainer}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={resultSearchCompany}
            refreshing={loading}
            onRefresh={reloadData}
            onEndReached={onNextPage}
            onEndReachedThreshold={0.2}
            renderItem={({item}) => (
              <CardWithoutViewAll
                dataCard={item}
                onPressCard={() => seeDetail(item.id)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
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
