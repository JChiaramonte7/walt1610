/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { WebView } from 'react-native-webview';
import { whileStatement } from '@babel/types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const webPlayer = `
<meta name="viewport" content="width=device-width, initial-scale=2.0">
<style>
    body {
        margin: 0;
        background: black;
        height: 100px;
        margin-left: -100px;
    }
    div {
        width: 99px;
        height: 100px;
        overflow: hidden;
        border-radius: 10px;
        margin: auto;
    }
    iframe {
        border: none;
    }    
</style>
<div>
<iframe
    src="https://embed.radio.co/player/5a07759.html?popout"
>
</iframe>
</div>
`;

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  finish = () => {
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <View
        style={styles.view}
      >
      <Text style={styles.title}>WALT 1610</Text>
      <View style={{flex: 1, position: 'absolute', bottom: 66}}>
        <WebView
          originWhitelist={['*']}
          source={{html: webPlayer}}
          style={{...styles.iframe, opacity: this.state.loading ? 0 : 1}}
          javaScriptEnabled ={true}
          scrollEnabled={false}
          onLoadStart={this.finish}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'black', 
    flex: 1,
    height: 100,
    alignItems: 'center',
  },
  iframe: {
    marginLeft: 22, 
    //marginTop: '150%', 
    marginRight: 22, 
    flex: 1,  
    borderRadius: 20,
    width: 200,
    height: 200,
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 48,
    textAlign: 'center',
    marginTop: 100,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
