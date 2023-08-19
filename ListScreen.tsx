import React, { useState } from 'react';
import { View, Text, FlatList, ListRenderItem ,StyleSheet,Button} from "react-native";
import ProductComponent, { IProduct } from "./Components/ProductComponent";
import axios from "axios";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }
const ListScreen = () =>{
    const [products, setProducts] = useState<Product[]>([]);
    
    const getStore = async() =>{
        try {
            const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
            setProducts(response.data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
    }
    const renderItem = ({ item }: { item: Product }) => (
        <View >
          <Text >{item.title}</Text>
          <Text >$ {item.price.toFixed(2)}</Text>
        </View>
      );
    
    return(
        
     
        <View style={styles.Container}>
        <Button title="Fetch Products" onPress={getStore} />
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        height:"100%"
      }
})

export default ListScreen;