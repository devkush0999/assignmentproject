import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { Colors } from "@/constants/Colors";

type Props = {};

const SignInScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>SignIn Screen</Text>
      {/* <Link href={"/(tabs)"} asChild> */}
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

      <TouchableOpacity
        onPress={() => {
          router.dismissAll();
          router.push("/(tabs)");
        }}
      >
        <Text className="text-white bg-[#6C5DD3] p-3 rounded-3xl m-3 text-center min-w-[350px]">
          Go to App Home Screen
        </Text>
      </TouchableOpacity>
      {/* </Link> */}
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
