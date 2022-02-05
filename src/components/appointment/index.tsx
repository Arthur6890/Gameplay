import React from "react";
import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import GuildIcon from "../guildIcon";
import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { theme } from "../../global/styles/theme";
import Player from "../../assets/player.svg";
import Calendar from "../../assets/calendar.svg";

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = TouchableOpacityProps & {
  data: AppointmentProps;
};
const Appointment = ({ data, ...rest }: Props) => {
  const [category] = categories.filter((item) => item.id === data.category);

  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}> {category.title} </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <Calendar />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <Player
                fill={data.guild.owner ? theme.colors.primary : theme.colors.on}
              />
              <Text
                style={[
                  styles.player,
                  {
                    color: data.guild.owner
                      ? theme.colors.primary
                      : theme.colors.on,
                  },
                ]}
              >
                {data.guild.owner ? "Anfitrião" : "Visitante"}{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Appointment;
