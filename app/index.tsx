import {
  ImageBackground,
  // StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import "./../global.css";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require("@/assets/images/background.webp")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View className="border w-full h-full mb-20">
          <LinearGradient
            colors={["transparent", "rgba(255,255,255,0.9)"]}
            className="flex-1 absolute inset-x-0 bottom-0"
          >
            <View className="mx-[100px] mb-[30px]">
              <Text className="text-black mb-[30px] text-center border rounded-3xl p-2 text-xl">
                <AntDesign name="home" size={24} color="black" /> Welcome Screen
              </Text>
              <Link href={"/signin"} asChild>
                <TouchableOpacity>
                  <Text className="text-red-600 mb-[10px] border p-2 text-center rounded-3xl">
                    <AntDesign name="login" size={24} color="black" /> Go to
                    SignIn Screen
                  </Text>
                </TouchableOpacity>
              </Link>
              <Link href={"/signup"} asChild>
                <TouchableOpacity>
                  <Text className="border rounded-3xl p-2 text-center">
                    <FontAwesome
                      name="sign-in"
                      size={24}
                      color="black"
                      className="mx-2"
                    />{" "}
                    Go to SignUp Screen
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
