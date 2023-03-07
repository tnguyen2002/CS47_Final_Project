import {
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  StatusBar,
  View,
} from "react-native";
import { Themes } from "../assets/Themes";
import PlateList from "../components/PlateList";

const menu = [
  {
    date: "2023-03-01",
    description: {
      lunch: "Chicken and rice",
      dinner: "salmon and seaweed",
    },
  },
  {
    date: "2023-03-02",
    description: {
      lunch: "pad thai",
      dinner: "steak and potatoes",
    },
  },
];
export default function CalendarScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <PlateList menu={menu} />
    </SafeAreaView>
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
