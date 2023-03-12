import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import { Themes } from "../assets/Themes";
import Day from "../components/Day";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//example of the data, we will pull this from the backend

const PlateList = ({ menu }) => {
  return (
    <View styles={styles.container}>
      <Header />
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
