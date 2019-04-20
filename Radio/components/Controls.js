import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableWithoutFeedback} from 'react-native';

class Controls extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      stopped: this.props.initialAudioState
    }
  }

  _onPressButton = () => {
    if (this.state.stopped) {
      this.props.handlePlay()
    }
    else {
      this.props.handleStop()
    }
    this.setState({
      stopped: !this.state.stopped
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this._onPressButton}>
        {this.state.stopped ?
        <Image style={styles.control} source={require('../../img/Play.png')} /> :
        <Image style={styles.control} source={require('../../img/Pause.png')} />
        }
      </TouchableWithoutFeedback>
      
    )
  }
}

const styles = StyleSheet.create({
  control: {
    height: 48,
    width: 48
  }
})

export default Controls