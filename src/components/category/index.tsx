import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import { styles } from "./style";

type Props = {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Category({ name, icon }: Props) {
  return (
    <Pressable style={styles.container}>
      <MaterialIcons name={icon} size={16} color={colors.gray[400]} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}
