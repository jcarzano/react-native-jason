import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ListHeading = ({ title }: ListHeadingProps) => {
  return (
    <View className="my-5 flex-row items-center justify-between">
      <Text className="list-title">{title}</Text>
      <TouchableOpacity className="text-2xl font-sans-bold text-primary">
        <Text className="list-action-text">View All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeading;
