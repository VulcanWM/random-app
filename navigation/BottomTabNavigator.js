// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import RollDiceScreen from "../screens/RollDiceScreen";
import CoinFlipScreen from "../screens/CoinFlipScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="RollDice"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="RollDice"
        component={RollDiceNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CoinFlip"
        component={CoinFlipNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const RollDiceStack = createStackNavigator();

function RollDiceNavigator() {
  return (
    <RollDiceStack.Navigator>
      <RollDiceStack.Screen
        name="RollDiceScreen"
        component={RollDiceScreen}
        options={{ headerTitle: "Roll Dice" }}
      />
    </RollDiceStack.Navigator>
  );
}

const CoinFlipStack = createStackNavigator();

function CoinFlipNavigator() {
  return (
    <CoinFlipStack.Navigator>
      <CoinFlipStack.Screen
        name="CoinFlipScreen"
        component={CoinFlipScreen}
        options={{ headerTitle: "Coin Flip" }}
      />
    </CoinFlipStack.Navigator>
  );
}
