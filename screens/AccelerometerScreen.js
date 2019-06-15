import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Constants, Accelerometer } from "expo";

export default class App extends Component {
  state = {
    accelerometerData: { x: 0, y: 0, z: 0 }
  };

  componentWillUnmount() {
    this._unsubscribeFromAccelerometer();
  }

  componentDidMount() {
    this._subscribeToAccelerometer();
  }

  componentWillMount() {
    const { width, height } = Dimensions.get("window");
    this.screenWidth = width;
    this.screenHeight = height;
    this.boxWidth = this.screenWidth / 10.0;
  }

  _subscribeToAccelerometer = () => {
    this._accelerometerSubscription = Accelerometer.addListener(
      accelerometerData => this.setState({ accelerometerData })
    );
  };

  _unsubscribeFromAccelerometer = () => {
    this._accelerometerSubscription && this._acceleroMeterSubscription.remove();
    this._accelerometerSubscription = null;
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Move the box according to the phone's tilt */}
        <View
          style={{
            position: "absolute",
            top:
              (-this.screenHeight * (this.state.accelerometerData.y - 1.0)) /
              2.0 -
              this.boxWidth / 2.0,
            left:
              (this.screenWidth * (this.state.accelerometerData.x + 1.0)) /
              2.0 -
              this.boxWidth / 2.0,
            width: this.screenWidth / 10.0,
            height: this.screenWidth / 10.0,
            backgroundColor: "#056ECF",
            borderRadius: 50
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>Accelometer</Text>

          <Text style={styles.paragraph}>
            x = {this.state.accelerometerData.x.toFixed(2)}
            {", "}y = {this.state.accelerometerData.y.toFixed(2)}
            {", "}z = {this.state.accelerometerData.z.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FFF"
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  },
  textContainer: {
    position: "absolute",
    top: 40
  }
});