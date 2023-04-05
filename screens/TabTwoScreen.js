import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
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
      <Text>The coil flipped {randomSide}</Text>
      <Button
        title="Reflip coin"
        onPress={reflip}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
