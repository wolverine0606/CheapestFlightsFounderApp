import FlightCard from "@/components/FlightCard";
import SearchForm from "@/components/SearchForm";
import { FlightDetails } from "@/types/FlightDetails";
import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const data: FlightDetails[] = require("@/assets/data.json");

export default function HomeScreen() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView className="flex-1 gap-4">
      <SearchForm />
      <FlatList
        data={data}
        renderItem={({ item }) => <FlightCard flight={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: tabBarHeight - 30 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
