// import React from 'react'
import React, { useState, useRef } from "react"
import { Div, Image, DivItems, H1, InputLabel, Input, Button, User } from "./style"
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"

// const users = [];
// React HOOKS => Ferramentas auxiliares




//Sintaxe JSX - Mistura linguagem JS e HTML
function App() {
  // React HOOKS => Ferramentas auxiliares
  const [users, setUsers] = useState([])
  const inputName= useRef()
  const inputAge= useRef()


  function addNewUser(){
    setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value}]) //Estado noreact é IMUTÀVEL, não dá para usar push precisa criar um novo array para aparecer
    //Como manter usuários antigos? SPREAD OPERATOR usar "...users"
    // XXusers.push({ id: Math.random(), name: "Rodolfo", age: "25" })XX
  }

  function deleteUser(userId){
    // console.log("Eu sou o id ", userId)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
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
        <ul>
          
            {users.map((user)=>(
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={()=>deleteUser(user.id)}><img src={Trash}/></button>
              </User>
            ))}
          
        </ul>
      </DivItems>
      
    </Div>
    //Linguagem HTML {JS}
  )
}

export default App
