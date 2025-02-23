import { Ionicons } from "@expo/vector-icons";
import { Canvas, useImage, Image } from "@shopify/react-native-skia";
import { useEffect } from "react";
import { TouchableOpacity, useWindowDimensions, View } from "react-native";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";

const App = () => {
  const { width, height } = useWindowDimensions();

  const bg = useImage(require("@/assets/images/background-day.png"));
  const bird = useImage(require("@/assets/images/yellowbird-upflap.png"));
  const pipeBottom = useImage(require("@/assets/images/pipe-green.png"));
  const pipeUp = useImage(require("@/assets/images/pipe-green-top.png"));
  const base = useImage(require("@/assets/images/base.png"));

  const x = useSharedValue(width);
  useEffect(() => {
    x.value = withTiming(-100, { duration: 3000, easing: Easing.linear });
  }, []);

  const pipeOffset = 0;

  return (
    <Canvas style={{ width, height }}>
      <Image image={bg} width={width} height={height} fit={"cover"} />

      <Image
        image={pipeUp}
        y={pipeOffset - 320}
        x={x}
        width={104}
        height={640}
      />
      <Image
        image={pipeBottom}
        y={height - 380 + pipeOffset}
        x={x}
        width={104}
        height={640}
      />

      <Image
        image={bird}
        width={50}
        height={50}
        y={height / 2 - 32}
        x={width / 6}
      />
    </Canvas>
  );
};
export default App;
