import { SignedIn, useUser } from "@clerk/clerk-expo";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}
