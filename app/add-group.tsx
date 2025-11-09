import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";

export default function AddGroup() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ padding: 20 }}>
        <ThemedText type="title">Add New Group</ThemedText>
        <ThemedText type="default">Coming soon...</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}
