import { Text, StyleSheet, View, Dimensions, Pressable } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Themes } from "../assets/Themes";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Ionicons from "@expo/vector-icons/Ionicons";

const Day = ({
  date, // date from back end
  description, //description of the meal from back end
}) => {
  return (
    <View style={styles.container}>
      <Text>{date}</Text>
      <View>
        <Text>Lunch:</Text>
        {/* <CheckBox /> */}
        <Text>Late Plate</Text>
        {/* <CheckBox /> */}
        <Text>Guest</Text>
      </View>
      {/* lunch description */}
      <Text>{description.lunch}</Text>
      <View>
        <Text>Dinner:</Text>
        {/* <CheckBox /> */}
        <Text>Late Plate</Text>
        {/* <CheckBox /> */}
        <Text>Guest</Text>
      </View>
      {/* Dinner description */}
      <Text>{description.dinner}</Text>
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
});
export default Day;
