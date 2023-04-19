// import React from 'react'
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

import { Image, User } from "./style"
import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"
import Container from "../../Components/Container/index"
import H1 from "../../Components/Title/index"
import ContainerItems from "../../Components/ContainerItems/index"
import Button from "../../Components/Button/index"


// const users = [];
// React HOOKS => Ferramentas auxiliares

//Sintaxe JSX - Mistura linguagem JS e HTML
function Users() {
  // React HOOKS => Ferramentas auxiliares
  const [users, setUsers] = useState([])

  const history = useHistory()
  function goBackPage(){
    history.push("/react-first-project")
  }

  //UseEffect - efeito colateral
  //Chamado qndo página carrega OU mudar o estado de dependência mudar 
  useEffect(()=>{
    async function fetchUsers(){
      //Mostrar na tela o array guardado no back-end
      const newUsers = await axios.get("https://node-first-project-beta.vercel.app/users") 
      setUsers(newUsers.data)    
    }
    fetchUsers()    
  }, [])

  async function deleteUser(userId){
    await axios.delete(`https://node-first-project-beta.vercel.app/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  //Linguagem JS
  return (
    <Container user={true}>
      <Image src={Avatar} alt="logo"/>
      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>
        <ul>
          
            {users.map((user)=>(
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={()=>deleteUser(user.id)}><img src={Trash} alt="arrow"/></button>
              </User>
            ))}
          
        </ul>
        <Button isBack={true} onClick={goBackPage}>
        <img alt="arrow" src={Arrow} /> Voltar 
        </Button>
        
      </ContainerItems>
      
    </Container>
    //Linguagem HTML {JS}
  )
}

export default Users
