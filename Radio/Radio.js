import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image} from 'react-native';
import Video from 'react-native-video';
import TrackPlayer from 'react-native-track-player';
import Controls from './components/Controls'
//import console = require('console');

const stream = "https://streamer.radio.co/s7de3f3534/listen"

// Creates the player
TrackPlayer.setupPlayer().then(async () => {

  TrackPlayer.updateOptions({
		// An array of media controls capabilities
		capabilities: [
			TrackPlayer.CAPABILITY_PLAY,
			TrackPlayer.CAPABILITY_STOP
		],
		
		// An array of capabilities that will show up when the notification is in the compact form on Android
		compactCapabilities: [
			TrackPlayer.CAPABILITY_PLAY,
			TrackPlayer.CAPABILITY_STOP
		]
  });
  
  

  // Adds a track to the queue
  await TrackPlayer.add({
      id: 'trackId',
      //type: 'dash',
      url: stream,
      title: 'Track Title',
      artist: 'Track Artist',
      //artwork: require('track.png')
      
  })

});

class Radio extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      stopped: true
    }
  }

  componentDidMount=()=> {
    // Starts playing it
    this.onPlaybackState = TrackPlayer.addEventListener('playback-error', async (code, message) => {
      console.log(code + ':' + message)
    })
  }

  _onStop = () => {
    this.setState({stopped: true})
    TrackPlayer.stop()
  }

  _onPlay = () => {
    this.setState({stopped: false})
    TrackPlayer.play()
  }

  render() {
    return (
      <View>
        <View>
        <Image style={styles.station} source={require('../img/hero.png')}/>
        </View>
        <Controls 
          initialAudioState={this.state.stopped} 
          handleStop={this._onStop} 
          handlePlay={this._onPlay}
        />
        {/*this.state.stopped ?
        null:
        <Video source={{uri: stream}}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}                                      // Store reference
          audioOnly={true}
          //controls={true}
          muted={this.state.stopped}
          playInBackground={true}
          ignoreSilentSwitch={'ignore'}
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onError={this.videoError}               // Callback when video cannot be loaded
          style={styles.backgroundVideo} 
        />*/}
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  station: {
    height: 256,
    width: 256,
  }
})

export default Radio