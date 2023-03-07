import {
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  StatusBar,
  View,
} from "react-native";
import { Themes } from "../assets/Themes";
export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Profile Screen!</Text>
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
