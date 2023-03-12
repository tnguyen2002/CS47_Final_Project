import { Image, Dimensions, TextInput, StyleSheet, SafeAreaView, Text, Pressable, StatusBar, View } from "react-native";
import { Themes } from "../assets/Themes";
import { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {
  const [dietRestrictions, setDietRestrictions] = useState('');

  return (
    <View style={styles.screenContainer}>
      <View>
        <Image style={styles.profilePic} source={require('../assets/steven-pic.jpeg')}/> 
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Name: Steven Trinh</Text>
          <Text style={styles.text}>ID: 06264266</Text>
          <Text style={styles.text}>Residence: Sigma Phi Epsilon</Text>
        </View>
        <TextInput
          value={dietRestrictions}
          onChangeText={(dietRestrictions) => setDietRestrictions(dietRestrictions)}
          placeholder="Enter any dietary restrictions here..."
          style={styles.textInput}
          multiline={true}
        />
      </View>
      <Pressable
          onPress={() => console.log(`Saved dietary restrictions: ${dietRestrictions}`)}
          style={styles.button}>
          <Text style={styles.buttonText}>SAVE CHANGES</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 32,
  },
  textInput: {
    width: width - 32,
    height: height * 0.2,
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 12,
  },
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightsteelblue",
  },
  infoContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "lightsteelblue",
  },
  textContainer: {
    paddingBottom: 8,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "lightsteelblue",
  },
  text: {
    color: "black",
    paddingBottom: 8,
    fontSize: 17,
  },
  button: {
    width: 150,
    height: 32,
    fontSize: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
