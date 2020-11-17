import React, { createContext, useState, useEffect } from "react";
import { Alert, ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function load() {
      await AsyncStorage.getItem("@icheff:usuario")
        .then((resp) => {
          setUsuario(JSON.parse(resp));
        })
        .catch((err) => {
          console.log("erro asyncstorage");
        });
    }

    load();
  }, []);

  async function acessar(email, password) {
    api.post("Login", { email, password }).then((response) => {
      ToastAndroid.show("Logado com sucesso.", ToastAndroid.SHORT);
    });
  }

  async function criar(name, username, email, password, level) {
    if (!name || !username || !email || !password || !level) {
      ToastAndroid.show("Preencha os campos corretamente.", ToastAndroid.SHORT);
      return false;
    }

    api
      .post("SignUp", { name, username, email, password, level })
      .then((response) => {
        ToastAndroid.show("Usuário criado com sucesso.", ToastAndroid.SHORT);
      })
      .catch((err) => console.log(err));
    //setUsuario(null);
  }

  async function sair() {
    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!usuario,
        usuario,
        acessar,
        criar,
        sair,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
