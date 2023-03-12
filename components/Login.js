import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { Themes } from "../assets/Themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder="Username"
        style={styles.textInput}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        style={styles.textInput}
      />
      <Pressable
        onPress={() => {
          navigation.navigate("Home", { navigation: navigation });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Themes.colors.greenBackground,
    width: windowWidth,
  },
  textInput: {
    width: 280,
    height: 32,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
  },
  button: {
    width: 150,
    height: 32,
    fontSize: 20,
    margin: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
