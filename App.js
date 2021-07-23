import React from 'react';
import { StyleSheet, Text, View , SafeAreaView , Status, StatusBar } from 'react-native';
import Header from './src/componentes/Header';
import Content from './src/componentes/Content';
import Footer from './src/componentes/Footer';


export default function App() {
  return (
    <SafeAreaView>
      <Header/>
      <Content/>
      <Footer/>
      <StatusBar hidden = {false}></StatusBar>
    </SafeAreaView>
  );
}



