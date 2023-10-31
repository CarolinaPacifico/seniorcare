import '../css/Login.css'
import '../css/global.css'

function CardLogin() {

    return (
        <article className='cardlogin-bg'>
            <div className='conteudo-servicos'>
                <h1>Bem vindo ao Sign Up</h1>
                <p>Preencha os dados de Login para acessar</p>
                <ul className='lista-servicos'>
                    <li>Fácil contratação de cuidadores</li>
                    <li>Segurança e Confiança</li>
                    <li>Serviços de cuidados à saúde</li>
                    <li>Profissionais qualificados</li>
                    <li>Garantia de bem-estar físico e mental</li>
                </ul>
            </div>
            <img src={cuidadorVelho}/> 
        </article>
    )
  }
  
  export default CardLogin