import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { formatCurrency } from "@/lib/utils";
import clsx from "clsx";

const SubscriptionCard = ({
  name,
  price,
  currency,
  icon,
  billing,
  color,
  category,
  plan,
  renewalDate,
  onPress,
  expanded,
  paymentMethod,
}: SubscriptionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={clsx(
        "rounded-2xl border border-border p-4",
        expanded ? "sub-card-expanded" : "bg-card",
      )}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      <View className="flex-row items-center py-2">
        <View className="min-w-0 flex-1 flex-row items-center gap-3">
          <Image source={icon} className="sub-icon" />
          <View className="min-w-0 flex-1">
            <Text className="sub-title" numberOfLines={1}>
              {name}
            </Text>
            <Text className="sub-meta" numberOfLines={1} ellipsizeMode="tail">
              {category?.trim() || plan?.trim() || renewalDate}
            </Text>
          </View>
        </View>

        <View className="sub-price-box">
          <Text className="sub-price">{formatCurrency(price, currency)}</Text>
          <Text className="sub-billing">{billing}</Text>
        </View>
      </View>

      {expanded && (
        <View className="sub-body">
          <View className="sub-details">
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {paymentMethod?.trim()}
                </Text>
              </View>
            </View>

            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text
                  className="sub-value"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {paymentMethod?.trim()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default SubscriptionCard;
