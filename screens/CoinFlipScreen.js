import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { useState } from "react"
import {Button} from "react-native"

export default function TabTwoScreen() {
  const sides = ['heads', 'tails']
  const first_random_side = sides[Math.floor(Math.random()*sides.length)];
  const [randomSide, setRandomSide] = useState(first_random_side)
  function reflip(){
    var coin_flip = sides[Math.floor(Math.random()*sides.length)];
    setRandomSide(coin_flip)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flip Coin</Text>
      <Button
        title="Reflip coin"
        onPress={reflip}
      />
      <View style={styles.circle}>
        <Text style={styles.coinText}>{randomSide}</Text>
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
  circle: {
    height: '50%',
    backgroundColor: 'skyblue',
    aspectRatio: 1,
    borderRadius: '50%',
    alignItems: "center",
    justifyContent: "center",
  },
  coinText: {
    fontSize: 75,
  }
});
