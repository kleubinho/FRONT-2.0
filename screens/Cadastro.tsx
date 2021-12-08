import * as React from 'react'
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { servidor } from '../config/Path';
import { styles } from '../css/Style';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


let name = "";
let email = "";
let cpf = "";
let user = "";
let password = "";

export default function Cadastro() {

    // Vamos criar o estado inicial das caixas
    // do formulário
    const [nameDocente, setNameDocente] = React.useState("");
    const [emailDocente, setEmailDocente] = React.useState("");
    const [cpfDocente, setCpfDocente] = React.useState("");
    const [userDocente, setUserDocente] = React.useState("");
    const [passwordDocente, setPasswordDocente] = React.useState("")


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Cadastro</Text>
            </View>

<ScrollView horizontal={false}>
            <View style={styles.imgcont1}>
                <Image source={{ uri: "https://seeklogo.com/images/S/senac-logo-4F23FCC138-seeklogo.com.png" }} style={styles.img} />
            </View>


            <View style={styles.controll}>
                <View style={styles.icons}>
                    <TextInput
                        placeholder="Nome do Docente"
                        style={styles.inputcadastro}
                        value={nameDocente}
                        onChangeText={(value) => setNameDocente(value)}
                    />
                    <MaterialCommunityIcons name="rename-box" size={24} color="#004A8C" />
                </View>
                <View style={styles.icons}>
                    <TextInput
                        placeholder="E-mail"
                        keyboardType="email-address"
                        style={styles.inputcadastrol}
                        value={emailDocente}
                        onChangeText={(value) => setEmailDocente(value)}
                    />
                    <MaterialCommunityIcons name="email" size={24} color="#FF9057" />
                </View>

                <View style={styles.icons}>
                    <TextInput
                        placeholder="CPF"
                        keyboardType="number-pad"
                        style={styles.inputcadastro}
                        value={cpfDocente}
                        onChangeText={(value) => setCpfDocente(value)}
                    />
                    <MaterialCommunityIcons name="ticket-account" size={25} color="#004A8C" />
                </View>


                <View style={styles.icons}>
                    <TextInput
                        placeholder="Usuário"
                        style={styles.inputcadastrol}
                        value={userDocente}
                        onChangeText={(value) => setUserDocente(value)}
                    />
                    <AntDesign name="user" size={24} color="#FF9057" />
                </View>

                <View style={styles.icons}>

                    <TextInput
                        placeholder="Senha "
                        style={styles.inputcadastro}
                        secureTextEntry
                        value={passwordDocente}
                        onChangeText={(value) => setPasswordDocente(value)}
                    />
                    <AntDesign name="lock" size={24} color="#004A8C" />
                </View>

                <TouchableOpacity style={styles.btncadastrar2}
                    onPress={() => {
                        name = nameDocente;
                        email = emailDocente.toLowerCase();
                        cpf = cpfDocente;
                        user = userDocente.toLowerCase();
                        password = passwordDocente;

                        efetuarCadastro();

                        setNameDocente("");
                        setEmailDocente("");
                        setCpfDocente("");
                        setUserDocente("");
                        setPasswordDocente("");
                    }}
                >
                    <Text style={styles.txtbtncadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    )
}

function efetuarCadastro() {
    // Usarei um fetch para a busca de dados
    // por url em JavaScript
    fetch(`${servidor}/cadastro`, {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            cpf: cpf,
            user: user,
            password: password,
        })
    })
        .then((response) => response.json())
        .then((resultado) => {
            Alert.alert("Aviso", resultado.output)
        })
        .catch((erro) => console.error(`Erro ao executar->${erro}`))
}