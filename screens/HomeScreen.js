import { StyleSheet, SafeAreaView, Text, Pressable, StatusBar, View } from "react-native";
import { Themes } from "../assets/Themes";
import Day from "../components/Day";
import Login from "../components/Login";

export default function HomeScreen({ navigation }) {
  let login = false;

  let contentDisplayed = null;
  if (login) {
    contentDisplayed = <Day date='3/11' description='BBQ' navigation={navigation}/>
  } else {
    contentDisplayed = <Login navigation={navigation}/>
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    color: "red",
  },
});
