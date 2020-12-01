import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {Thumbnail} from 'native-base';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const RenderItem = ({data}) => {
  return (
    <View style={styles.chatBox}>
      <View>
        <Thumbnail source={require('../assets/img/background.jpg')} />
      </View>
      <View style={styles.contentChat}>
        <View style={styles.labelChat}>
          <View>
            <Text style={styles.company}>PT harus bisa</Text>
          </View>
          <View>
            <Text style={styles.chat}>12 Apr</Text>
          </View>
        </View>
        <View>
          <Text style={styles.chat}>
            Lorem ipsum dolor sit amet, consectetur
          </Text>
        </View>
      </View>
    </View>
  );
};

export default function Inbox() {
  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.textUtama}>Utama</Text>
      </View>
      <SafeAreaView style={styles.saveArea}>
        {DATA.length ? (
          <FlatList
            data={DATA}
            renderItem={(item) => <RenderItem data={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={styles.empty}>
            <View>
              <Image source={require('../assets/img/inbox_empty.png')} />
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
    backgroundColor: '#E5E5E5',
    paddingLeft: 16,
    paddingRight: 16,
  },
  textUtama: {
    fontWeight: '600',
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
  },
  company: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: '#1F2A36',
  },
  chat: {
    fontStyle: 'normal',
    fontWeight: 'normal',
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
});
