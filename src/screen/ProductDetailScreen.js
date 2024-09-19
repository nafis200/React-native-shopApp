import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { cartContext } from "../context/Cartcontext";
const ImageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
   
  const navigation = useNavigation()
  const {addToCart} = useContext(cartContext)

  const route = useRoute()

  const item = route.params.item 
  
  const [selectedSize, setSelectedSize] = useState(null);
  const colorArray = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#8E44AD",
    "#2ECC71",
  ];

  const [selectedColor, setSelectedColor] = useState(null);
  const handleAddToCart = (item)=>{
        item.size = selectedSize 
        item.color = selectedColor
        addToCart(item)
        navigation.navigate("Cart")
  };
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Header />
      </View>
      <Image source={{ uri: item.image }} style={styles.coverimage} />

      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: "black" }]}>{item.title}</Text>
        <Text style={[styles.price, { color: "black" }]}>${item.price}</Text>
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

      <Text style={[styles.title, { color: "black" },styles.colorText]}>
        {item.size}
      </Text>

      <View style={styles.colorContainer}>
        {colorArray.map((item,index) => {
          return (
            <TouchableOpacity 
              key ={index}
              onPress={() => {
                setSelectedColor(item);
              }}
              style={styles.circleBorder}
            >
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor: item,
                  },
                  selectedColor === item && {
                    borderColor: 'black',
                    borderWidth: 2,
                  },
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>{
          handleAddToCart(item)
      }}>
      
        <Text style={[{color:'black'},styles.buttonText]}>Add to cart</Text>

      </TouchableOpacity>

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
  colorText: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  colorContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 10,
    marginVertical: 10,
  },
  circleBorder: {
    height: 40,
    width: 40,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText:{
     fontSize:24,
     fontWeight:"600",
     textAlign:'center',
     color:'white'
  },
  button:{
    backgroundColor:"#E96E6E",
    padding:30,
    borderRadius:30,
    marginHorizontal:10,
    marginVertical:5
  }
});
