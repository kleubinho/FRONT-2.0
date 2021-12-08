import * as React from "react";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { servidor } from "../config/Path";
import { styles } from "../css/Style"

let us = "";
let pw = "";
let resultado: any=[];

export default function Login({ navigation }) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.imgcont}>
                <Image source={{ uri: "https://seeklogo.com/images/S/senac-logo-4F23FCC138-seeklogo.com.png" }} style={styles.img} />
            </View>
            <View style={styles.controll} >
                <TextInput placeholder="Usuário" value={user} onChangeText={(value) => setUser(value)} style={styles.input} />
                <TextInput placeholder="Senha" value={password} secureTextEntry onChangeText={(value) => setPassword(value)} style={styles.input} />
            </View >

            <TouchableOpacity
                style={styles.btnlogin}

                onPress={() => {
               
                    us = user;
                    pw = password;

                    let retorno = efetuarLogin();
               
                    if (retorno[0] == "Logado") {
                        navigation.navigate("Home", { dados: retorno })
                    }
                }}
            >
                <Text style={styles.txtbtnentrar}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btncadastrar} onPress={() => { navigation.navigate("Cadastro") }}>
                <Text style={styles.txtbtncadastrar}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

function efetuarLogin() {
    fetch(`${servidor}/login`, {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            user: us,
            password: pw
        })
    })
        .then((response) => response.json())
        .then((rs) => {
            resultado[0] = rs.output;
            resultado[1] = rs.payload;
            resultado[2] = rs.token;
     
        }
        )
        .catch((erro) => console.error(`Erro ao tentar encontrar API->${erro}`))
        return resultado;
}