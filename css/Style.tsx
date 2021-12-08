import { StyleSheet, TouchableOpacity } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    // padding: 10,
  },

  imgcont: {
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  
  imgcont1: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    height: 130,
    width: 220,
  },

  controll: {
    width: "80%",
    justifyContent: "center",
    padding:12
  },

  input: {
    marginTop: 20,
    borderColor: "#eee",
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 18,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "600",
    right: -40,
    
  },
  inputcadastro: {
    width:280,
    marginTop: 20,
    borderColor: "#004A8C",
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "600",
    right: -40,
    
  },
  inputcadastrol:{
    width:280,
    marginTop: 20,
    borderColor: "#FF9057",
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "600",
    right: -40,
    color:"black"
  },
  btnlogin: {
    backgroundColor: "#004A8C",
    borderRadius: 10,
    marginTop: 8,
    width: "80%",
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    right: -40,
  },
  txtbtnentrar: {
    color: "white",
    fontSize: 17,
  },

  btncadastrar: {
    width: "80%",
    padding: 18,
    borderWidth: 1.5,
    marginTop: 10,
    right: -40,
    borderRadius: 10,
    borderColor: "#eee",
    backgroundColor:"#FF9057"
  },
  btncadastrar2: {
    width: "100%",
    padding: 20,
    borderWidth: 1.5,
    marginTop: 10,
    right: -40,
    borderRadius: 10,
    borderColor: "#eee",
    backgroundColor:"#FF9057",
    
  },
  
  txtbtncadastrar: {
    textAlign:"center",
    fontSize:17,
    fontWeight:"600",
    color:"white"
    

  },
  titulo:{
    marginTop:10,
    color:"#FF9057",
    fontSize:22
    
  },
  header:{
    backgroundColor:"#004A8C",
    width:"100%",
    height:70,
    justifyContent:"center",
    alignItems:"center"
  },
  icons:{
    flexDirection:"row",
    alignItems:'center',

  }
});
