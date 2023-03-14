import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Themes } from "../assets/Themes";
import Day from "../components/Day";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = ({}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.latePlateLogo}
        source={require("../assets/lateplate-logo.png")}
      />
      <Text style={styles.latePlateText}>Late Plate</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.headerGreen,
    width: windowWidth,
  },
  latePlateLogo: {
    aspectRatio: 1 / 1,
    height: windowHeight * 0.05,
    width: undefined,
  },
  latePlateText: {
    fontWeight: "bold",
    fontSize: windowHeight * 0.04,
    color: Themes.colors.white,
  },
});
