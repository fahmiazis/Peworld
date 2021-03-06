/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import socket from '../helpers/socket';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'native-base';

// Import Action
import chatAction from '../redux/actions/message';
import companyAction from '../redux/actions/company';

export default function ChatRoom({route}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const auth = useSelector((state) => state.auth);
  const message = useSelector((state) => state.message);
  const decoded = jwtDecode(auth.token);
  const [content, setContent] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const recipientId =
    route.params.recipient || route.params.sender || route.params.id;

  React.useEffect(() => {
    if (decoded.roleId === 2) {
      dispatch(chatAction.detailMessageCompany(auth.token, recipientId));
    } else {
      dispatch(chatAction.detailMessageJobSeeker(auth.token, recipientId));
    }
    socket.on(decoded.id, () => {
      if (decoded.roleId === 2) {
        dispatch(chatAction.detailMessageCompany(auth.token, recipientId));
        dispatch(chatAction.listMessageCompany(auth.token));
      } else if (decoded.roleId === 1) {
        dispatch(chatAction.detailMessageJobSeeker(auth.token, recipientId));
        dispatch(chatAction.listMessageJobSeeker(auth.token));
      }
    });
  }, []);

  const reloadData = () => {
    setLoading(true);
    if (decoded.roleId === 2) {
      dispatch(chatAction.detailMessageCompany(auth.token, recipientId));
    } else {
      dispatch(chatAction.detailMessageJobSeeker(auth.token, recipientId));
    }
    setLoading(false);
  };

  const getNextData = () => {
    const {nextLink} = message.pageInfo;
    if (nextLink) {
      dispatch(chatAction.getNextMessage(auth.token, nextLink));
    }
  };

  const RenderMessage = ({dataChat}) => {
    const id = recipientId;
    const onSeeProfile = () => {
      dispatch(companyAction.getDetailJobSeeker(auth.token, id)).catch((e) =>
        console.log(e.message),
      );
      navigation.navigate('ProfileSeekerInfo', {id: id});
    };
    return (
      <View>
        {dataChat.sender === decoded.id ? (
          <View style={styles.bubbleSender}>
            <Text style={styles.chatSender}>{dataChat.content}</Text>
            <Text style={styles.time}>
              {moment.utc(dataChat.createdAt).local().format('hh:mm A')}
            </Text>
          </View>
        ) : (
          <View style={styles.bubbleReceiver}>
            <Text style={styles.chatReceiver}>{dataChat.content}</Text>
            <Text style={styles.timeReceiver}>
              {moment.utc(dataChat.createdAt).local().format('hh:mm A')}
            </Text>
          </View>
        )}
        {dataChat.content.includes(
          'Bila Anda berkenan silahkan melihat Profile saya',
        ) &&
          decoded.roleId === 2 &&
          dataChat.sender !== decoded.id && (
            <Button full style={styles.btnSeeProfile} onPress={onSeeProfile}>
              <Text style={styles.txtSeeProfile}>See Profile</Text>
            </Button>
          )}
      </View>
    );
  };

  const sendMessage = () => {
    const data = {
      content,
    };
    if (decoded.roleId === 2) {
      dispatch(chatAction.sendMessageCompany(auth.token, recipientId, data));
    } else {
      dispatch(chatAction.sendMessageSeeker(auth.token, recipientId, data));
    }
    setTimeout(() => {
      onUpdate();
    });
  };
  const onUpdate = () => {
    if (message.isMessageSent) {
      if (decoded.roleId === 2) {
        dispatch(chatAction.detailMessageCompany(auth.token, recipientId));
      } else {
        dispatch(chatAction.detailMessageJobSeeker(auth.token, recipientId));
      }
      setContent('');
      dispatch(chatAction.clearMsg());
    }
  };

  return (
    <View style={styles.parent}>
      <FlatList
        data={message.detailMessage}
        renderItem={({item}) => <RenderMessage dataChat={item} />}
        keyExtractor={(item, index) => String(index)}
        refreshing={loading}
        onRefresh={reloadData}
        onEndReached={getNextData}
        onEndReachedThreshold={0.5}
        inverted={true}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.containerStyle}
          multiline={true}
          onChangeText={(text) => setContent(text)}
          value={content}
          placeholder="Type here"
        />
        {content === '' ? (
          <TouchableOpacity style={styles.iconWrapper}>
            <IconFeather name="paperclip" size={25} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.iconWrapper} onPress={sendMessage}>
            <IconFeather name="send" size={25} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: '3%',
  },
  bubbleSender: {
    width: '80%',
    backgroundColor: '#5E50A1',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 5,
    paddingLeft: 10,
    marginVertical: 5,
    marginLeft: 'auto',
  },
  chatSender: {
    color: 'white',
    fontSize: 13,
  },
  bubbleReceiver: {
    width: '80%',
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 5,
    marginVertical: 5,
  },
  chatReceiver: {
    color: '#000',
    fontSize: 13,
  },
  time: {
    color: '#dcdcdc',
    fontSize: 8,
    marginLeft: 'auto',
    paddingTop: 3,
  },
  timeReceiver: {
    color: 'grey',
    fontSize: 8,
    marginLeft: 'auto',
    paddingTop: 3,
  },
  inputWrapper: {
    marginTop: 'auto',
    marginBottom: 10,
    maxHeight: 80,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  containerStyle: {
    // backgroundColor: 'tomato',
    width: '90%',
    fontSize: 13,
  },
  iconWrapper: {
    marginLeft: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
  },
  icon: {
    color: 'grey',
  },
  btnSeeProfile: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    marginVertical: 10,
  },
  txtSeeProfile: {
    color: '#5E50A1',
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
  },
});
