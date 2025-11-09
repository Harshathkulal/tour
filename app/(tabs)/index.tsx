import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { Link } from "expo-router";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { homeStyles } from "@/styles/home.styles";
import { dummyGroups } from "@/constants/groups";
import GroupCard from "@/components/GroupCard";
import FloatingAddButton from "@/components/FloatingAddButton";
import type { Group } from "@/types/group";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={homeStyles.container}>
        <ThemedText type="title" style={homeStyles.heading}>
          Your Groups
        </ThemedText>

        <FlatList<Group>
          data={dummyGroups}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: "/modals/group-details",
                params: { id: item.id },
              }}
              asChild
            >
              <GroupCard {...item} />
            </Link>
          )}
        />

        <Link href="/add-group" asChild>
          <FloatingAddButton />
        </Link>
      </ThemedView>
    </SafeAreaView>
  );
};

export default HomeScreen;
