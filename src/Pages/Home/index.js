// import React from 'react'
import React, { useState, useRef } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

import { Image, InputLabel, Input } from "./style"
import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"
import Container from "../../Components/Container/index"
import H1 from "../../Components/Title/index"
import ContainerItems from "../../Components/ContainerItems/index"
import Button from "../../Components/Button/index"

// const users = [];
// React HOOKS => Ferramentas auxiliares

//Sintaxe JSX - Mistura linguagem JS e HTML
function App() {
  // React HOOKS => Ferramentas auxiliares
  const [users, setUsers] = useState([])
  const inputName= useRef()
  const inputAge= useRef()
  
  const history = useHistory()

  async function addNewUser(){
    //Guardar dados no back-end:
    const newUser = await axios.post("http://localhost:3001/users", {name: inputName.current.value, age: inputAge.current.value})
    // setUsers(newUser.data)
    
    //Add dados no array users:
    setUsers([...users, newUser])
    //Estado no react é IMUTÀVEL, não dá para usar push precisa criar um novo array para aparecer
    //Se é IMUTÁVEL, como manter usuários antigos? SPREAD OPERATOR usar "...users"
    
    history.push("/react-first-project/usuarios")
  }
  
  //Linguagem JS
  return (
    <Container>
      <Image alt="logo-image" src={People} />
        <ContainerItems>
        <H1>Olá!</H1>
        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome"></Input>
        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder="Digite sua idade"></Input>
        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow" src={Arrow} />
        </Button>
        
        
        </ContainerItems>      
    </Container>
    //Linguagem HTML {JS}
  )
}

export default App
