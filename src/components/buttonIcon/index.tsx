import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};
export default function ButtonIcon({ title }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
