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

//example of the data, we will pull this from the backend

const PlateList = ({ menu }) => {
  return (
    <View styles={styles.container}>
      <View style={styles.topBar}>
        <Image
          style={styles.latePlateLogo}
          source={require("../assets/lateplate-logo.png")}
        />
        <Text style={styles.latePlateText}>Late Plate</Text>
      </View>
      <FlatList
        data={menu}
        renderItem={({ item, index }) => (
          <Day date={item.date} description={item.description} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.headerGreen,
    height: windowHeight * 0.075,
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
export default PlateList;
