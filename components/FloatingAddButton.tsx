import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FloatingAddButtonProps {
  onPress?: () => void;
}

const FloatingAddButton: React.FC<FloatingAddButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Ionicons name="add-circle" size={52} color="#4F46E5" />
    </TouchableOpacity>
  );
};

export default FloatingAddButton;

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    bottom: 24,
    right: 24,
  },
});
