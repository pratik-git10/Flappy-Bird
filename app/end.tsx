import { router, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function EndScreen() {
  const { score } = useLocalSearchParams();

  return (
    <LinearGradient colors={["#ff9800", "#ff5722"]} style={styles.container}>
      <Text style={styles.heading}>Game Over</Text>
      <Text style={styles.score}>Score: {score}</Text>

      <TouchableOpacity
        style={styles.playAgain}
        onPress={() => router.push("/game")}>
        <Text style={styles.playAgainText}>Play Again</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: { fontSize: 40, color: "#fff", fontWeight: "bold" },
  score: { fontSize: 24, color: "#fff", marginVertical: 20 },
  playAgain: { backgroundColor: "#fff", padding: 12, borderRadius: 10 },
  playAgainText: { fontSize: 18, fontWeight: "bold", color: "#ff5722" },
});
