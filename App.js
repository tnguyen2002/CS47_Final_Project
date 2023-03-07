import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CalendarScreen from "./screens/CalendarScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // tabBarOptions={{
        //   labelStyle: { fontSize: 12, fontFamily: "Avenir", marginBottom: 8 },
        // }}
        screenOptions={({ route }) => ({
          headerShown: false,
          // tabBarStyle: { height: 60 },
          // Todo Change the icons of the tab bar}
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Calendar") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Profile") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
            }
            return <Ionicons name={iconName} size={32} color="navy" />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightsteelblue",
  },
  screenText: {
    fontSize: 32,
    fontFamily: "Avenir",
    color: "white",
    fontWeight: "bold",
  },
});
