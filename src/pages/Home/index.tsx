
import './style.css'
import api from '../../services/api';
import User from './interface/interface';
import { useEffect, useState, useRef} from 'react';


function Home() {
  const [usuarios, setUsuarios] = useState<User[]>([])
  const inputName = useRef<HTMLInputElement>(null)
  const inputIdade = useRef<HTMLInputElement>(null)
  const inputEmail = useRef<HTMLInputElement>(null)

async function getUsers() {
  try{
    const usuariosApi = await api.get('')
    setUsuarios(usuariosApi.data)
  }
  catch (error) {
    console.error('Erro ao buscar usuarios', error)
  }
}

async function createUser() {
  try{
  await api.post('', {
    nome: inputName.current?.value,
    idade: inputIdade.current?.value,
    email: inputEmail.current?.value,
   })
   
  }catch{
    console.error('Erro ao cadastrar usuario')
  }
}

useEffect(() => {
getUsers()
},[])
 


  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de usuarios</h1>
        <input placeholder='nome' type="text" name='nome' ref={inputName}/>
        <input type="text" name='idade' ref={inputIdade}/>
        <input type="text" name='email' ref={inputEmail}/>
        <input type="password" name='senha'/>
        <button type='button' onClick={createUser}>Cadastrar</button>
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
