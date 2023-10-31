import '../css/Home.css'
import '../css/global.css'
import casalIdoso from '../img/casalIdoso.png'

function QuemSomos() {

    return (
        <article className='quemsomos container'>
            <img src={casalIdoso}/>                
            <div className='conteudo-somos'>
                <h1>Quem Somos</h1>
                <p className='p1'>Somos uma empresa prestadora de serviços para idosos que visa oferecer mais qualidade de vida, conforto e segurança para os clientes</p>
                <p>Dispomos de uma variedade de serviços personalizados de acordo com as necessidades de cada idoso, abragendo cuidados domiciliares, acompanhamento médico, atividades recreativas, transporte e muito mais.</p>
                <p>Temos uma equipe de profissionais capacitados e experientes que tratam os idosos com respeito, carinho e dedicação. </p>
                <p>Nossa missão é ser referência no mercado de serviços para idosos, garantindo a satisfação e o bem-estar dos clientes e familiares.</p>
                <p>Nossos valores são a ética, a transparência, a responsabilidade e a humanização. Trazendo para vocês, conforto, facilidade e segurança.</p>
                
            </div>
        </article>
    )
  }
  
  export default QuemSomos