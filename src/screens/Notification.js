import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function Notification() {
  return (
    <View style={styles.parent}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.imageNoNotif}
          source={require('../../assets/images/imageNoNotif.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    paddingHorizontal: 15,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 133,
    height: 109,
  },
  imageNoNotif: {
    width: '100%',
    height: '100%',
  },
});
