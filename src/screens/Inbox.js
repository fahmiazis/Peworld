import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {Thumbnail} from 'native-base';
import chatAction from '../redux/actions/message';
import {useDispatch, useSelector} from 'react-redux';
import jwt_decode from 'jwt-decode';
import socket from '../helpers/socket';
import moment from 'moment';

import {API_URL} from '@env';

export default function Inbox({navigation}) {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const message = useSelector((state) => state.message);

  const {data} = message.data;
  // console.log(data);
  const [loading] = useState(false);

  const decoded = jwt_decode(auth.token);

  const getData = () => {
    if (decoded.roleId === 2) {
      dispatch(chatAction.listMessageCompany(auth.token));
      // console.log('get company');
    } else if (decoded.roleId === 1) {
      // console.log('get jobseeker');
      dispatch(chatAction.listMessageJobSeeker(auth.token));
    }
  };

  React.useEffect(() => {
    getData();
    socket.on(decoded.id, () => {
      console.log(socket.id);
      console.log('socket on called');
      getData();
    });
    return () => {
      socket.close();
    };
  }, []);

  const goToChatRoom = (sender, recipient) => {
    if (sender === decoded.id) {
      navigation.navigate('ChatRoom', {recipient});
    } else {
      navigation.navigate('ChatRoom', {sender});
    }
  };

  const today = moment(new Date()).format('DD/MM/YY');

  const RenderItem = ({item}) => {
    const {sender, recipient} = item;
    return (
      <TouchableOpacity onPress={() => goToChatRoom(sender, recipient)}>
        <View style={styles.chatBox}>
          <View>
            {item.recipient === decoded.id && (
              <Thumbnail
                source={{
                  uri: API_URL.concat(
                    item.senderInfo.UserDetail.profileAvatar.avatar,
                  ),
                }}
              />
            )}
            {item.sender === decoded.id && (
              <Thumbnail
                source={{
                  uri: API_URL.concat(
                    item.recipientInfo.UserDetail.profileAvatar.avatar,
                  ),
                }}
              />
            )}
          </View>
          <View style={styles.contentChat}>
            <View style={styles.labelChat}>
              <View>
                {item.recipient === decoded.id && decoded.roleId === 1 && (
                  <Text style={styles.company}>
                    {item.senderInfo.Company.name}
                  </Text>
                )}
                {item.recipient === decoded.id && decoded.roleId === 2 && (
                  <Text style={styles.company}>
                    {item.senderInfo.UserDetail.name}
                  </Text>
                )}
                {item.sender === decoded.id && decoded.roleId === 2 && (
                  <Text style={styles.company}>
                    {item.recipientInfo.UserDetail.name}
                  </Text>
                )}
                {item.sender === decoded.id && decoded.roleId === 1 && (
                  <Text style={styles.company}>
                    {item.recipientInfo.Company.name}
                  </Text>
                )}
              </View>
              <View>
                {/* <Text style={styles.chat}>{moment.utc().local().format('ddd, DD MMMM YYYY')}</Text> */}
                {today === moment(item.createdAt).format('DD/MM/YY') ? (
                  <Text style={styles.chat}>
                    {' '}
                    {moment(item.createdAt).format('HH:mm')}
                  </Text>
                ) : (
                  <Text style={styles.chat}>
                    {moment(item.createdAt).format('DD/MM/YY')}
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.desView}>
              <Text numberOfLines={1} style={styles.chat}>
                {item.content}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.textUtama}>Utama</Text>
      </View>
      <SafeAreaView style={styles.saveArea}>
        {message.isLoading && (
          <Modal transparent visible>
            <View style={styles.modalView}>
              <View style={styles.alertBox}>
                <ActivityIndicator size="large" color="#5E50A1" />
                <Text style={styles.textAlert}>{message.alertMsg}</Text>
              </View>
            </View>
          </Modal>
        )}
        {data && data.length > 0 ? (
          <FlatList
            data={data}
            refreshing={loading}
            onRefresh={getData}
            renderItem={RenderItem}
            // renderItem={(item) => (
            //   <RenderItem data={item} navigation={navigation} />
            // )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <View style={styles.empty}>
            <View>
              <Image source={require('../../assets/images/inbox_empty.png')} />
            </View>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    paddingLeft: 16,
    paddingRight: 16,
    paddingVertical: 20,
  },
  textUtama: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    lineHeight: 22,
    color: '#9EA0A5',
  },
  chatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  labelChat: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  contentChat: {
    marginLeft: 16,
    flex: 1,
  },
  company: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    lineHeight: 22,
    color: '#1F2A36',
  },
  chat: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 19,
    color: '#9EA0A5',
  },
  header: {
    marginBottom: 37,
  },
  saveArea: {
    flex: 1,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'grey',
    opacity: 0.8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAlert: {
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
});