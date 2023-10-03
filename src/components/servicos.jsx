import '../css/Home.css'
import '../css/global.css'
import cuidadorVelho from '../img/cuidadorVelho.png'

function Servicos() {

    return (
        <article className='servicos-bg'>
            <div className='servicos container'>
            <div className='conteudo-servicos'>
                <h1>O que oferecemos</h1>
                <p>Nossa empresa promete uma gama de cuidados a seus familiares de idade mais avançada</p>
                <ul className='lista-servicos'>
                    <li>Fácil contratação de cuidadores</li>
                    <li>Segurança e Confiança</li>
                    <li>Serviços de cuidados à saúde</li>
                    <li>Profissionais qualificados</li>
                    <li>Garantia de bem-estar físico e mental</li>
                </ul>
            </div>
            <img src={cuidadorVelho}/> 
            </div>
        </article>
    )
  }
  
  export default Servicos