import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface IProduct{
    name: string
    id: number
}

const ProductComponent = (props: IProduct) =>{
    return (<View style={styles.mainContainer}>
        <Text style={styles.text}>{props.name}</Text>
    </View>)
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: "#ffffff",
        height:20,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color:"#328ba8"
    }
})
export default ProductComponent;