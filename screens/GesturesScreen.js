import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';
import Draggable from 'react-native-draggable';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Gestures',
  };

  constructor(props) {
    super(props)
    this.state = {
      myText: 'I\'m ready to get swiped!',
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


  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <View style={styles.container}>
        <View style={styles.containerBtn}>
          <TouchableOpacity
            onLongPress={() => {
              Alert.alert(' Button Long Pressed')
            }}
            onPress={() => { }}
            //Here is the trick
            activeOpacity={0.6}
            style={styles.button}>
            <Text style={styles.TextStyle}>Long press me</Text>
          </TouchableOpacity>
        </View>
        <Draggable renderSize={56} renderColor='black' offsetX={-100} offsetY={100} renderText='A' />
        <Draggable reverse={false} renderColor='red' renderShape='square' offsetX={0} offsetY={0} renderText='B' />
        <GestureRecognizer
          onSwipe={(direction, state) => this.onSwipe(direction, state)}
          onSwipeUp={(state) => this.onSwipeUp(state)}
          onSwipeDown={(state) => this.onSwipeDown(state)}
          onSwipeLeft={(state) => this.onSwipeLeft(state)}
          onSwipeRight={(state) => this.onSwipeRight(state)}
          config={config}
          style={{
            flex: 1,
            backgroundColor: this.state.backgroundColor
          }}
        >
          <Text>{this.state.myText}</Text>
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
  }
});
