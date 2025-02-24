import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Logo with adjusted size and spacing */}
      <Image
        source={require("@/assets/images/cropped-logo_flappy.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Heading */}
      <Text style={styles.headingText}>Flappy</Text>

      {/* Styled Play Button */}
      <TouchableOpacity
        style={styles.playBtn}
        onPress={() => router.push("/game")}>
        <LinearGradient
          colors={["#ff9800", "#ff5722"]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <Text style={styles.playBtnText}>Play</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light background
  },
  logo: {
    width: 120, // Adjusted size
    height: 120,
    marginBottom: 20,
    borderRadius: 20,
  },
  headingText: {
    color: "#333",
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 30,
  },
  playBtn: {
    borderRadius: 25,
    overflow: "hidden",
    elevation: 5, // Shadow effect for Android
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
  },
  playBtnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
