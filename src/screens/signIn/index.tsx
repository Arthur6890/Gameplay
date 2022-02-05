import React from "react";
import IllustationImg from "../../assets/illustration.png";
import ButtonIcon from "../../components/buttonIcon";
import DiscordImg from "../../assets/discord.png";
import { Background } from "../../../src/components/background";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { styles, ButtonStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../routes/auth.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type signInScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  "SignIn"
>;

export function SignIn() {
  const navigation = useNavigation<signInScreenProp>();

  function handleSignIn() {
    navigation.navigate("Home");
  }
  return (
    <Background>
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

          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
