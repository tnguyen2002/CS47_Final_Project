import { useEffect, useState } from "react";
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
import { supabase } from "../env";

const menu = [
  {
    date: "Monday",
    description: {
      lunch: "Chicken and rice",
      dinner: "salmon and seaweed",
    },
  },
  {
    date: "Tuesday",
    description: {
      lunch: "pad thai",
      dinner: "steak and potatoes",
    },
  },
];
export default function CalendarScreen({ navigation }) {
  // const [lunch, setLunch] = useState([]);
  // const [dinner, setDinner] = useState([]);
  // const getLunch = async () => {
  //   try {
  //     const { data, error } = await supabase.from("Lunch").select("*");
  //     console.log(data);
  //     if (data) setLunch(data);
  //     console.log("error", error);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getDinner = async () => {
  //   try {
  //     const { data, error } = await supabase.from("Dinner").select("*");
  //     console.log(data);
  //     if (data) setDinner(data);
  //     console.log("error", error);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // getLunch();
  // useEffect(() => {
  //   getLunch();
  //   getDinner();
  // });
  // console.log(lunch);
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
    backgroundColor: Themes.colors.greenBackground,
  },
  text: {
    color: "red",
  },
});
