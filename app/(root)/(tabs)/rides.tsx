import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFetch } from "@/lib/fetch";
import { useUser } from "@clerk/clerk-expo";
import RideCard from "@/components/RideCard";
import { Ride } from "@/types/type";
import { images } from "@/constants";

const Rides = () => {
  const { user } = useUser();
  const { data: recentRides, loading } = useFetch<Ride[]>(
    `/(api)/ride/${user?.id}`,
  );
  return (
    <SafeAreaView>
      <FlatList
        data={recentRides}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className=" flex-col items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  alt="No result"
                  className=" w-40 h-40"
                  resizeMode="contain"
                />
                <Text className="text-base">No Recent Rides Found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <Text className=" text-2xl font-JakartaBold my-5">All Rides</Text>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Rides;
