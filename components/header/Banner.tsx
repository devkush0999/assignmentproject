import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import DATA from "./DATA";
import "react-native-gesture-handler";
import { Link } from "expo-router";

export default function Banner() {
  const addbtn = () => {
    console.log("add new blog");
  };
  const Preview = () => {
    console.log("Preview");
  };

  return (
    <View className=" mb-10">
      <View className="flex-row justify-between gap-3 mx-2">
        <Text>Blog </Text>
        <Link href={"/addBlog"} asChild>
          <Text className="ml-auto px-4 py-3 text-xs bg-white rounded-lg text-[#6C5DD3]">
            Add new
          </Text>
        </Link>
        <TouchableOpacity onPress={Preview}>
          <Text className="px-4 py-2 rounded-xl bg-[#6C5DD3] text-white text-sm ">
            Preview{" "}
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View className=' justify-between flex-row  flex-wrap w-full gap-3'> */}
      <View className="w-[380px] justify-between flex-row flex-wrap ml-3 my-5">
        {DATA.map((item, index) => (
          <View
            key={index}
            className=" w-[175px] h-[252px] rounded-xl m-2 justify-between border border-gray-400 border-shadow-[2px]"
          >
            <Image
              className="justify-items-center mx-[50px] my-1"
              source={item.image}
              width={94}
              height={69}
            />
            <Text className="text-center">{item.title}</Text>
            <Text className="text-start text-sm px-2 font-serif">
              {item.discription}
            </Text>
            <View className="flex-row">
              <Image
                source={require("@/assets/images/Iconcolor.png")}
                width={30}
                height={20}
                className="ml-3 mt-2"
              />
              <Text className="text-start font-serif mx-3 pb-2">
                {item.date}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
