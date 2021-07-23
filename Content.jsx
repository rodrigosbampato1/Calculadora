import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import {styles} from "./styles/style"


export default function Content() {

    const [calculadora, setCalculadora] = useState({
        valor1:0,
        valor2:0
        
    })

    const[resultado,setResultado]= useState(0)


    return(
       <View style={styles.content}>
       
            <Text style={styles.text}>O Resultado é : {resultado}{'\n'}</Text>


            <TextInput style={styles.input}
                placeholder="Valor 1 "
                keyboardType="numeric"
                onChangeText={
                    (valor)=> setCalculadora({
                        ...calculadora,valor1: parseInt(valor)
                    })
                    
                }
                
            />
           
            <TextInput style={styles.input}
                placeholder="Valor 2 "
                keyboardType="numeric"
                onChangeText={
                    (valor)=> setCalculadora({
                        ...calculadora,valor2: parseInt(valor)
                    })
                }
            />

            
            <View >
                
                <View style={styles.botao}>
                    <Button 
                        title="      +      "
                        
                        onPress={
                            ()=>setResultado(calculadora.valor1 + calculadora.valor2)
                        }
                    />
                
                    <Button 
                        title="      -      " 
                        onPress={
                            ()=>setResultado(calculadora.valor1 - calculadora.valor2)
                        }
                    />
                </View>

                <View style={styles.botao}>
                    <Button 
                        title="      *      "
                        onPress={
                            ()=>setResultado(calculadora.valor1 * calculadora.valor2)
                        }
                    />
                
            

                      
                
                    <Button 
                        title="     /      "
                        onPress={
                            ()=>setResultado(calculadora.valor1 / calculadora.valor2)
                        }
                    />
                </View>

                <View style={styles.botao}>

                
                    <Button 
                        title="      %      "
                        onPress={
                            ()=>setResultado(calculadora.valor1 % calculadora.valor2)
                        }
                    />
                

                
                    <Button 
                    title="      ^     "
                    onPress={
                        ()=>setResultado(calculadora.valor1 ** calculadora.valor2)
                    }
                    />
                </View>
           
            </View>
            

        </View>
    )
}