import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";
import type { Group } from "@/types/group";

interface GroupCardProps extends Group {
  onPress?: () => void;
}

const GroupCard: React.FC<GroupCardProps> = ({ name, members, balance, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <ThemedText type="defaultSemiBold">{name}</ThemedText>
        <ThemedText type="default" style={styles.subtitle}>
          {members} members
        </ThemedText>
      </View>
      <ThemedText
        type="defaultSemiBold"
        style={[styles.balance, { color: balance >= 0 ? "#16A34A" : "#DC2626" }]}
      >
        ₹{balance}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default GroupCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 14,
  },
  balance: {
    fontSize: 16,
  },
});
