import { View, Text, Image, Button } from "react-native";
import React from "react";
import DropdownComponent from "./Dropdown";
import { Appbar } from "react-native-paper";

const Header = () => {
  const _handleSearch = () => console.log("Searching");
  return (
    <>
      <Appbar.Header className="flex-row justify-between">
        <Appbar.Action icon="chevron-left" onPress={() => {}} />

        <View className="justify-center">
          {/* <Text className='text-blue-600 justify-center'>hello</Text> */}
          <Image
            source={require("@/assets/images/logo.png")}
            height={71}
            width={21}
          />
        </View>
        <View className="flex-row ml-5 gap-3 ">
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Image
            className="rounded-full border-[1px]"
            source={{
              uri: "https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-standing-in-snowfall-while-sun-is-shining.jpg?w=1024&quality=50",
            }}
            style={{ width: 42, height: 42 }}
          />
        </View>
      </Appbar.Header>
      <View className=" rounded-lg my-5">
        <DropdownComponent />
      </View>
    </>
  );
};

export default Header;
