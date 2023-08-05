import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface IProduct{
    name: string
    id: number
}

const ProductComponent = (props: IProduct) =>{
    return (<View style={styles.mainContainer}>
        <Text>{props.name}</Text>
    </View>)
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: "#000000",

        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default ProductComponent;