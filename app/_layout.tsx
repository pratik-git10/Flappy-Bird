import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          statusBarHidden: true,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "Login",
        }}
      />
      <Stack.Screen
        name="game"
        options={{
          // headerShown: false,
          statusBarHidden: true,
        }}
      />
    </Stack>
  );
}
