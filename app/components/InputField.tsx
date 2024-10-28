import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

type Props = {};

const InputField = (props: Props) => {
  return (
    <View>
      <TextInput
        placeholder="Email Address"
        placeholderTextColor={Colors.gray}
        autoCapitalize="none"
        keyboardType="email-address"
        className="bg-white p-3 min-w-[350px] m-3 rounded-3xl"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={Colors.gray}
        secureTextEntry={true}
        className="bg-white p-3 min-w-[350px] m-3 rounded-3xl"
      />
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor={Colors.gray}
        secureTextEntry={true}
        className="bg-white p-3 min-w-[350px] m-3 rounded-3xl"
      />
      <TouchableOpacity>
        <Text className="text-white bg-blue-500 p-3 rounded-3xl m-3 text-center">
          Create an Account
        </Text>
      </TouchableOpacity>

      <Text className="text-center mt-10">
        Already have an Account?{" "}
        <Link href={"/signin"} className="text-blue-700">
          signin
        </Link>
      </Text>
    </View>
  );
};

export default InputField;
