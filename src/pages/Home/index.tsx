
import './style.css'

function Home() {

  const usuarios = [
    {id: 1, nome: 'joao', email:'joao@email.com', idade: 20},
    {id: 1, nome: 'joao', email:'joao@email.com', idade: 20},
    {id: 1, nome: 'joao', email:'joao@email.com', idade: 20},
  ];


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
