import React, { Component } from "react";

import Movie from "./components/Movie";
import MovieList from "./components/MovieList";
import Actor from "./components/Actor";

import { StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import Colors from "./styles/colors";

const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.subtleAccent,
  },
});

const App = createStackNavigator(
  {
    Home: { screen: MovieList },
    Movie: { screen: Movie },

    // Add the Actor screen
  },
  {
    navigationOptions: {
      headerTintColor: Colors.accent,
      headerStyle: Styles.header,
    },
  },
);

export default App;
