// import React from 'react'
import React, { useState, useRef } from "react"
import axios from "axios"
import { Div, Image, DivItems, H1, InputLabel, Input, Button } from "./style"
import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"

// const users = [];
// React HOOKS => Ferramentas auxiliares

//Sintaxe JSX - Mistura linguagem JS e HTML
function App() {
  // React HOOKS => Ferramentas auxiliares
  const [users, setUsers] = useState([])
  const inputName= useRef()
  const inputAge= useRef()

  async function addNewUser(){
    //Guardar dados no back-end:
    const newUser = await axios.post("http://localhost:3001/users", {name: inputName.current.value, age: inputAge.current.value})
    // setUsers(newUser.data)
    
    //Add dados no array users:
    setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value}])
    //Estado no react é IMUTÀVEL, não dá para usar push precisa criar um novo array para aparecer
    //Se é IMUTÁVEL, como manter usuários antigos? SPREAD OPERATOR usar "...users"
  }
  
  //Linguagem JS
  return (
    <Div>
      <Image alt="logo-image" src={People} />
        <DivItems>
        <H1>Olá!</H1>
        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome"></Input>
        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder="Digite sua idade"></Input>
        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow" src={Arrow} />
        </Button>
        
        </DivItems>
      
    </Div>
    //Linguagem HTML {JS}
  )
}

export default App
