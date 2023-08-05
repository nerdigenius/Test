import React from "react";
import { View, Text, FlatList, ListRenderItem ,StyleSheet} from "react-native";
import ProductComponent, { IProduct } from "./Components/ProductComponent";

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
    // const handleRenderItem : ListRenderItem<IProduct> = ({item}) =>
    //     <Product name={item.name} id={item.id}/>;
    
    return(
        <View style={styles.Container}>
            <Text>WELCOME TO LIST SCREEN</Text>
            {products.map((product)=> (
                <ProductComponent name={product.name} id={product.id} key={product.id}/>
            ))}
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