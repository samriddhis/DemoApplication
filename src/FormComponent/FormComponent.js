import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  Dimensions
} from "react-native";
const { height, width } = Dimensions.get("window");
import { connect } from "react-redux";
import HeaderComponent from "./HeaderComponent";
import { Icon } from "react-native-elements";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: props.emailIdValue == undefined ? "" : props.emailIdValue,
      age: "",
      marriedStatus: false
    };
  }

  onClickListener = () => {
    if (
      this.state.age == "" ||
      this.state.firstName == "" ||
      this.state.lastName == ""
    ) {
      Alert.alert("Warning", "Please enter details....");
    } else {
      if (parseInt(this.state.age) >= 18) {
        Alert.alert("Verification", "Are you married?", [
          {
            text: "No",
            onPress: () => {
              this.props.dispatch({
                type: "FORM_DETAILS",
                payload: {
                  marriedStatus: this.state.marriedStatus,
                  age: this.state.age
                }
              });
              this.props.navigation.navigate("DetailsScreen");
            },
            style: "cancel"
          },
          {
            text: "Yes",
            onPress: () => {
              this.props.dispatch({
                type: "FORM_DETAILS",
                payload: {
                  marriedStatus: !this.state.marriedStatus,
                  age: this.state.age
                }
              });
              this.props.navigation.navigate("DetailsScreen");
            }
          }
        ]);
      } else {
        this.props.dispatch({
          type: "FORM_DETAILS",
          payload: {
            marriedStatus: this.state.marriedStatus,
            age: this.state.age
          }
        });
        this.props.navigation.navigate("DetailsScreen");
      }
    }
  };

  render() {
    return (
      <View style={styles.OuterContainer}>
        <HeaderComponent />
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Icon
              reverse
              name="user"
              type="simple-line-icon"
              style={styles.inputIcon}
              color="#517fa4"
              size={16}
            />
            <TextInput
              value={this.state.firstName}
              style={styles.inputs}
              placeholder="First name"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ firstName: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              reverse
              name="user"
              type="simple-line-icon"
              style={styles.inputIcon}
              color="#517fa4"
              size={16}
            />
            <TextInput
              value={this.state.lastName}
              style={styles.inputs}
              placeholder="Last name"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ lastName: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              reverse
              name="email-outline"
              type="material-community"
              color="gray"
              size={18}
              color="#517fa4"
            />
            <TextInput
              value={this.state.email}
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ email: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              reverse
              name="calendar"
              type="simple-line-icon"
              color="gray"
              size={16}
              color="#517fa4"
            />
            <TextInput
              value={this.state.age}
              style={styles.inputs}
              placeholder="Age"
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ age: text })}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.signupButton]}
            onPress={() => this.onClickListener()}
          >
            <Text style={styles.signUpText}>Verify</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  OuterContainer: {
    flex: 1,
    backgroundColor: "lightgray"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: width / 1.5,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 25,
    height: 25,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  signupButton: {
    backgroundColor: "#0966aa"
  },
  signUpText: {
    color: "white"
  }
});

function mapStateToProps(state) {
  return {
    emailIdValue: state.storeValue.emailId
  };
}

export default connect(mapStateToProps)(FormComponent);
