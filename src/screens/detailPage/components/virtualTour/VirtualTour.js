import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Appbar from '../../../../components/Appbar';

// ...
const VirtualTour = () => {
  // return <WebView source={{ uri: 'https://my.matterport.com/show/?m=FGWmGqW7xSe' }} style={{ flex: 1 }} />;
  // return <WebView source={{ uri: 'https://my.matterport.com/show/?m=974C6ZKvQLs&ts=5' }} style={{ flex: 1 }} />;
  return (
    <View style={{ flex: 1 }}>
      <Appbar title={'Virtual Tour'} backIcon={true} />
      <WebView source={{ uri: 'https://my.matterport.com/show/?m=dZhrj3iXnVv&play=1&ts=1&guides=0&brand=1&title=1&hl=3' }} style={{ flex: 1 }} />
    </View>
  )
}

export default VirtualTour;
