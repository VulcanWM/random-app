import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { useState } from "react"
import {Button} from 'react-native';

export default function TabOneScreen() {
  const first_random_number = Math.floor(Math.random() * 6) + 1;
  const [randomNumber, setRandomNumber] = useState(first_random_number)
  function reroll(){
    var dice_roll = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(dice_roll)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roll Dice</Text>
      <Button
        title="Reroll dice"
        onPress={reroll}
      />
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
    fontSize: 20,
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
  }
});
