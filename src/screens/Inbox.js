/* eslint-disable react-hooks/exhaustive-deps */
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
  const [loading] = useState(false);

  const decoded = jwt_decode(auth.token);

  const getData = () => {
    if (decoded.roleId === 2) {
      dispatch(chatAction.listMessageCompany(auth.token));
    } else if (decoded.roleId === 1) {
      dispatch(chatAction.listMessageJobSeeker(auth.token));
    }
  };

  React.useEffect(() => {
    getData();
    socket.on(decoded.id, () => {
      getData();
    });
  }, []);

  const goToChatRoom = (sender, recipient, recipientName) => {
    if (sender === decoded.id) {
      navigation.navigate('ChatRoom', {recipient, recipientName});
    } else {
      navigation.navigate('ChatRoom', {sender, recipientName});
    }
  };

  const RenderItem = ({item}) => {
    const {sender, recipient} = item;
    let name = '';
    if (item.recipient === decoded.id && decoded.roleId === 1) {
      name = item.senderInfo.Company.name;
    } else if (item.sender === decoded.id && decoded.roleId === 1) {
      name = item.recipientInfo.Company.name;
    } else if (item.recipient === decoded.id && decoded.roleId === 2) {
      name = item.senderInfo.UserDetail.name;
    } else if (item.sender === decoded.id && decoded.roleId === 2) {
      name = item.recipientInfo.UserDetail.name;
    }
    console.log(recipient === decoded.id);
    return (
      <TouchableOpacity onPress={() => goToChatRoom(sender, recipient, name)}>
        <View style={styles.chatBox}>
          <View>
            {item.recipient === decoded.id && (
              <Thumbnail
                source={
                  item.senderInfo.UserDetail.profileAvatar
                    ? {
                        uri: API_URL.concat(
                          item.senderInfo.UserDetail.profileAvatar.avatar,
                        ),
                      }
                    : require('../../assets/images/default-avatar1.png')
                }
              />
            )}
            {item.sender === decoded.id && (
              <Thumbnail
                source={
                  item.recipientInfo.UserDetail.profileAvatar
                    ? {
                        uri: API_URL.concat(
                          item.recipientInfo.UserDetail.profileAvatar.avatar,
                        ),
                      }
                    : require('../../assets/images/default-avatar1.png')
                }
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
                <Text
                  style={
                    recipient === decoded.id && !item.isRead
                      ? styles.IsReadFalse
                      : styles.chat
                  }>
                  {' '}
                  {moment.utc(item.createdAt).local().calendar({
                    sameDay: 'hh:mm A',
                    lastDay: '[Yesterday]',
                    sameElse: 'DD/MM/YYY',
                  })}
                </Text>
              </View>
            </View>
            <View style={styles.desView}>
              {item.content.length < 30 && (
                <Text
                  numberOfLines={1}
                  style={
                    recipient === decoded.id && !item.isRead
                      ? styles.IsReadFalse
                      : styles.chat
                  }>
                  {item.content}
                </Text>
              )}
              {item.content.length > 30 && (
                <Text
                  numberOfLines={1}
                  style={
                    recipient === decoded.id && !item.isRead
                      ? styles.dateIsReadFalse
                      : styles.chat
                  }>
                  {item.content.substring(0, 30).concat('...')}
                </Text>
              )}
              {recipient === decoded.id && !item.isRead && (
                <View style={styles.badge} />
              )}
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
        {message.isLoadingGetListChat || message.isLoadingGetDetail ? (
          <Modal transparent visible>
            <View style={styles.modalView}>
              <View style={styles.alertBox}>
                <ActivityIndicator size="large" color="#5E50A1" />
                <Text style={styles.textAlert}>{message.alertMsg}</Text>
              </View>
            </View>
          </Modal>
        ) : null}
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
  IsReadFalse: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    lineHeight: 19,
    color: '#5E50A1',
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
  desView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    backgroundColor: '#5E50A1',
  },
});
