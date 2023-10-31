import '../css/Home.css'
import '../css/global.css'
import chapeu from '../img/chapeu.svg'
import estetoscopio from '../img/estetoscopio.svg'
import coracao from '../img/coracao.svg'

function Profissionais() {

    return (             
            <div className='conteudo-profissionais'>
                
                <div className="profissionais-texto">
                <h1>Nossos Profissionais</h1>
                <p>A SeniorCare preza pela qualidade da sua equipe de cuidadores, que possuem:</p>
                </div>

                <div className="cards container">
                    <article className='profissionais-bg'>
                        <img src={estetoscopio} width={90}height={90}/>
                        <h1>Especialização</h1>
                        <p>Organização proficientemente engajada em oferecer serviços de assistência em ambientes residenciais.</p>
                    </article>

                    <article className='profissionais-bg'>
                        <img src={chapeu} width={90}height={90}/>
                        <h1>Capacitação</h1>
                        <p>Com a presença de profissionais qualificados, é possível obter o suporte necessário para o seu ente querido.</p>
                    </article>

                    <article className='profissionais-bg'>
                        <img src={coracao} width={90}height={90}/>
                        <h1>Dedicação</h1>
                        <p>A afetuosidade e o empenho demonstrados durante o convívio são elementos distintivos em nossa gama de serviços.</p>
                    </article>
                </div>
            </div>
    )
  }
  
  export default Profissionais