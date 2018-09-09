import React, { Component } from "react";
import { actors } from "../data";
import Colors from "../styles/colors";
import { View, Image, Text, StyleSheet } from "react-native";

export default class Actor extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });

  constructor(props) {
    super(props);
    this.state = {
      actor: actors[props.navigation.state.params.name],
    };
  }

  render() {
    const { actor } = this.state;

    return (
      <View style={Styles.container}>
        <Image style={Styles.image} source={actor.image} />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.background,
  },
  image: {
    height: 400,
    width: undefined,
  },
});
