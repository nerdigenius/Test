import React from "react";
import { View, Text, FlatList, ListRenderItem ,StyleSheet,Button} from "react-native";
import ProductComponent, { IProduct } from "./Components/ProductComponent";
import axios from "axios";

export interface Products{
    id:number
    title: string
    price: number
}
const ListScreen = () =>{
    const products:IProduct[] = [
        {
            name: "Alu",
            id: 1
        },
        {
            name: "Piyaj",
            id: 2
        },
        {
            name: "Roshun",
            id: 3
        }
    ]
    const getStore = async() =>{
        const response = await axios.get(`https://fakestoreapi.com/products`)
        console.log(response.data)
    }
    
    return(
        
     
        <View style={styles.Container}>
            <Text>WELCOME TO LIST SCREEN</Text>
            {products.map((product)=> (
                <ProductComponent name={product.name} id={product.id} key={product.id}/>
            ))}
            <View>
                <Button title="Get Response" onPress={getStore}></Button>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        height:"100%"
      }
})

export default ListScreen;