import { FlightDetails } from "@/types/FlightDetails";
import { View, Text } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function FlightCard({ flight }: { flight: FlightDetails }) {
  console.log(flight, "flight");
  const textStyle = "color-white text-lg ";
  const airlineStyle = "color-gray-accent text-lg ml-auto max-w-fit shrink ";

  return (
    <View className=" rounded-md bg-blue-accent border-green-primary border my-1 flex-1 flex-row">
      {/* flight time and airline */}
      <View style={{ flex: 3 / 4 }}>
        <View className="pl-3 pt-2">
          <Text className={` color-gray-accent `}>Outbound Flight</Text>
          <View className=" flex-row items-center pb-5 gap-5">
            <Text className={`${textStyle}`}>{flight.to.departAt}</Text>
            <FontAwesome6 name="plane-departure" color="white" />
            <Text className={`${textStyle}`}>{flight.to.arriveAt}</Text>
            <View className=" flex-1">
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                className={`${airlineStyle}`}
              >
                {flight.to.airline}
              </Text>
            </View>
          </View>
        </View>
        <View className="pl-3">
          <Text className={` color-gray-accent`}>Return Flight</Text>
          <View className=" flex-row items-center pb-3 gap-5">
            <Text className={`${textStyle}`}>{flight.from.departAt}</Text>
            <FontAwesome6 name="plane-arrival" color="white" />
            <Text className={`${textStyle}`}>{flight.from.arriveAt}</Text>
            <View className=" flex-1">
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                className={`${airlineStyle}`}
              >
                {flight.from.airline}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Flight price */}
      <View className="border border-l-green-primary ml-2 h-[80%] self-center "></View>
      <Text className=" color-white font-bold text-lg self-center flex-1 max-w-24 text-center">
        {flight.price}
      </Text>
    </View>
  );
}
