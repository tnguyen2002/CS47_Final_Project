import {
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  StatusBar,
  View,
} from "react-native";
import { Themes } from "../assets/Themes";
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      {/* TODO: Your code goes here */}
      <Text style={styles.text}>Home Screen!</Text>
      {/* <Text style={{ color: "white" }}>Welcome to Assignment 3 - Spotify!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightsteelblue",
  },
  text: {
    color: "red",
  },
});
