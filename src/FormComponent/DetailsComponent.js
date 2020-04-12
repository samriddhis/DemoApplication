import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
const { height, width } = Dimensions.get("window");
import { connect } from "react-redux";
import HeaderComponent from "./HeaderComponent";
import ImagePicker from "react-native-image-picker";
import { Icon } from "react-native-elements";

const options = {
  title: "Select Avatar",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class DetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marriedStatus: props.formDetails.marriedStatus,
      age: props.formDetails.age,
      spouseName: "",
      childCount: "",
      mobileNumber: "",
      address: "",
      city:"",
      imageUrl: "http://getdrawings.com/free-icon/blank-avatar-icon-75.png"
    };
  }

  onSubmitListener = () => {
    console.log("success");
  };

  async _pressPictureUpload() {
    await ImagePicker.showImagePicker(options, response => {
      // console.log("Response = ", response);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        this.setState({
          imageUrl: response.uri
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.OuterContainer}>
        <HeaderComponent />
        <View style={styles.container}>
          <View style={styles.UpperViewContainer}>
            <View style={styles.IconRoundStyle}>
              <Image
                style={{ width: 80, height: 80, borderRadius: 40 }}
                source={{
                  uri: this.state.imageUrl
                }}
              />
            </View>
            <TouchableOpacity style={styles.PencilOuterStyle}>
              <View style={styles.PencilInnerStyle}>
                <Icon
                  name={"pencil"}
                  type={"evilicon"}
                  size={18}
                  style={styles.PencilIconStyle}
                  underlayColor="transparent"
                  onPress={() => this._pressPictureUpload()}
                />
              </View>
            </TouchableOpacity>
          </View>
          {this.state.marriedStatus ? (
            <View>
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
                  placeholder="Spouse name"
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ firstName: text })}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon
                  reverse
                  name="child"
                  type="font-awesome"
                  style={styles.inputIcon}
                  color="#517fa4"
                  size={16}
                />
                <TextInput
                  value={this.state.firstName}
                  style={styles.inputs}
                  placeholder="Children Count"
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ childCount: text })}
                />
              </View>
            </View>
          ) : null}
          <View style={styles.inputContainer}>
          <Icon
              reverse
              name="mobile-phone"
              type="font-awesome"
              style={styles.inputIcon}
              color="#517fa4"
              size={16}
            />
            <TextInput
              value={this.state.firstName}
              style={styles.inputs}
              placeholder="Mobile Number"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ mobileNumber: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              reverse
              name="home"
              type="font-awesome"
              style={styles.inputIcon}
              color="#517fa4"
              size={16}
            />
            <TextInput
              value={this.state.lastName}
              style={styles.inputs}
              placeholder="Address"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ address: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              reverse
              name="city"
              type="material-community"
              color="gray"
              size={18}
              color="#517fa4"
            />
            <TextInput
              value={this.state.email}
              style={styles.inputs}
              placeholder="City"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ city: text })}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.signupButton]}
            onPress={() => this.onSubmitListener()}
          >
            <Text style={styles.signUpText}>Submit</Text>
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
  UpperViewContainer: {
    height: 140,
    justifyContent: "center",
    alignItems: "center"
  },
  IconRoundStyle: {
    width: 74,
    height: 74,
    borderRadius: 74,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  PencilOuterStyle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: height / 50
  },
  PencilInnerStyle: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: "#40a0c0" //"#3993D5"
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
    formDetails: state.storeValue.formDetails
  };
}

export default connect(mapStateToProps)(DetailsComponent);
