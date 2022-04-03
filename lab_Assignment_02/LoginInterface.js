import React, { PureComponent } from "react";

import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-web";
import flex from "../App";

export default function logo() {
  return (
    <View style={styles.parentcont}>
      <Text style={styles.welcome}>Welcome Back</Text>
      <Text style={styles.contin}>Sign in to continue</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="       Email ID"
          placeholderTextColor="black"
          autoCapitalize="none"
        ></TextInput>
        <Text style={styles.spce}></Text>
        <TextInput
          style={styles.input1}
          placeholder="       Password"
          placeholderTextColor="black"
          autoCapitalize="none"
        ></TextInput>
        <Text style={styles.test_forget}>Forget Password ?</Text>
      </View>
      <View>
        <Text style={styles.Button}>LOGIN</Text>
        <Text style={styles.Button_fac}>Connect with Facebook</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text_noacc}>I'm a new user.</Text>
        <Text style={styles.text_reg}> Sign Up</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parentcont: {
    height: 650,

    width: 320,
    alignItems: "center",

    backgroundColor: "#f8f8ff",
  },
  welcome: {
    marginTop: 80,
    alignContent: "center",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  contin: {
    alignContent: "center",
    fontSize: 15,
    marginTop: 10,

    textAlign: "center",
    color: "#000000 ",
  },
  text: {
    alignContent: "center",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  spce: {
    marginTop: 20,
  },

  Button: {
    fontSize: 11,
    width: 250,
    marginTop: 60,
    color: "white",
    borderRadius: 10,
    backgroundColor: "#ff007f",
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "center",
    lineHeight: 35,
  },
  Button_fac: {
    fontSize: 11,
    width: 250,
    marginTop: 10,
    color: "#00A3F0",
    borderRadius: 10,
    backgroundColor: "#deeff5",
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "center",
    lineHeight: 35,
  },

  text_login: {
    fontSize: 19,
    marginRight: 25,
    color: "#f8f8ff",
    textAlign: "right",
  },

  text_noacc: {
    fontSize: 10,
    color: "black",
    marginTop: 100,
    fontWeight: "bold",
  },
  text_reg: {
    fontSize: 10,
    color: "#ff007f",
    marginTop: 100,
    fontWeight: "bold",
  },
  input: {
    width: 250,
    marginTop: 80,
    height: 35,
    fontSize: 12,
    borderColor: "#ff007f",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    fontWeight: "bold",
  },
  input1: {
    width: 250,
    height: 35,
    fontSize: 12,
    borderColor: "#ff007f",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    fontWeight: "bold",
  },
  test_forget: {
    fontSize: 10,
    color: "black",
    textAlign: "right",
    marginTop: 10,
  },
});
