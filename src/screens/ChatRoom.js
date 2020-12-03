import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

export default function ChatRoom() {
  const [content, setContent] = React.useState('');
  return (
    <View style={styles.parent}>
      <View style={styles.bubbleSender}>
        <Text style={styles.chatSender}>Lorem ipsum dolor sit amet</Text>
        <Text style={styles.time}>02/12/20 11:53</Text>
      </View>
      <View style={styles.bubbleReceiver}>
        <Text style={styles.chatReceiver}>Lorem ipsum dolor sit amet</Text>
        <Text style={styles.timeReceiver}>02/12/20 11:53</Text>
      </View>
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
          <TouchableOpacity style={styles.iconWrapper}>
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
    paddingTop: '15%',
  },
  bubbleSender: {
    width: '80%',
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 5,
    marginVertical: 5,
  },
  chatSender: {
    color: '#000',
    fontSize: 13,
  },
  bubbleReceiver: {
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
  chatReceiver: {
    color: 'white',
    fontSize: 13,
  },
  time: {
    color: 'grey',
    fontSize: 8,
    marginLeft: 'auto',
    paddingTop: 3,
  },
  timeReceiver: {
    color: '#dcdcdc',
    fontSize: 8,
    marginLeft: 'auto',
    paddingTop: 3,
  },
  inputWrapper: {
    marginTop: 'auto',
    marginBottom: 10,
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
});
