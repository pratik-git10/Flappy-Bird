import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.headingText}>FlappY</Text>
      <TouchableOpacity
        style={styles.playbtn}
        onPress={() => router.push("/game")}>
        <Text>Play</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  headingText: {
    color: "gray",
    fontSize: 40,
    fontWeight: "bold",
  },
  playbtn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 5,
  },
});
