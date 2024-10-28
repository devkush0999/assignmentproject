import { View, Text, SafeAreaView, ScrollView } from "react-native";
// import React from "react";
import Header from "@/components/header/Header";
import Banner from "@/components/header/Banner";
// import { BlogProvider } from "@/app/BlogContext";

type Props = {};

const blog = (props: Props) => {
  return (
    <View className="bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="mx-4">
        <Header />

        {/* <BlogProvider> */}
        <Banner />
        {/* </BlogProvider> */}
      </ScrollView>
    </View>
  );
};
export default blog;
