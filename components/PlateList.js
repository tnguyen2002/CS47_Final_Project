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
        contentContainerStyle={styles.flatListContainer}
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
    justifyContent: "space-between",
  },
  // flatListContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignContent: "center",
  //   backgroundColor: "red",
  // },
});
export default PlateList;
