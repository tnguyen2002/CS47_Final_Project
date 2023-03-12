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
        <View style={styles.mealContainer}>
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
    alignItems: "center",
    width: windowWidth,
  },
  dayContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: windowWidth,
    height: windowHeight * 0.3,
    padding: 10,
  },
  mealContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Themes.colors.greenOne,
    aspectRatio: 10 / 1,
    width: windowWidth * 0.8,
    height: "auto",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  descriptionBox: {
    display: "flex",
    // flex: 1,s
    width: windowWidth * 0.8,
    // backgroundColor: Themes.colors.greenOne,
    borderRadius: 7.5,
  },
  dateText: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.05,
    textDecorationLine: "underline",
  },
  mealText: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.05,
  },
  signUpText: {
    fontSize: windowWidth * 0.03,
  },
  descriptionText: {
    fontSize: windowWidth * 0.03,
    // padding: 1,
  },
});
export default Day;
