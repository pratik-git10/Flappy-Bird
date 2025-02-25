import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("@/assets/images/cropped-logo_flappy.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Heading */}
      <Text style={styles.headingText}>Flappy</Text>

      {/* Play Button */}
      <TouchableOpacity
        style={styles.playBtn}
        onPress={() => router.push("/game")}>
        <LinearGradient
          colors={["#ff9800", "#ff5722"]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <Ionicons name="play" size={24} color="#fff" style={styles.icon} />
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
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 120,
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
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    overflow: "hidden",
    elevation: 5,
  },
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  playBtnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
});
