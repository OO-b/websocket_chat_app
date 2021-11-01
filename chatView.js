import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { WebView } from 'react-native-webview';

export default function chatView(props) {

  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={props.showChatRoom}
    style={styles.container}
    >
        <View style={{flex: 1}}>
            <Text>방번호 : {props.roomNum}</Text>
            <WebView 
                style={styles.container}
                source={{ uri: 'http://192.168.45.227:8000/chat/'+props.roomNum }}
            />
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
