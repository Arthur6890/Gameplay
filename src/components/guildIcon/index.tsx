import { Image, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

const uri =
  "https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg";
const GuildIcon = () => {
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
};

export default GuildIcon;
