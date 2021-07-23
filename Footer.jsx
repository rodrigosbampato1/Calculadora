import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {styles} from "./styles/style"

export default function Header() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text2}> SoulCode Academy </Text>
            <Text style={styles.text2}> Desenvolvido por : Rodrigo Sbampato</Text>
        </View>
    )
}