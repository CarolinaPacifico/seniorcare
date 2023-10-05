function CardPlano() {

    return (
        <div className='conteudo-prestadores'>
            <h1>Prestadores de serviço disponíveis</h1>
            <ul className='cards-prestadores'>
                <li className="card-tudo">
                    <img src={julia} alt="" />
                    <h2>Plano A</h2>
                    <ul className='card-dentro'>
                        <li>Enfermeira</li>
                        <li>34 anos</li>
                        <li>6 anos de experiência</li>
                    </ul>
                    <p>R$60,00</p>
                </li>
                <li className="card-tudo">
                    <h2>Plao B</h2>
                    <ul className='card-dentro'>
                        <li>Cuidador</li>
                        <li>45 anos</li>
                        <li>21 anos de experiência</li>
                    </ul>
                    <p>R$90,00</p>
                </li>
                <li className="card-tudo">
                    <h2>Plano C</h2>
                    <ul className='card-dentro'>
                        <li>Auxiliar de enfermagem </li>
                        <li>35 anos</li>
                        <li>8 anos de experiência</li>
                    </ul>
                    <p>R$120,00</p>
                </li>
          </ul>
        </div>
    )
  }
  
  export default CardPlano