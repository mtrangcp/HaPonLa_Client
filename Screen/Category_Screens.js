import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons"; // Đảm bảo bạn đã cài đặt và liên kết thư viện icon

const Category_Screens = () => {
  const [selectedTab, setSelectedTab] = useState("Romance"); // Thể loại sách mặc định khi mở màn hình là Tình cảm

  const bookCategories = ["Romance", "Mystery", "Fiction"]; // Các thể loại sách

  const renderBookCategories = () => {
    return bookCategories.map((category) => (
      <TouchableOpacity
        key={category}
        style={{ marginRight: 20 }}
        onPress={() => setSelectedTab(category)}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: selectedTab === category ? "bold" : "normal",
          }}
        >
          {category}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Phần Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Icon name="search" size={25} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Icon name="notifications" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="chatbubble-ellipses" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View></View>

      {/* Phần danh sách các thể loại sách */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 20, marginBottom: 20 }}
      >
        {renderBookCategories()}
      </ScrollView>

      {/* Phần hiển thị sách theo thể loại */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
          {selectedTab}
        </Text>
        {/* Thêm danh sách sách theo thể loại ở đây */}
      </View>

      {/* Phần Tab Bar dưới cùng */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <TouchableOpacity>
          <Icon name="home" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="list" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="cart" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Category_Screens;
