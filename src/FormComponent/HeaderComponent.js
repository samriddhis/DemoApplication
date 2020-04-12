import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
const { width } = Dimensions.get("window");

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.outerContainer}>
        <StatusBar backgroundColor="#0966aa" barStyle="light-content" />
        <View style={Styles.titleViewStyle}>
          <Text style={Styles.titleStyle}>Info</Text>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  outerContainer: {
    height: 50,
    width: width,
    backgroundColor: "#0966aa",
    flexDirection: "row",
    padding: 10,
    elevation: 10
  },
  titleViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 22,
    color: "#fff"
  }
});
