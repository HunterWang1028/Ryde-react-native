import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButtom from "@/components/CustomButtom";
import { Link } from "expo-router";
import Oauth from "@/components/Oauth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your account
          </Text>
        </View>
        <View className="p-5 ">
          <InputField
            label="Name"
            placeholderTextColor={"#BEBEBE"}
            placeholder="Enter Your Name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholderTextColor={"#BEBEBE"}
            placeholder="Enter email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholderTextColor={"#BEBEBE"}
            placeholder="Enter Your Password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButtom
            title="Sign Up"
            onPress={onSignUpPress}
            className=" mt-6"
          />

          <Oauth />

          <Link
            href={"/(auth)/sign-in"}
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Alreadly have a account? </Text>
            <Text className="text-primary-500">Log in</Text>
          </Link>
        </View>

        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignUp;
