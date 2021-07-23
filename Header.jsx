import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {styles} from "./styles/style"

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text1}> Super Calculadora </Text>
            
        </View>
    )
}