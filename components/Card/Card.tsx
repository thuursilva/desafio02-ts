import './Card.css'

export const Card = () => {
  return(
      <div>
        <h1 className='title'>Faça o login</h1>
        <div className='container'>
          <input type='email' placeholder='E-mail'/>
          <input type='password' placeholder='Senha'/>
        </div>
      </div>
  )
}