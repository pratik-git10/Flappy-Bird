import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.headingText}>FlappY</Text>
      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/game")}>
        <Text>Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
  },
  headingText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
