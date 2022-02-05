import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SvgProps } from "react-native-svg";
import { RectButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckbox?: boolean;
};
const Category = ({
  title,
  icon: Icon,
  checked = false,
  hasCheckbox = false,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.3 }]}
          colors={[
            checked ? theme.colors.secondary85 : theme.colors.secondary50,
            theme.colors.secondary40,
          ]}
        >
          {hasCheckbox && (
            <View style={checked ? styles.checked : styles.unchecked} />
          )}
          <Icon width={48} height={48} />

          <Text style={styles.title}> {title} </Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Category;
