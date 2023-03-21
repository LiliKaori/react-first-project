// import React from 'react'
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Div, Image, DivItems, H1, Button, User } from "./style"
import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

// const users = [];
// React HOOKS => Ferramentas auxiliares

//Sintaxe JSX - Mistura linguagem JS e HTML
function Users() {
  // React HOOKS => Ferramentas auxiliares
  const [users, setUsers] = useState([])

  const history = useHistory()
  function goBackPage(){
    history.push("/")
  }

  //UseEffect - efeito colateral
  //Chamado qndo página carrega OU mudar o estado de dependência mudar 
  useEffect(()=>{
    async function fetchUsers(){
      //Mostrar na tela o array guardado no back-end
      const newUsers = await axios.get("http://localhost:3001/users") 
      setUsers(newUsers.data)    
    }
    fetchUsers()    
  }, [])

  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  //Linguagem JS
  return (
    <Div>
      <Image alt="logo-image" src={Avatar} />
      <DivItems>
        <H1>Usuários</H1>
        <ul>
          
            {users.map((user)=>(
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={()=>deleteUser(user.id)}><img src={Trash}/></button>
              </User>
            ))}
          
        </ul>
        <Button onClick={goBackPage}>
        <img alt="arrow" src={Arrow} /> Voltar 
        </Button>
        
      </DivItems>
      
    </Div>
    //Linguagem HTML {JS}
  )
}

export default Users
