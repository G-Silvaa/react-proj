
import './style.css'
import api from '../../services/api';
import User from './interface/interface';
import { useEffect } from 'react';


function Home() {

  let usuarios: User[] = []

async function getUsers() {
  try{
    usuarios = await api.get('')
    console.log(usuarios.data)
  }
  catch (error) {
    console.error('Erro ao buscar usuarios', error)
  }
}

useEffect(() => {
getUsers()
},[])
 


  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de usuarios</h1>
        <input type="text" name='nome' />
        <input type="text" name='idade' />
        <input type="text" name='email' />
        <input type="password" name='senha'/>
        <button type='button'>Cadastrar</button>
      </form>

      <div className="cards">
       {usuarios.map((usuarios)=> (
        <div className="card" key={usuarios.id}>
          <h2>{usuarios.nome}</h2>
          <h2>{usuarios.idade}</h2>
          <h2>{usuarios.email}</h2>
        </div>
       ))}
      </div>
    </div>
  )
}

export default Home
