import { Pressable, Text, TextInput, View } from "react-native";
import "@/global.css";
import { Feather } from "@expo/vector-icons";
import dayjs from "dayjs";
import DatePicker from "react-native-date-picker";
import { useState } from "react";

export default function SearchForm() {
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [direction, setDirection] = useState(0);
  const [open, setOpen] = useState(false);

  const depart = dayjs(departDate).format("D/M/YY");
  const ret =
    dayjs(returnDate).format("D/M/YY") > depart
      ? dayjs(returnDate).format("D/M/YY")
      : depart;

  return (
    <View className=" bg-blue-accent px-3 rounded-xl gap-4 p-5">
      <Text className=" color-white font-bold pb-4 pt-7 text-lg self-center">
        Find the best prices for your next trip!
      </Text>
      <TextInput
        placeholderTextColor={"#69686D"}
        className="rounded-md border border-gray-200 p-3"
        placeholder="go from"
      />
      <TextInput
        placeholderTextColor={"#69686D"}
        placeholder="go to"
        className="rounded-md border border-gray-200 p-3"
      />
      <View className=" flex-row gap-4">
        <Pressable
          className=" flex-1 flex-row items-center justify-between rounded-md border border-gray-200 pr-3"
          onPress={() => {
            setDirection(0);
            setOpen(true);
          }}
        >
          <View>
            <Text className=" px-3 p-1 color-gray-accent">depart</Text>
            <Text className=" px-3 p-2 color-white">{depart}</Text>
          </View>
          <Feather name="chevron-down" size={24} color="gray" />
        </Pressable>
        <Pressable
          className=" flex-1 flex-row items-center justify-between rounded-md border border-gray-200 pr-3"
          onPress={() => {
            setDirection(1);
            setOpen(true);
          }}
        >
          <View>
            <Text className="px-3 p-1 color-gray-accent">return</Text>
            <Text className="px-3 p-2 color-white">{ret}</Text>
          </View>
          <Feather name="chevron-down" size={24} color="gray" />
        </Pressable>
        <Pressable className=" bg-gold-primary items-center flex-1 flex-row justify-center rounded-md  pr-3">
          <Text className=" text-xl font-bold">Search</Text>
        </Pressable>
      </View>

      <DatePicker
        modal
        open={open}
        date={departDate}
        theme="dark"
        mode="date"
        minimumDate={new Date()}
        minuteInterval={15}
        onConfirm={(date) => {
          direction ? setReturnDate(date) : setDepartDate(date);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
}
