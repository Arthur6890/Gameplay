import React from "react";
import { Text, Image, View } from "react-native";
import { styles } from "./styles";
import IllustationImg from "../../assets/illustration.png";
import ButtonIcon from "../../components/buttonIcon";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation();

  // function handleSignIn() {
  // 	navigation.navigate()
  // }

  return (
    <View style={styles.container}>
      <Image
        source={IllustationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}e organize suas {`\n`}
          jogatinas.
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          title="Entrar com Discord"
          onPress={() => navigation.navigate("Stack", { screen: "Home" })}
        />
      </View>
    </View>
  );
}
