import React from 'react';
import { View, StyleSheet, TouchableHighlight, Alert, Text } from 'react-native';
import Draggable from 'react-native-draggable';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Gestures',
  };

  constructor(props) {
    super(props)
    this.state = {
      myText: '{ Swipe in any direction to change my color}',
      gestureName: 'none',
      backgroundColor: '#fff'
    }
  }
  onSwipeUp(gestureState) {
    this.setState({ myText: 'You swiped up!' });
  }

  onSwipeDown(gestureState) {
    this.setState({ myText: 'You swiped down!' });
  }

  onSwipeLeft(gestureState) {
    this.setState({ myText: 'You swiped left!' });
  }

  onSwipeRight(gestureState) {
    this.setState({ myText: 'You swiped right!' });
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({ backgroundColor: 'red' });
        break;
      case SWIPE_DOWN:
        this.setState({ backgroundColor: 'green' });
        break;
      case SWIPE_LEFT:
        this.setState({ backgroundColor: 'blue' });
        break;
      case SWIPE_RIGHT:
        this.setState({ backgroundColor: 'yellow' });
        break;
    }
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }
  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }
    return (
      <View style={styles.container}>
        <View style={styles.containerBtn}>
          <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Touchable with Long Press</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Draggable renderSize={56} renderColor='black' offsetX={-100} offsetY={100} renderText='Fixed' />
        <Draggable reverse={false} renderColor='red' renderShape='square' offsetX={0} offsetY={0} renderText='Free' />
        <GestureRecognizer
          onSwipe={(direction, state) => this.onSwipe(direction, state)}
          onSwipeUp={(state) => this.onSwipeUp(state)}
          onSwipeDown={(state) => this.onSwipeDown(state)}
          onSwipeLeft={(state) => this.onSwipeLeft(state)}
          onSwipeRight={(state) => this.onSwipeRight(state)}
          config={config}
          style={{
            height: 60,
            backgroundColor: this.state.backgroundColor,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>{this.state.myText}</Text>
        </GestureRecognizer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  containerBtn: {
    alignItems: 'center'
  },
  button: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#e3e5e7',
  },

  TextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },

  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
