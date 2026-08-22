import { View, Text, Image } from "react-native";
import React from "react";
import { formatCurrency } from "@/lib/utils";

const UpcomingSubsriptionCard = ({
  name,
  price,
  daysLeft,
  icon,
  currency,
}: UpcomingSubscription) => {
  return (
    <View className="mr-4 w-44 rounded-2xl border border-black/10 bg-background p-4">
      <View className="flex-row items-center gap-3">
        <Image source={icon} className="size-14" />
        <View>
          <Text className="text-lg font-sans-bold text-primary">
            {formatCurrency(price, currency)}
          </Text>
          <Text
            className="text-sm font-sans-semibold text-muted-foreground"
            numberOfLines={1}
          >
            {daysLeft > 1 ? `${daysLeft} days left` : "Last day"}
          </Text>
        </View>
      </View>

      <Text numberOfLines={1}>{name}</Text>
    </View>
  );
};

export default UpcomingSubsriptionCard;
