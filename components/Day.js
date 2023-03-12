import { Text, StyleSheet, View, Dimensions, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import { Themes } from "../assets/Themes";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Ionicons from "@expo/vector-icons/Ionicons";

const Day = ({
  date, // date from back end
  description, //description of the meal from back end
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <Text style={styles.dateText}>{date}</Text>
        <View style={styles.mealContainer}>
          <Text style={styles.mealText}>Lunch:</Text>
          <Text style={styles.signUpText}>Late Plate:</Text>
          <Checkbox />
          <Text style={styles.signUpText}>Guest:</Text>
          <Checkbox />
        </View>
        <View style={styles.descriptionBox}>
          <Text>{description.lunch}</Text>
        </View>
        <View style={styles.mealContainer}>
          <Text style={styles.mealText}>Dinner:</Text>
          <Text style={styles.signUpText}>Late Plate:</Text>
          <Checkbox />
          <Text style={styles.signUpText}>Guest:</Text>
          <Checkbox />
        </View>
        <View style={styles.descriptionBox}>
          <Text>{description.dinner}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: windowWidth,
    backgroundColor: "red",
  },
  dayContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: windowWidth,
    height: windowHeight * 0.3,
    backgroundColor: Themes.colors.white,
  },
  mealContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Themes.colors.lightGreen,
    // flexWrap: "wrap",
    // margin: windowHeight * 0.01,1
    width: windowWidth * 0.8,
    height: windowHeight * 0.05,
    borderRadius: 7.5,
  },
  descriptionBox: {
    width: windowWidth * 0.8,
    backgroundColor: Themes.colors.lightGreen,
  },
  dateText: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.05,
  },
  mealText: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.03,
  },
  signUpText: {
    fontSize: windowWidth * 0.03,
  },
});
export default Day;
