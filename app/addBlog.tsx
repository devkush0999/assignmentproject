import Header from "@/components/header/Header";
import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
// import { BlogContext } from "@/app/BlogContext";

const PostForm = () => {
  // const { addPost } = useContext(BlogContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    date: "",
  });

  const handleChange = (name: any, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { title, description, image, date } = formData;
    if (title && description && image && date) {
      // addPost(formData);
      setFormData({ title: "", description: "", image: "", date: "" }); // Reset the form
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          value={formData.title}
          onChangeText={(value) => handleChange("title", value)}
          placeholder="Enter title"
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.textArea}
          value={formData.description}
          onChangeText={(value) => handleChange("description", value)}
          placeholder="Enter description"
          multiline
        />

        <Text style={styles.label}>Image URL:</Text>
        <TextInput
          style={styles.input}
          value={formData.image}
          onChangeText={(value) => handleChange("image", value)}
          placeholder="Enter image URL"
        />

        <Text style={styles.label}>Date:</Text>
        <TextInput
          style={styles.input}
          value={formData.date}
          onChangeText={(value) => handleChange("date", value)}
          placeholder="YYYY-MM-DD"
        />

        <Button title="Add Post" onPress={handleSubmit} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  textArea: {
    height: 80,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
    textAlignVertical: "top",
  },
});

export default PostForm;
