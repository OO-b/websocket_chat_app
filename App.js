
 import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
 import { WebView } from 'react-native-webview';
 import React, { useState, Component } from 'react';
 import ChatView from './chatView';
 
 export default function App() {
     let no = "3"
     const [showChatRoom, setShowChatRoom] = useState(false);
     const closeSocialModal = () => setShowSocial(false);
 
     function clickCheck(){
       setShowChatRoom(true)
     }
 
     return(
       <View style={styles.container}>
          <ChatView showChatRoom={showChatRoom} closeSocialModal={closeSocialModal} roomNum={no} />
            <TouchableOpacity onPress={()=>clickCheck()}>
              <Text style={styles.chatBtn}>Let's chat❤</Text>
              <Text>방번호 : {no}</Text>
            </TouchableOpacity>
      </View>
 
     )
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     margin: 50,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   chatBtn:{
     fontSize:30
   }
 });
 
 // export default App;
 