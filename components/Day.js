import { Text, StyleSheet, View, Dimensions, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import { Themes } from "../assets/Themes";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

const Day = ({
  date, // date from back end
  description, //description of the meal from back end
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.mealContainer}>
        <View style={styles.mealHeader}>
          <Text style={styles.mealText}>Lunch:</Text>
          <Text style={styles.signUpText}>Late Plate:</Text>
          <Checkbox />
          <Text style={styles.signUpText}>Guest:</Text>
          <Checkbox />
        </View>
        <View style={styles.descriptionBox}>
          <Text
            style={styles.descriptionText}
          >{`\u2022 ${description.lunch}`}</Text>
          <Text
            style={styles.descriptionText}
          >{`\u2022 ${description.lunch}`}</Text>
          <Text
            style={styles.descriptionText}
          >{`\u2022 ${description.lunch}`}</Text>
          <Text
            style={styles.descriptionText}
          >{`\u2022 ${description.lunch}`}</Text>
          <Text
            style={styles.descriptionText}
          >{`\u2022 ${description.lunch}`}</Text>
        </View>
      </View>
      <View style={styles.mealContainer}>
        <View style={styles.mealHeader}>
          <Text style={styles.mealText}>Dinner:</Text>
          <Text style={styles.signUpText}>Late Plate:</Text>
          <Checkbox />
          <Text style={styles.signUpText}>Guest:</Text>
          <Checkbox />
        </View>
        <View style={styles.descriptionBox}>
          <Text
            style={styles.descriptionText}
          >{`\u2022 ${description.dinner}`}</Text>
          <Text
            style={styles.descriptionText}
          >{`\u2022 ${description.dinner}`}</Text>
          <Text
            style={styles.descriptionText}
          >{`\u2022 ${description.dinner}`}</Text>
          <Text
            style={styles.descriptionText}
          >{`\u2022 ${description.dinner}`}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.greenOne,
    width: windowWidth * 0.9,
    height: "auto",
    borderRadius: 20,
    // borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    // borderRadius: 10,
    backgroundColor: Themes.colors.red,
  },
  mealContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  mealHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Themes.colors.blue,
    width: "100%",
  },
  descriptionBox: {
    display: "flex",
    width: windowWidth * 0.8,
    borderRadius: 7.5,
  },
  dateText: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.04,
    fontFamily: "Helvetica",
  },
  mealText: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.03,
    fontFamily: "Helvetica",
  },
  signUpText: {
    fontSize: windowWidth * 0.03,
    fontFamily: "Helvetica",
  },
  descriptionText: {
    fontSize: windowWidth * 0.03,
    fontFamily: "Helvetica",
    // padding: 1,
  },
});
export default Day;
