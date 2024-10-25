import { Text, View } from "react-native";
import MapView from "react-native-maps";
const Map = () => {
  // const region = {}

  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      //   initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      <Text>Map</Text>
    </MapView>
  );
};

export default Map;
