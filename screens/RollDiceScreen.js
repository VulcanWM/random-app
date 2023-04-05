import { StyleSheet } from "react-native";

import { Text, View, Pressable } from "../components/Themed";
import { useState } from "react"

export default function TabOneScreen() {
  const first_random_number = Math.floor(Math.random() * 6) + 1;
  const [randomNumber, setRandomNumber] = useState(first_random_number)
  function reroll(){
    var dice_roll = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(dice_roll)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roll a Dice</Text>
      <Text>{'\n'}</Text>
      <Pressable lightColor="black" darkColor="white" style={styles.button} onPress={reroll}>
        <Text lightColor="white" darkColor="black" style={styles.text}>Reroll dice</Text>
      </Pressable>
      <Text>{'\n'}</Text>
      <View style={styles.square}>
        <Text style={styles.diceNumber}>{randomNumber}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  square: {
    height: '50%',
    backgroundColor: 'skyblue',
    aspectRatio: 1,
    borderRadius: '20%',
    alignItems: "center",
    justifyContent: "center",
  },
  diceNumber: {
    fontSize: 100,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
