import { StyleSheet } from "react-native";

import { Text, View, Pressable } from "../components/Themed";
import { useState } from "react"

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
      <Text style={styles.title}>Flip a Coin</Text>
      <Text>{'\n'}</Text>
      <Pressable lightColor="black" darkColor="white" style={styles.button} onPress={reflip}>
        <Text lightColor="white" darkColor="black" style={styles.text}>Reflip coin</Text>
      </Pressable>
      <Text>{'\n'}</Text>
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
    fontSize: 40,
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
