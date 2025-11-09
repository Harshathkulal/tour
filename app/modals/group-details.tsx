import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";

export default function GroupDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ padding: 20 }}>
        <ThemedText type="title">Group Details</ThemedText>
        <ThemedText type="default">Group ID: {id}</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}
