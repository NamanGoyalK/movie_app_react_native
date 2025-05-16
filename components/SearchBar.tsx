import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

type Props = {
  onPress?: () => void;
  placeholder: string;
};

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        tintColor="#A8B5DB"
        resize-mode="contain"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#A8B5DB"}
        className="flex-1 text-white ml-5"
      />
    </View>
  );
};

export default SearchBar;
