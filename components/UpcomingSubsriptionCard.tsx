import { View, Text, Image } from "react-native";
import React from "react";
import { formatCurrency } from "@/lib/utils";

const UpcomingSubsriptionCard = ({
  data: { name, price, daysLeft, icon, currency },
}: UpcomingSubscription) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View>
          <Text className="upcoming-price">
            {formatCurrency(price, currency)}
          </Text>
          <Text className="upcoming-meta">{daysLeft}</Text>
        </View>
      </View>
    </View>
  );
};

export default UpcomingSubsriptionCard;
