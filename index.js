// Import a library to help create a Component
import React from "react";
import { AppRegistry } from "react-native";
import MyApp from "./App";

// Create a Component
const App = () => <MyApp />;
// Render it to the device
AppRegistry.registerComponent("albums", () => App);
