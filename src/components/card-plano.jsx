import '../css/planos.css'

function CardPlano() {

    return (
        <div className='conteudo-plano'>
            <h1>Escolha o plano que deseja assinar</h1>
            <ul className='cards-plano'>
                <li className="card-tudo-plano">
                    <h2>Plano Basic</h2>
                    <ul className='card-dentro'>
                        <li>Recomendação Leve</li>
                        <li>Não possui nenhum tipo de prioridade na hora da divulgação</li>
                        <li>Teste 45 dias Grátis</li>
                    </ul>
                    <p>R$60,00</p>
                    <button className="btn-confirmar"><a href="/login">Confirmar</a></button>
                </li>
                <li className="card-tudo-plano">
                    <h2>Plano Standard</h2>
                    <ul className='card-dentro'>
                        <li>Recomendação Média</li>
                        <li>Possuem prioridade na divulgação dos serviços</li>
                        <li>Teste 3 semanas Grátis</li>
                    </ul>
                    <p>R$90,00</p>
                    <button className="btn-confirmar"><a href="/login">Confirmar</a></button>
                </li>
                <li className="card-tudo-plano">
                    <h2>Plano Premium</h2>
                    <ul className='card-dentro'>
                        <li>Recomendação Alta</li>
                        <li>Possuem prioridade na divulgação dos serviços</li>
                        <li>É divulgado nas publicidades do nosso aplicativo feitas em outras plataformas</li>
                        <li>Teste 1 semana Grátis</li>
                    </ul>
                    <p>R$120,00</p>
                    <button className="btn-confirmar"><a href="/login">Confirmar</a></button>
                </li>
          </ul>
          
        </div>
    )
  }
  
  export default CardPlano