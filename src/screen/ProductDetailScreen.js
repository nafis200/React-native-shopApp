import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
const ImageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const colorArray = [
    "#FF5733","#33FF57","#3357FF","#F1C40F","#8E44AD","#2ECC71"
  ]

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Header />
      </View>
      <Image source={{ uri: ImageUrl }} style={styles.coverimage} />

      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: "black" }]}>Winter Coat</Text>
        <Text style={[styles.price, { color: "black" }]}>$35.00</Text>
      </View>

      <View style={styles.sizeContainer}>
        <Text style={[styles.sizetext, { color: "black" }, styles.title]}>
          {sizes.map((size, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedSize(size);
                }}
                style={styles.sizeValueContainer}
                key={index}
              >
                <Text
                  style={[
                    styles.title,
                    styles.sizeValue,
                    selectedSize === size && { color: "#E55B5B" },
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            );
          })}
        </Text>
      </View>

      <Text style={[styles.title, { color: "black"},styles.colorText]}>Colors</Text>

      <View style={styles.colorContainer}>
           
         {
            colorArray.map((item)=>{
              return(
                <View> 
                   <View style={[styles.circle,{
                    backgroundColor:item
                   }]} />
                </View>
              )
            }) 
         }

      </View>


    </LinearGradient>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeaderContainer: {
    padding: 20,
  },
  coverimage: {
    width: "100%",
    height: 220,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: "#444444",
  },
  price: {
    fontSize: 20,
    color: "#4D4C4C",
  },
  sizetext: {
    marginHorizontal: 20,
  },
  sizeContainer: {
    marginHorizontal: 20,
  },
  sizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "white",
    rowGap: 10,
    gap: 10,
  },
  sizeValue: {
    fontSize: 18,
  },
  colorText:{
    marginHorizontal:20,
    marginTop:10
  },
  circle:{
    height:36,
    width:36,
    borderRadius:18
  },
  colorContainer:{
     flexDirection:'row',
     marginHorizontal:20,
     gap:10,
     marginVertical:10
  }
});
